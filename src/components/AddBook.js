import React from 'react';
import './AddBook.css';

export default function AddBook() {
  return (
    <div className="background">
      <div className="card">
        <div className="card-body">
          <form className="row g-3">
            <div className="col-md-4">
              <label htmlFor="validationDefault01" className="form-label">Title</label>
              <input type="text" className="form-control" id="validationDefault01" required />
            </div>
            <div className="col-md-4">
              <label htmlFor="validationDefaultUsername" className="form-label">Author</label>
              <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
            </div>
            <div className="col-md-4">
              <label htmlFor="validationDefault03" className="form-label">Genre</label>
              <input type="text" className="form-control" id="validationDefault03" required />
            </div>
            <div className="col-md-12">
              <label htmlFor="validationDefault02" className="form-label">Description</label>
              <textarea className="form-control" id="validationDefault02" rows="5" required></textarea>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault04" className="form-label">Department</label>
              <select className="form-select" id="validationDefault04" required>
                <option selected disabled value="">Choose...</option>
                <option>Chemical Engineering</option>
                <option>Civil Engineering</option>
                <option>Computer Science</option>
                <option>Electrical Engineering</option>
                <option>Engineering Physics</option>
                <option>Mechanical Engineering</option>
              </select>
            </div>
            <div className="col-md-2 small-width">
              <label htmlFor="validationDefault05" className="form-label">Count</label>
              <input type="text" className="form-control" id="validationDefault05" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault06" className="form-label">Vendor</label>
              <input type="text" className="form-control" id="validationDefault06" required />
            </div>
            <div className="col-md-2 small-width">
              <label htmlFor="validationDefault07" className="form-label">Vendor ID</label>
              <input type="text" className="form-control" id="validationDefault07" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault08" className="form-label">Publisher</label>
              <input type="text" className="form-control" id="validationDefault08" required />
            </div>
            <div className="col-md-2 small-width">
              <label htmlFor="validationDefault09" className="form-label">Publisher ID</label>
              <input type="text" className="form-control" id="validationDefault09" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault10" className="form-label">Book Cover</label>
              <input type="text" className="form-control" id="validationDefault10" required />
            </div>
            <div className="col-12">
              <button className="btn btn-success" type="submit">+ADD</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


