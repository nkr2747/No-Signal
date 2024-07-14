import React from "react";
// import "../components/Support.css";

const userData = {
  name: "John Doe",
  branch: "Computer Science",
  program: "B.Tech",
};

const statusStyle = {
  color: "red",
};

export default function PresentStatusPage() {
  return (
    <>
    <h1>Present <span style={statusStyle}>Status</span>of Student</h1>
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
      {/* Navbar */}
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example bg-body-tertiary p-3 rounded-2"
        tabIndex="0"
      >
        <h4 id="scrollspyHeading1">Favourite Books</h4>
        <div className="row py-2 g-5 my-2">
          {/* {favBooks.map(shelfBooks)} */}
          <div className="col-12">
            <div className="card mb-3" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">Book Name:None</h5>
                <p className="card-text">
                  Author:None
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card mb-3" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">Book Name:None</h5>
                <p className="card-text">
                Author:None
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card mb-3" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">Book Name:None</h5>
                <p className="card-text">
                Author:None
                </p>
              </div>
            </div>
          </div>
        </div>
        <h4 id="scrollspyHeading2">Borrowed Books</h4>
        <div className="row py-2 g-5 my-2">
          {/* {borrowedBooks.map(fnBorrowedBooks)} */}
          <div className="col-12">
            <div className="card mb-3" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">Book Name:None</h5>
                <p className="card-text">
                Author:None
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card mb-3" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">Book Name:None</h5>
                <p className="card-text">
                  Author:None
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card mb-3" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">Book Name:None</h5>
                <p className="card-text">
                  Author:None
                </p>
              </div>
            </div>
          </div>
        </div>
        <h4 id="scrollspyHeading3">Requested Books</h4>
        <div className="row py-2 g-5 my-2">
          {/* {reqBooks.map(shelfBooks)} */}
          <div className="col-12">
            <div className="card mb-3" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">Book Name:None</h5>
                <p className="card-text">
                  Author:None
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card mb-3" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">Book Name:None</h5>
                <p className="card-text">
                  Author:None
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card mb-3" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">Book Name:None</h5>
                <p className="card-text">
                  Author:None
                </p>
              </div>
            </div>
          </div>
        </div>
        <h4 id="scrollspyHeading4">Previously Borrowed Books</h4>
        <div className="row py-2 g-5 my-2">
          {/* {prevBorrowedBooks.map(shelfBooks)} */}
          <div className="col-12">
            <div className="card mb-3" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">Book Name:None</h5>
                <p className="card-text">
                  Author:None
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card mb-3" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">Book Name:None</h5>
                <p className="card-text">
                  Author:None
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card mb-3" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">Book Name:None</h5>
                <p className="card-text">
                  Author:None
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

