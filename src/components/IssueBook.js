import React, { useEffect, useState } from "react";
import "../App.css"
import SearchBar from "./SearchBar";
import authorlogo from "../images/authorlogo.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import arrow from "../images/arrow.svg"
export default function IssueBook() {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the books!", error);
      });
  }, [id]);
  return (
    <>
      <SearchBar />
      <div className=" d-flex align-items-center opacity-50" style={{ height: "10vh" }}>
        <div className="image-container">
        <Link to='/searchpanel'>
        <img src={arrow} width="30px"  alt="" />
        </Link>
        </div>
      </div>
      <div className="container border">
        <div className="row  " style={{ height: "40vh" }}>
          <div className="col-5 col-lg-3  d-flex ">
            <div
              className="d-inline-block justify mx-3  h-100"
              style={{
                width: "8rem",
              }}
            >
              <div
                class="card border border-0"
                style={{
                  width: "8rem",
                }}
              >
                {" "}
                <Link to="issuebook">
                  <img
                    src={book.image_url}
                    class="card-img-top"
                    alt="..."
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-7 col-lg-5 border ">
            <div className="container my-3">
              <p className="fs-4">{book.title}</p>
              <p
                style={{
                  fontSize: "0.7rem",
                }}
              >
                {book.author}
              </p>
              <p className="fs-6">Description</p>
              <p className="small">{book.description}</p>
            </div>
            <div className="container  my-5">
              <button className="btn btn-outline-danger">Borrow</button>
            </div>
          </div>
          <div className="col-4 d-none d-lg-block">
            <div
              className="container h-100 rounded"
              style={{ backgroundColor: "white" }}
            >
              <div className="row">
                <div className="col-6 py-3">
                  <strong>
                    {" "}
                    <span style={{ color: "red" }}>About</span> Author
                  </strong>
                  <br />
                  <br />
                  {book.author}
                </div>
                <div className="col-6">
                  <img src={authorlogo} alt="" />
                </div>
                <div className="small">
                  <p className="small">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Corporis dolor consectetur consequuntur maxime fugit neque
                    nisi, sequi quidem hic officia.
                  </p>
                </div>
                <div className="container small">
                  <p className="small">
                    <strong>Other Books</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
