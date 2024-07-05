import React from "react";
import SearchBar from "./SearchBar";

export default function MyShelf() {
  const arr = [1, 2, 3,4];
  const requestedbk = [1, 2];
  const pendingbk = [1, 2,5];
  const lup=[1,2,3];
  function LatestUpdates(x){
    return (
      <div className="container">
        <p>Maintenance break till submission</p>
        <hr />
      </div>
      
    )
  }
  function funrequestedbk(x){
    return(
      <div className="container ">
        <div className="row">
          <div className="col-4 mx-2">
            <img src="" alt="" />
          </div>
          <div className="col-7">
            Title of book
            <p className="small my-2">Author</p>
            <button type="button" class="btn btn-outline-secondary btn-sm my-4">Unavailable</button>
            
          </div>
          <hr />
        </div>

      </div>
    )
  }
  function funpendingbk(x){
    return(
      <div className="container ">
        <div className="row">
          <div className="col-4 mx-2">
            <img src="" alt="" />
          </div>
          <div className="col-7">
            Title of book
            <p className="small my-2">Author</p>
            <button type="button" class="btn btn-outline-danger btn-sm my-4">Return</button>
            
          </div>
          <hr />
        </div>

      </div>
    )
  }
  function shelfBooks(x) {
    return (
      <div class="card rounded border border-0 mx-3 " style={{
        width:"15rem",
        height:"15rem"
      }}>
        <div class="card-body">This is some text within a card body.</div>
      </div>
    );
  }
  return (
    <>
    <SearchBar/>
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
      <div className="row py-2 g-5 my-2 justify-content-center  border">
      {
            arr.map(shelfBooks)
        }
      </div>
      <div className="container ">
        <h4 className="my-4">Reminders</h4>
        <div className="row gx-3">
          <div className="col  p-3 rounded mx-2 align-items-stretch" style={{
            backgroundColor:'white'
          }}> 
          <div className="container">
          <h6>Latest Updates</h6> 
          </div>
          <div className="vstack gap-3">
          {
            lup.map(LatestUpdates)
          }
          </div>
          </div>
          <div className="col  p-3  rounded mx-2 align-items-stretch" style={{
            backgroundColor:'white'
          }}> 
          <div className="container my-2 ">
          <h6>Pending Books</h6></div> 
          <div className="vstack gap-3">
          {
            pendingbk.map(funpendingbk)
          }
          </div>
          
          </div>
          <div className="col p-3 rounded mx-2 align-items-stretch" style={{
            backgroundColor:'white'
          }}> 
          <div className="container my-2">
          <h6>Requested Books</h6> 
          </div>
          <div className="vstack gap-3">
          {
            requestedbk.map(funrequestedbk)
          }
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
