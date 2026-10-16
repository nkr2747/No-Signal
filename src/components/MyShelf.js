import { API_URL } from "../config";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";
import BookCover from "./BookCover";

export default function MyShelf() {
  const navigate = useNavigate();
  const { authChecked } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [reqBooks, setReqBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [pendingReturnIds, setPendingReturnIds] = useState([]);
  const [removingFavoriteIds, setRemovingFavoriteIds] = useState([]);
  const [cancellingRequestIds, setCancellingRequestIds] = useState([]);

  useEffect(() => {
    if (!authChecked) return;
    let active = true;
    axios.get(`https://no-signal.onrender.com/about`, { withCredentials: true })
      .then((response) => { if (active) setUserData(response.data); })
      .catch(() => { if (active) navigate("/loginpage"); });
    return () => { active = false; };
  }, [authChecked, navigate]);

  useEffect(() => {
    if (!userData) return;
    const getBook = (id) => axios.get(`https://no-signal.onrender.com/books/${id}`).then((response) => response.data);
    const requestedIds = (userData.requested_books || []).map((request) => request.book?._id || request.book).filter(Boolean);
    Promise.all([
      Promise.all((userData.favourites || []).map((id) => getBook(id?._id || id))),
      Promise.all(requestedIds.map(getBook)),
      Promise.all((userData.borrowed_books || []).map((id) => getBook(id?._id || id))),
    ]).then(([favourites, requested, borrowed]) => {
      setFavBooks(favourites);
      setReqBooks(requested);
      setBorrowedBooks(borrowed);
    }).catch((error) => console.error("Unable to load shelf books:", error));
  }, [userData]);

  const handleRemoveFavourite = async (bookId) => {
    setRemovingFavoriteIds((ids) => [...ids, bookId]);
    try {
      await axios.delete(`https://no-signal.onrender.com/removefromfavourite/${bookId}`, { withCredentials: true });
      setFavBooks((books) => books.filter((book) => book._id !== bookId));
    } catch (error) {
      alert(error.response?.data?.message || "Unable to remove this book from your favourites.");
    } finally {
      setRemovingFavoriteIds((ids) => ids.filter((id) => id !== bookId));
    }
  };

  const handleCancelRequest = async (bookId) => {
    setCancellingRequestIds((ids) => [...ids, bookId]);
    try {
      await axios.delete(`https://no-signal.onrender.com/cancelbookrequest/${bookId}`, { withCredentials: true });
      setReqBooks((books) => books.filter((book) => book._id !== bookId));
      setUserData((user) => ({
        ...user,
        requested_books: (user.requested_books || []).filter((request) => String(request.book?._id || request.book) !== bookId),
      }));
    } catch (error) {
      alert(error.response?.data?.message || "Unable to cancel this borrow request.");
    } finally {
      setCancellingRequestIds((ids) => ids.filter((id) => id !== bookId));
    }
  };

  const handleReturnBook = async (bookId) => {
    try {
      await axios.post(`https://no-signal.onrender.com/returnbook`, { bookId }, { withCredentials: true });
      setPendingReturnIds((ids) => [...new Set([...ids, bookId])]);
      setUserData((user) => ({ ...user, return_requests: [...(user.return_requests || []), { book: bookId }] }));
      alert("Return request submitted. Library staff will review it.");
    } catch (error) {
      alert(error.response?.data?.message || "Unable to submit your return request.");
    }
  };

  const bookCard = (book, action) => (
    <div className="col-12 col-md-6 col-xl-4" key={book._id}>
      <div className="h-100 rounded p-3" style={{ backgroundColor: "white" }}>
        <div className="d-flex align-items-start gap-3">
          <BookCover
            src={book.image_url}
            title={book.title}
            author={book.author}
            alt={`${book.title} cover`}
            className="flex-shrink-0 rounded"
            style={{ height: "150px", width: "100px", objectFit: "cover" }}
          />
          <div className="min-w-0">
            <h5 className="mb-1 text-break">{book.title}</h5>
            <p className="mb-0 text-secondary text-break">{book.author}</p>
          </div>
        </div>
        {action && <div className="mt-3">{action}</div>}
      </div>
    </div>
  );

  if (!authChecked || !userData) {
    return <div className="container py-4" role="status">Loading your shelf…</div>;
  }

  const requestedSet = new Set((userData.requested_books || []).map((request) => String(request.book?._id || request.book)));
  const returnRequestSet = new Set((userData.return_requests || []).map((request) => String(request.book?._id || request.book)));

  return (
    <main className="container py-3">
      <h2 className="mb-3">My <span className="text-danger">Shelf</span></h2>
      <div className="rounded my-2 p-3 d-flex flex-wrap gap-3 justify-content-between" style={{ backgroundColor: "white" }}>
        <p className="mb-0"><strong>Name:</strong> {userData.name}</p>
        <p className="mb-0"><strong>Email:</strong> {userData.email}</p>
        <p className="mb-0"><strong>Branch:</strong> {userData.branch}</p>
        <p className="mb-0"><strong>Program:</strong> {userData.program}</p>
      </div>
      <div className="bg-body-tertiary p-3 rounded-2">
        <section className="mb-4">
          <h3 className="h4">Favourite Books</h3>
          <div className="row g-3">
            {favBooks.length === 0 && <p className="col-12 text-muted mb-0">No favourite books yet.</p>}
            {favBooks.map((book) => bookCard(book, (
              <button type="button" className="btn btn-outline-danger" onClick={() => handleRemoveFavourite(book._id)} disabled={removingFavoriteIds.includes(book._id)}>
                {removingFavoriteIds.includes(book._id) ? "Removing…" : "Remove favourite"}
              </button>
            )))}
          </div>
        </section>
        <section className="mb-4">
          <h3 className="h4">Borrowed Books</h3>
          <div className="row g-3">
            {borrowedBooks.length === 0 && <p className="col-12 text-muted mb-0">You have no borrowed books.</p>}
            {borrowedBooks.map((book) => bookCard(book, (
              <button
                type="button"
                onClick={() => handleReturnBook(book._id)}
                className="btn btn-outline-danger"
                disabled={pendingReturnIds.includes(book._id) || returnRequestSet.has(book._id)}
              >
                {pendingReturnIds.includes(book._id) || returnRequestSet.has(book._id) ? "Return pending" : "Request return"}
              </button>
            )))}
          </div>
        </section>
        <section>
          <h3 className="h4">Requested Books</h3>
          {reqBooks.length > 0 && <p className="small text-muted">Waiting for admin approval. Requests not approved within 24 hours are cancelled automatically.</p>}
          <div className="row g-3">
            {reqBooks.length === 0 && <p className="col-12 text-muted mb-0">No pending borrow requests.</p>}
            {reqBooks.map((book) => bookCard(book, (
              <button type="button" className="btn btn-outline-danger" onClick={() => handleCancelRequest(book._id)} disabled={cancellingRequestIds.includes(book._id) || !requestedSet.has(book._id)}>
                {cancellingRequestIds.includes(book._id) ? "Cancelling…" : "Cancel request"}
              </button>
            )))}
          </div>
        </section>
      </div>
    </main>
  );
}
