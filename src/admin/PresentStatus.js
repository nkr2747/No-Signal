import { API_URL } from "../config";
import React, { useState } from "react";
import axios from "axios";
import BookCover from "../components/BookCover";

const statusStyle = {
  color: "red",
};

export default function PresentStatus() {
  const [reqBooks, setReqBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [prevBorrowedBooks, setPrevBorrowedBooks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  function shelfBooks(book, index) {
    return (
      <div className="col-12 col-md-6 col-xl-4" key={book._id || index}>
        <div className="h-100 rounded p-3" style={{ backgroundColor: "white" }}>
          <div className="d-flex align-items-start gap-3">
            <BookCover
              src={book.image_url}
              title={book.title}
              author={book.author}
              alt={`${book.title} cover`}
              className="flex-shrink-0 rounded"
              style={{ height: "120px", width: "80px", objectFit: "cover" }}
            />
            <div className="min-w-0">
              <h6 className="mb-1 text-break">{book.title}</h6>
              <p className="small text-secondary mb-0 text-break">{book.author}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  //function to fetch books
  const fetchBooks = async (student) => {
    try {
      if (student) {
        const favBookRequests = student.favourites.map((bookId) =>
          axios.get(`${API_URL}/books/${bookId}`).then((response) => response.data)
        );
        const reqBookRequests = student.requested_books.map((bookId) =>
          axios.get(`${API_URL}/books/${bookId.book}`).then((response) => response.data)
        );
        const prevBorrowedBookRequests = student.previously_borrowed_books.map((bookId) =>
          axios.get(`${API_URL}/books/${bookId.book}`).then((response) => response.data)
        );
        const borrowedBookRequests = student.borrowed_books.map((bookId) =>
          axios.get(`${API_URL}/books/${bookId}`).then((response) => response.data)
        );

        const favBooks = await Promise.all(favBookRequests);
        const reqBooks = await Promise.all(reqBookRequests);
        const borrowedBooks = await Promise.all(borrowedBookRequests);
        const prevBorrowedBooks = await Promise.all(prevBorrowedBookRequests);

        setFavBooks(favBooks);
        setReqBooks(reqBooks);
        setBorrowedBooks(borrowedBooks);
        setPrevBorrowedBooks(prevBorrowedBooks);
      }
    } catch (error) {
      console.error("There was an error fetching the books!", error);
    }
  };
  //

  const [email, setEmail] = useState("");
  const [data, setData] = useState(null);

  const presentStatus = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`${API_URL}/users/${encodeURIComponent(email)}`, {
        withCredentials: true,
      });
      setData(response.data);
      await fetchBooks(response.data);
    } catch (requestError) {
      setData(null);
      setError(requestError.response?.data?.error || "Unable to find this student.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container  ">
        <div className="d-flex align-items-center  justify-content-center x-auto mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            className="bi bi-person-gear me-3"
            viewBox="0 0 16 16"
          >
            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
          </svg>
          <h1>
            Present <span style={statusStyle}>Status</span> of Students
          </h1>
        </div>

        <div className="card " style={{ width: "100%" }}>
          <div className="card-body">
            <div className="mb-3 row">
              <div className="col-md-9">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="RollNo@iitdh.ac.in"
                />
              </div>
              <div className="col-md-3 d-flex align-items-end">
                <button
                  type="search"
                  className="btn btn-outline-danger"
                  onClick={presentStatus}
                  disabled={loading || !email}
                >
                  {loading ? "Searching..." : "Search ID"}
                </button>
              </div>
            </div>
          </div>
        </div>
        {error && <p className="text-danger mt-3" role="alert">{error}</p>}
       
        {data && <><div
          className="container rounded my-2 p-3 d-flex justify-content-between align-items-center"
          style={{ backgroundColor: "white" }}
        >
          <p className="mb-0">
            <strong>Name:</strong> {data.name}
          </p>
          <p className="mb-0">
            <strong>Branch:</strong> {data.branch}
          </p>
          <p className="mb-0">
            <strong>Program:</strong> {data.program}
          </p>
        </div>
        {/* Navbar */}

        <h4 id="scrollspyHeading1">Favourite Books</h4>
        <div className="row py-2 g-5 my-2">
          {favBooks.map(shelfBooks)}
        </div>
        <h4 id="scrollspyHeading2">Borrowed Books</h4>
        <div className="row py-2 g-5 my-2">{borrowedBooks.map(shelfBooks)}</div>

        <h4 id="scrollspyHeading3">Requested Books</h4>
        <div className="row py-2 g-5 my-2">{reqBooks.map(shelfBooks)}</div>
        <h4 id="scrollspyHeading4">Previously Borrowed Books</h4>
        <div className="row py-2 g-5 my-2">
          {prevBorrowedBooks.map(shelfBooks)}
        </div>
        </>}
      </div>
    </>
  );
}
