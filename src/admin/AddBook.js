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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/books", {
        title,
        description,
        author,
        genre,
        department,
        count,
        vendor,
        vendor_id,
        publisher,
        publisher_id,
      });
      setMessage(response.data.message);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.error);
      } else {
        setMessage("An error occurred");
      }
    }
  };

  return (
    <div className="container-fluid">
      <form className="row g-3" >
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
            <option selected disabled value="">
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
            type="text"
            className="form-control"
            id="validationDefault05"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            required
          />
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
        <div className="col-md-2 small-width">
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
          <button className="btn btn-danger" onClick={handleSubmit} type="submit">
            +ADD
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
