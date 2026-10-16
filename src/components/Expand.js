import { API_URL } from "../config";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BookCover from "./BookCover";

export default function Expand({ category }) {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(`${API_URL}/books`)
      .then((response) => setBooks([...response.data].reverse()))
      .catch((requestError) => {
        console.error("Unable to load books:", requestError);
        setError("Unable to load books right now.");
      });
  }, []);

  return (
    <div className="container my-4">
      <h4>{category}</h4>
      {error && <p className="text-danger" role="alert">{error}</p>}
      <div className="row g-4">
        {books.map((book) => (
          <div className="col-6 col-md-4 col-lg-3" key={book._id}>
            <Link to={`/issuebook/${book._id}`} className="text-decoration-none text-dark">
              <div className="card h-100">
                <BookCover
                  src={book.image_url} title={book.title} author={book.author}
                  className="card-img-top"
                  alt={`${book.title} cover`}
                  style={{ height: "240px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h6 className="card-title">{book.title}</h6>
                  <p className="card-text small text-secondary mb-0">{book.author}</p>
                  <small>{book.count > 0 ? "Available" : "Unavailable"}</small>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
