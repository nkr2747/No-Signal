import { API_URL } from "../config";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const initialForm = {
  title: "",
  author: "",
  genre: "",
  department: "",
  description: "",
  count: "1",
};

export default function ContributePanel() {
  const [book, setBook] = useState(initialForm);
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");
    setSubmitting(true);

    const formData = new FormData();
    Object.entries(book).forEach(([key, value]) => formData.append(key, value));
    if (image) formData.append("image", image);

    try {
      const response = await axios.post(`https://no-signal.onrender.com/contributions`, formData, {
        withCredentials: true,
      });
      setMessage(response.data.message);
      setBook(initialForm);
      setImage(null);
      event.target.reset();
    } catch (requestError) {
      if (requestError.response?.status === 401) {
        setError("Please sign in as a student before submitting a contribution.");
      } else {
        setError(requestError.response?.data?.error || "Unable to submit your contribution.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container border px-4 py-3">
      <div className="row align-items-center g-3">
        <div className="col-12 col-lg-7 rounded py-2" style={{ backgroundColor: "white" }}>
          <h4 className="my-3">Contribute a Book</h4>
          <p className="text-secondary">Your submission will be added to the library after admin review.</p>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label className="form-label" htmlFor="contributionTitle">Book title</label>
              <input id="contributionTitle" name="title" className="form-control" value={book.title} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <label className="form-label" htmlFor="contributionAuthor">Author</label>
              <input id="contributionAuthor" name="author" className="form-control" value={book.author} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <label className="form-label" htmlFor="contributionGenre">Category</label>
              <input id="contributionGenre" name="genre" className="form-control" value={book.genre} onChange={handleChange} placeholder="e.g. Textbook" />
            </div>
            <div className="col-md-6">
              <label className="form-label" htmlFor="contributionDepartment">Department</label>
              <select id="contributionDepartment" name="department" className="form-select" value={book.department} onChange={handleChange}>
                <option value="">Select department</option>
                <option>Chemical Engineering</option>
                <option>Civil Engineering</option>
                <option>Computer Science</option>
                <option>Electrical Engineering</option>
                <option>Engineering Physics</option>
                <option>Mechanical Engineering</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label" htmlFor="contributionCount">Number of copies</label>
              <input id="contributionCount" name="count" type="number" min="1" step="1" className="form-control" value={book.count} onChange={handleChange} required />
            </div>
            <div className="col-md-8">
              <label className="form-label" htmlFor="contributionImage">Book cover image</label>
              <input
                id="contributionImage"
                type="file"
                className="form-control"
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={(event) => setImage(event.target.files?.[0] || null)}
              />
              <div className="form-text">Optional JPG, PNG, WEBP, or GIF (max 5 MB).</div>
            </div>
            <div className="col-12">
              <label className="form-label" htmlFor="contributionDescription">Description</label>
              <textarea id="contributionDescription" name="description" className="form-control" rows="3" value={book.description} onChange={handleChange} />
            </div>
            {error && (
              <div className="col-12 text-danger" role="alert">
                {error} {error.startsWith("Please sign in") && <Link to="/loginpage">Sign in</Link>}
              </div>
            )}
            {message && <div className="col-12 text-success" role="status">{message}</div>}
            <div className="col-12">
              <button type="submit" className="btn btn-outline-danger" disabled={submitting}>
                {submitting ? "Submitting..." : "Submit for review"}
              </button>
            </div>
          </form>
        </div>
        <div className="col d-none d-lg-block mx-1">
          <h2>Your <span style={{ color: "red" }}>Contribution</span></h2>
          <h2>Helps Others Learn</h2>
        </div>
      </div>
    </div>
  );
}
