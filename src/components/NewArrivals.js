import React,{useState,useEffect} from "react";
import na from "../images/na.png"
import { Link } from "react-router-dom";
import axios from "axios";


export default function NewArrivals() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get('https://no-signal.onrender.com/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the books!', error);
      });
  }, []);
  function myf(book) {
    return (
      <div
        className="d-inline-block justify mx-1  h-100"
        style={{
          width: "6rem",
        }}
      >
        <div
          className="card"
          style={{
            width: "6rem",
          }}
        ><a href={`issuebook/${book._id}`}>
          <img
            src={book.image_url}
            className="card-img-top"
            alt="..."
            style={{
              height: "150px",
              objectFit: "cover",
            }}
          />
          </a>
        </div>
      </div>
    );
  }
  return (

      <div className="col-12 col-lg-7 bg-light p-1 rounded" style={{
        background: "linear-gradient(to top, #792A8E, #BB4248)",
      }}>
        <div className="row d-flex">
          
          <div className="col-1 d-flex  align-items-center ">
            <Link className='link-underline link-underline-opacity-0' to="newarrivals">
            <img src={na} className="" height='130' alt="" />
            </Link>
          </div>
          <div className="col-11">
        <div className="overflow-x-auto  h-100 w-100 bg-light  scrollable-container">
          <div
            className="align-items-center text-center"
            style={{
              display: "inline-flex",
              backgroundColor: "white",
            }}
          >
            {books.map(myf)}
          </div>
        </div>
        </div>
        </div>
      </div>
  );
}
