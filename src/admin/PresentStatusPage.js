import React from "react";
import "../components/Support.css";

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
      <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
        <ul class="nav justify-content-between text-center w-100">
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
          <li class="nav-item ">
            <a class="nav-link link-secondary" href="#scrollspyHeading4">
              Previously Borrowed Books
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
          {/* {favBooks.map(shelfBooks)} */}
        </div>
        <h4 id="scrollspyHeading2">Borrowed Books</h4>
        <div className="row py-2 g-5 my-2 justify-content-around">
          {/* {borrowedBooks.map(fnBorrowedBooks)} */}
        </div>
        <h4 id="scrollspyHeading3">Requested Books</h4>
        <div className="row py-2 g-5 my-2 justify-content-around">
          {/* {reqBooks.map(shelfBooks)} */}
        </div>
        <h4 id="scrollspyHeading4">Previously Ordered Books</h4>
        <div className="row py-2 g-5 my-2 justify-content-around">
          {/* {reqBooks.map(shelfBooks)} */}
        </div>
      </div>
    </>
  );
}
