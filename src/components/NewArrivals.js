import React from "react";
import na from "../images/na.png"
import { Link } from "react-router-dom";
export default function NewArrivals() {
  const arr = [1, 2, 3, 4, 5, 6];
  function myf(x) {
    return (
      <div
        className="d-inline-block justify mx-1  h-100"
        style={{
          width: "6rem",
        }}
      >
        <div
          class="card"
          style={{
            width: "6rem",
          }}
        >
          <img
            src="https://minalsampat.com/wp-content/uploads/2019/12/book-placeholder-370x538.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
    );
  }
  return (

      <div className="col-12 col-lg-7 bg-light p-1 rounded" style={{
        background: "linear-gradient(to top, #792A8E, #BB4248)",
      }}>
        <div className="row d-flex">
          
          <div className="col-1 d-flex px-3 align-items-center justify-content-start">
            <Link className='link-underline link-underline-opacity-0' to="newarrivals">
            <img src={na} height='130' alt="" />
            </Link>
          </div>
          <div className="col-11">
        <div class="overflow-x-auto  h-100 w-100 bg-light  scrollable-container">
          <div
            className="align-items-center text-center"
            style={{
              display: "inline-flex",
              backgroundColor: "white",
            }}
          >
            {arr.map(myf)}
          </div>
        </div>
        </div>
        </div>
      </div>
  );
}
