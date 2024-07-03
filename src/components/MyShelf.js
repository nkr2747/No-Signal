import React from "react";

export default function MyShelf() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  function shelfBooks(x) {
    return (
      <div class="card rounded border border-0 mx-3 " style={{
        width:"11rem",
        height:"11rem"
      }}>
        <div class="card-body">This is some text within a card body.</div>
      </div>
    );
  }
  return (
    <div className="container border py-3">
      <div className="container align-items-start border my-2">
        <h5>
          My{" "}
          <span
            style={{
              color: "red",
            }}
          >
            Shelf
          </span>
        </h5>
      </div>
      <div className="container border my-2">
        <ul class="nav justify-content-between">
          <li class="nav-item">
            <a
              class="nav-link link-secondary active"
              aria-current="page"
              href="/"
            >
              Favourite
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-secondary" href="/">
              Borrowed Books
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-secondary" href="/">
              E-Books
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-secondary" href="/">
              Audio Books
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-secondary" href="/">
              Articles & Journals
            </a>
          </li>
        </ul>
      </div>
      <div className="row py-2 g-4 my-2 border">
      {
            arr.map(shelfBooks)
        }
      </div>
      <div className="container border">
        <h4>Reminders</h4>
      </div>
    </div>
  );
}
