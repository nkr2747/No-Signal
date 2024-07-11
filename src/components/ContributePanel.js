import React from "react";

export default function ContributePanel() {
  return (
    <div
      className="container border px-4"
      style={{
        height: "75vh",
      }}
    >
      <div className="row align-items-center g-3 h-100 ">
        <div
          className="col-12 col-lg mx-2 px-5 rounded py-2"
          style={{
            backgroundColor: "white",
          }}
        >
          <p className="my-4">Fill up Book Details</p>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Book name"
                aria-label="Book name"
              />
            </div>
            <select className="col form-select" aria-label="Default select example">
              <option selected>Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="row my-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Author name"
                aria-label="Author name"
              />
            </div>
            <select className="col form-select" aria-label="Default select example">
              <option selected>Language</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Reason For Your Contribution"
            ></textarea>
          </div>
          <button type="button" className="btn btn-outline-danger btn-lg my-4">Submit</button>
        </div>
        <div
          className="col d-none h-100 py-5 align-items-start align-item-top d-lg-block mx-1 "
          
        >
          <h2>Your <span style={{
            color:"red"
          }}>Contribution</span>
          </h2>
          <h2>Helps Other to Learn</h2>
        </div>
      </div>
    </div>
  );
}
