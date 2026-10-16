import { API_URL } from "../config";
import React, { useState } from "react";
import "./AddBook.css";
import axios from "axios";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [department, setDepartment] = useState("");
  const [count, setCount] = useState("");
  const [vendor, setVendor] = useState("");
  const [vendor_id, setVendor_id] = useState("");
  const [publisher, setPublisher] = useState("");
  const [publisher_id, setPublisher_id] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setSubmitting(true);
    try {
      const formData = new FormData();
      Object.entries({
        title, description, author, genre, department, count,
        vendor, vendor_id, publisher, publisher_id,
      }).forEach(([key, value]) => formData.append(key, value));
      if (image) formData.append("image", image);
      const response = await axios.post(`https://no-signal.onrender.com/books`, formData, {
        withCredentials: true,
      });
      setMessage(response.data.message);
      setTitle("");
      setDescription("");
      setAuthor("");
      setGenre("");
      setDepartment("");
      setCount("");
      setVendor("");
      setVendor_id("");
      setPublisher("");
      setPublisher_id("");
      setImage(null);
      e.target.reset();
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.error || "Unable to add book.");
      } else {
        setMessage("Unable to reach the library server.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container-fluid">
      <form className="row g-3 add-book-form" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="validationDefault01"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefaultUsername" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            id="validationDefaultUsername"
            aria-describedby="inputGroupPrepend2"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefault03" className="form-label">
            Genre
          </label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="form-control"
            id="validationDefault03"
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="validationDefault02" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="validationDefault02"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            required
          ></textarea>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault04" className="form-label">
            Department
          </label>
          <select className="form-select" value={department} onChange={(e) => setDepartment(e.target.value)} id="validationDefault04" required>
            <option disabled value="">
              Choose...
            </option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electrical Engineering">
              Electrical Engineering
            </option>
            <option value="Engineering Physics">Engineering Physics</option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
          </select>
        </div>
        <div className="col-md-2 small-width">
          <label htmlFor="validationDefault05" className="form-label">
            Count
          </label>
          <input
            type="number"
            className="form-control"
            id="validationDefault05"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            min="0"
            step="1"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="bookCover" className="form-label">Book cover image</label>
          <input
            type="file"
            className="form-control"
            id="bookCover"
            accept="image/jpeg,image/png,image/webp,image/gif"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />
          <div className="form-text">Optional JPG, PNG, WEBP, or GIF (max 5 MB).</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault06" className="form-label">
            Vendor
          </label>
          <input
            type="text"
            className="form-control"
            value={vendor}
            onChange={(e) => setVendor(e.target.value)}
            id="validationDefault06"
            required
          />
        </div>
        <div className="col-md-2 small-width">
          <label htmlFor="validationDefault07" className="form-label">
            Vendor ID
          </label>
          <input
            type="text"
            className="form-control"
            value={vendor_id}
            onChange={(e) => setVendor_id(e.target.value)}
            id="validationDefault07"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault08" className="form-label">
            Publisher
          </label>
          <input
            type="text"
            className="form-control"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            id="validationDefault08"
            required
          />
        </div>
        <div className="w-100 d-none d-md-block" aria-hidden="true" />
        <div className="col-md-6">
          <label htmlFor="validationDefault09" className="form-label">
            Publisher ID
          </label>
          <input
            type="text"
            value={publisher_id}
            onChange={(e) => setPublisher_id(e.target.value)}
            className="form-control"
            id="validationDefault09"
            required
          />
        </div>
        <div className="col-12">
          <button className="btn btn-outline-danger" type="submit" disabled={submitting}>
            {submitting ? "Adding..." : "+ADD"}
          </button>
        </div>
      </form>
      {message && <p className="mt-3" role="status">{message}</p>}
    </div>
  );
}
