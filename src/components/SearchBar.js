import React, { useEffect, useState,useContext } from "react";
// import logo from "../images/logo.svg";
// import logoiitdh from "../images/logo.png";
// import DateTimeDisplay from "../components/DateTimeDisplay";
// import home from "../images/home.svg";
// import search from "../images/search-icon.svg";
// import bookshelf from "../images/Bookshelf.svg";
// import contri from "../images/Give Gift.svg";
import { Link } from "react-router-dom";
import Autocomplete from "./Autocomplete";
import axios from "axios";
import { UserContext } from "../App";
import Search from "./search";


export default function SearchBar() {
  const {state,dispatch} = useContext(UserContext)
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the books!", error);
      });
  }, []);
  function bkttle(x) {
    return x.title;
  }
  const bkttles = books.map(bkttle);


  const RenderMenu=()=>{
    if(state){
      return(
        <>
          <div className="col-2">
            <Link to="/logout">
                logout
            </Link>
          </div>
        </>
      )
    }
    else{
      return(
        <>
          <div className="col-2">
            <Link to="/loginpage">
                login
            </Link>
          </div>
        </>
      )
    }
  }
  return (
    <div
      className="row mx-1  "
      style={{
        backgroundColor: "#F3F3F7",
      }}
    >
      {/* <div className="col-2 d-lg-none">
        <button
          className="btn btn-outline-danger"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          {" "}
          <i className="fa fa-bars"></i>
        </button>

        <div
          className="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="d-flex justify-content-end px-4 py-3 align-items-center">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="flex-column d-flex h-100 align-items-center text-center"
            style={{
              //height: "100vh",
              backgroundColor: "white",
            }}
          >
            <a className="navbar-brand " href="/">
              <img src={logoiitdh} alt="Bootstrap" width="260" />
            </a>
            <ul className="navbar-nav m-1 align-items-start px-5 flex-column ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <img
                    src={home}
                    className="px-1 d-inline-block align-text-top"
                    alt=".."
                    height="15"
                  />
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="searchpanel">
                  <img src={search} className="px-1" height="15" alt="" />
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="myshelf">
                  <img src={bookshelf} className="px-1" alt="" />
                  My Shelf
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contributepanel">
                  <img src={contri} className="px-1" alt="" />
                  Contribute
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav m-1 align-items-start px-5 fs-6 flex-column d-flex my-4 ">
              <li className="nav-item small">
                <Link className="nav-link " to="about">
                  <div className="small">About</div>
                </Link>
              </li>
              <li className="nav-item  small">
                <Link className="nav-link" to="support">
                  <div className="small">Support</div>
                </Link>
              </li>
              <li className="nav-item small">
                <Link className="nav-link" to="termsconditions">
                  <div className="small">Terms & Conditions</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      
        {/* <div className="input-group mb-3  position-absolute top-50 start-50 translate-middle">
       
          <button
            className="btn  btn-secondary text-dark dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              backgroundColor: "#F3F3F7",
            }}
          >
            All
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </li>
          </ul>

          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div> */}
      <div className="col-10 mx-auto col-lg-10 border align-items-end ">
        {/* <DateTimeDisplay /> */}
        <Search/>
      </div>

          
          <RenderMenu/>
          <div className="col-2">
            <Link to="/admin">
                admin
            </Link>
          </div>

      {/* <div className="col-3 col-lg-3 ">
        <div className="dropdown-center ">
          <button
            className="btn btn-secondary text-dark rounded-pill dropdown-toggle "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              backgroundColor: "white",
            }}
          >
            <img src={logo} className="rounded-circle" alt="..." height="25" />
            Guest
          </button>
          <ul className="dropdown-menu ">
            <li>
              <a className="dropdown-item" href="/">
                Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Favourite
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/loginpage">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}
