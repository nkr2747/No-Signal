import React, { useEffect, useState,useContext } from "react";
import "../App.css"
import SearchBar from "./SearchBar";
import authorlogo from "../images/authorlogo.svg";
import { Link, useParams ,useNavigate} from "react-router-dom";
import axios from "axios";
import arrow from "../images/arrow.svg"
import { UserContext } from "../App";



export default function IssueBook() {
  const navigate= useNavigate()
  const {state,dispatch} = useContext(UserContext)
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    axios
      .get(`https://no-signal.onrender.com/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the books!", error);
      });
  }, [id]);

  const handleIssue=async (e)=>{
    e.preventDefault();
    console.log(state)
    console.log(id)
    if (state===false) {
      navigate('https://no-signal.onrender.com/loginpage')
      return;
    }
    try {
      const response = await axios.post('https://no-signal.onrender.com/issuebook', { id },{
        headers: {
          "Content-Type": "application/json",
        }
      }
      );
      

      console.log('Book issued successfully:', response.data);
      window.alert('Book issued successfully');
    } catch (error) {
      console.error('Error issuing book:', error);
      window.alert('Error issuing book');
    }
      
  }
  const handleAddToFav=async (e)=>{
    e.preventDefault();
    console.log(state)
    console.log(id)
    if (state===false) {
      navigate('https://no-signal.onrender.com/loginpage')
      return;
    }
    try {
      const response = await axios.post('https://no-signal.onrender.com/addtofavourite', { id },{
        headers: {
          "Content-Type": "application/json",
        }
      }
      );
      

      console.log('Book added to favourite successfully:', response.data);
      window.alert('Book added to favourite successfully');
    } catch (error) {
      console.error('Error issuing book:', error);
      window.alert('Error ');
    }
      
  }


  return (

    <>
      <SearchBar />
      <div className=" d-flex align-items-center opacity-50" style={{ height: "10vh" }}>
        <div className="image-container">
        <Link to='https://no-signal.onrender.com/searchpanel'>
        <img src={arrow} width="30px"  alt="" />
        </Link>
        </div>
      </div>
      <div className="container ">
        <div className="row  " style={{ height: "40vh" }}>
          <div className="col-5 col-lg-3  d-flex ">
            <div
              className="d-inline-block justify mx-3  h-100"
              style={{
                width: "8rem",
              }}
            >
              <div
                className="card border border-0"
                style={{
                  width: "8rem",
                }}
              >
                {" "}
                <Link to="https://no-signal.onrender.com/issuebook">
                  <img
                    src={book.image_url}
                    className="card-img-top"
                    alt="..."
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-7 col-lg-5  ">
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
            <div className="container d-flex  my-5">
              <div className="d-inline mx-3">
              <button className="btn btn-outline-danger" onClick={handleIssue}>Issue{state}</button>
              </div>
              <div className="d-inline mx-3">
              <button className="btn btn-outline-secondary" onClick={handleAddToFav} >Add to Favourite</button>
              </div>
            </div>
          </div>
          <div className="col-4 d-none d-lg-block">
            <div
              className="container  rounded"
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
                {/* <div className="small">
                  <p className="small">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Corporis dolor consectetur consequuntur maxime fugit neque
                    nisi, sequi quidem hic officia.
                  </p>
                </div> */}
                <div className="container small">
                  {/* <p className="small">
                    <strong>Other Books</strong>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
