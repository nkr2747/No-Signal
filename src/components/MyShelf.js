import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

export default function MyShelf() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [reqBooks, setReqBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const callAboutPage = async () => {
    try {
      const res = await fetch("https://no-signal.onrender.com/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // credentials: "include",
      });
      const data = await res.json();
      setUserData(data);
      
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/loginpage");
    }
  };

  const fetchBooks = async () => {
    try {
      
      if (userData) {
        const favBookRequests = userData.favourites.map((bookId) =>
          axios.get(`https://no-signal.onrender.com/books/${bookId}`).then((response) => response.data)
        );
        const reqBookRequests = userData.requested_books.map((bookId) =>
          axios.get(`https://no-signal.onrender.com/books/${bookId.book}`).then((response) => response.data)
        );
        const borrowedBookRequests = userData.borrowed_books.map((bookId) =>
          axios.get(`https://no-signal.onrender.com/books/${bookId}`).then((response) => response.data)
        );

        const favBooks = await Promise.all(favBookRequests);
        const reqBooks = await Promise.all(reqBookRequests);
        const borrowedBooks = await Promise.all(borrowedBookRequests);

        setFavBooks(favBooks);
        setReqBooks(reqBooks);
        setBorrowedBooks(borrowedBooks);
      }
    } catch (error) {
      console.error("There was an error fetching the books!", error);
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [userData]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  function shelfBooks(book, index) {
    return (
      <div
        className="col-4 rounded mx-2 d-inline p-2"
        key={index}
        style={{ backgroundColor: "white" }}
      >
        <div className=" d-flex">
          <div className="d-inline">
            <img src={book.image_url} alt="" style={{ height: "120px" }} />
          </div>
          <div className="d-inline px-1">
            {book.title}
            <small>{book.author}</small>
          </div>
        </div>
      </div>
    );
  }

  const handleReturnBook = async (bookId) => {
    try {
      await axios.post('https://no-signal.onrender.com/returnbook', { bookId }, { withCredentials: true });
      setBorrowedBooks(borrowedBooks.filter(book => book._id !== bookId));
    } catch (error) {
      console.error(error);
    }
  };
  function fnBorrowedBooks(book, index) {
    return (
      <div
        className="col-4 rounded mx-2 d-inline p-2"
        key={index}
        style={{ backgroundColor: "white" }}
      >
        <div className=" d-flex">
          <div className="d-inline">
            <img src={book.image_url} alt="" style={{ height: "120px" }} />
          </div>
          <div className="d-inline px-1">
            {book.title}
            <small>{book.author}</small>
          </div>
          
        </div>
        <button type="button" onClick={() => handleReturnBook(book._id)} className="btn btn-danger my-2 align-self-end">Return</button>
        
      </div>
    );
  }

  return (
    <>
      <SearchBar state={true} />
      <div className="container py-3">
        <div className="container align-items-start my-2">
          <h5>
            My <span style={{ color: "red" }}>Shelf</span>
          </h5>
        </div>
        <div
          className="container rounded my-2 p-3 d-flex justify-content-between align-items-center"
          style={{ backgroundColor: "white" }}
        >
          <p className="mb-0">
            <strong>Name:</strong> {userData.name}
          </p>
          <p className="mb-0">
            <strong>Branch:</strong> {userData.branch}
          </p>
          <p className="mb-0">
            <strong>Department:</strong> {userData.program}
          </p>
        </div>
        {/* // */}
        <nav
          id="navbar-example2"
          class="navbar bg-body-tertiary px-3 mb-3" 
        >
          <ul class="nav justify-content-between text-center w-100" >
            <li class="nav-item ">
              <a class="nav-link link-secondary" href="#scrollspyHeading1">
                Favourites
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link link-secondary" href="#scrollspyHeading2">
                Borrowed
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link link-secondary" href="#scrollspyHeading3">
                Requested
              </a>
            </li>
          </ul>
        </nav>
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-root-margin="0px 0px -40%"
          data-bs-smooth-scroll="true"
          class="scrollspy-example bg-body-tertiary p-3 rounded-2"
          tabindex="0"
        >
          <h4 id="scrollspyHeading1">Favourite Books</h4>
          <div className="row py-2 g-5 my-2 justify-content-around">
            {favBooks.map(shelfBooks)}
          </div>
          <h4 id="scrollspyHeading2">Borrowed Books</h4>
          <div className="row py-2 g-5 my-2 justify-content-around">
            {borrowedBooks.map(fnBorrowedBooks)}
          </div>
          <h4 id="scrollspyHeading3">Requested Books</h4>
          <div className="row py-2 g-5 my-2 justify-content-around">
            {reqBooks.map(shelfBooks)}
          </div>
        </div>

        {/* /// */}
        
      </div>
    </>
  );
}
