import { API_URL } from "../config";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Fuse from "fuse.js";
import BookCover from "./BookCover";
import AuthButton from "./AuthButton";

const branches = [
  "Chemical Engineering",
  "Civil Engineering",
  "Computer Science",
  "Electrical Engineering",
  "Engineering Physics",
  "Mechanical Engineering",
];

export default function SearchPanel() {
  const [books, setBooks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [branch, setBranch] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  useEffect(() => {
    axios.get(`https://no-signal.onrender.com/books`)
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Unable to load books:", error));
  }, []);

  const visibleBooks = useMemo(() => {
    const source = hasSearched ? searchResults : books;
    return branch ? source.filter((book) => book.department === branch) : source;
  }, [books, branch, hasSearched, searchResults]);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setHasSearched(false);
    setSearchResults([]);
    if (!value.trim()) {
      setFilteredSuggestions([]);
      return;
    }
    const normalized = value.toLowerCase();
    setFilteredSuggestions(books
      .filter((book) => book.title?.toLowerCase().includes(normalized))
      .slice(0, 7)
      .map((book) => book.title));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const query = inputValue.trim();
    if (!query) {
      setHasSearched(false);
      setSearchResults([]);
      return;
    }
    const fuse = new Fuse(books, { keys: ["title", "author", "description"], includeScore: true, threshold: 0.5 });
    setSearchResults(fuse.search(query).map((result) => result.item));
    setHasSearched(true);
    setFilteredSuggestions([]);
  };

  const handleSelect = (title) => {
    setInputValue(title);
    setFilteredSuggestions([]);
  };

  return (
    <main>
      <div className="row mx-1 g-2 align-items-center" style={{ backgroundColor: "#F3F3F7" }}>
        <div className="col-12 col-lg-9">
          <div className="position-relative" style={{ zIndex: 2 }}>
            <form className="input-group" onSubmit={handleSearch}>
              <input
                type="search"
                className="form-control me-2"
                value={inputValue}
                onChange={handleChange}
                placeholder="Search books"
                aria-label="Search books"
              />
              <button className="btn btn-outline-danger rounded" type="submit">Search</button>
            </form>
            {filteredSuggestions.length > 0 && (
              <ul className="list-group position-absolute w-100 mt-1 shadow" style={{ zIndex: 3 }}>
                {filteredSuggestions.map((title, index) => (
                  <li
                    className="list-group-item list-group-item-action"
                    key={`${title}-${index}`}
                    role="option"
                    tabIndex={0}
                    onClick={() => handleSelect(title)}
                    onKeyDown={(event) => { if (event.key === "Enter") handleSelect(title); }}
                  >
                    {title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="col-12 col-lg-3 d-flex justify-content-lg-end align-items-center">
          <AuthButton />
        </div>
        <div className="col-12 col-lg-9">
          <select id="inputBranch" name="branch" className="form-select" value={branch} onChange={(event) => setBranch(event.target.value)}>
            <option value="">Select Branch</option>
            {branches.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
      </div>

      <div className="row pt-3 mt-4 px-4 small fw-semibold text-secondary">
        <div className="col-8 col-md-7">Title and author</div>
        <div className="col-2 text-center">Category</div>
        <div className="col-2 text-end">Status</div>
      </div>
      <div className="list-group px-2">
        {visibleBooks.map((book) => (
          <Link to={`/issuebook/${book._id}`} className="list-group-item my-2 rounded list-group-item-action" key={book._id}>
            <div className="row align-items-center gx-2">
              <div className="col-2 col-md-1">
                <BookCover src={book.image_url} title={book.title} author={book.author} alt={`${book.title} cover`} style={{ height: "60px", width: "42px", objectFit: "cover" }} />
              </div>
              <div className="col-6 col-md-6">
                <h3 className="h6 mb-1 text-break">{book.title}</h3>
                <p className="small text-body-secondary mb-0 text-break">{book.author}</p>
              </div>
              <div className="col-2 small text-center text-truncate">{book.genre || "—"}</div>
              <div className="col-2 small text-end">{book.count > 0 ? "Available" : "Unavailable"}</div>
            </div>
          </Link>
        ))}
        {visibleBooks.length === 0 && (
          <p className="text-muted px-2" role="status">{hasSearched ? "No books match your search." : "No books found for this branch."}</p>
        )}
      </div>
    </main>
  );
}
