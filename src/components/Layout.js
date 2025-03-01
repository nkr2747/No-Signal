import React from "react";
import bg from "../images/bg.png";
import SideBar from "../components/SideBar";
import { Link, Outlet } from "react-router-dom";
import logoiitdh from "../images/logo.png";
//import DateTimeDisplay from "../components/DateTimeDisplay";
import home from "../images/home.svg";
import search from "../images/search-icon.svg";
import bookshelf from "../images/Bookshelf.svg";
import contri from "../images/Give Gift.svg";
import logo from "../images/logo.svg";

export default function Layout() {
  return (
    <>
      <div
        className="container-fluid p-4"
        style={{
          backgroundImage: `url(${bg})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <div className="row h-100">
          <SideBar />
          <div
            className="col-12 rounded-end h-100 col-lg-9 py-4 scrollable-container" //note : iss line ka mtlb hai ki col-12 rhe jb size chota rhe (kyuki iss time sidebar gayab ho jaega aur aur jb wapas aa jayega lg breakpoint ke bad tb col-9 ho jaye)
            style={{
              height: "100vh",
              overflowY: "scroll",
              backgroundColor: "#F3F3F7",
            }}
          >
            <div className="row my-3 d-lg-none ">
              {/* <div className="col-2 d-flex justify-content-start border "> */}
              <div className="col-2 d-lg-none d-flex justify-content-start ">
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
                  tabIndex="-1"
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
                    <Link className="navbar-brand " to="/">
                      <img src={logoiitdh} alt="Bootstrap" width="260" />
                    </Link>
                    <ul className="navbar-nav m-1 align-items-start px-5 flex-column ">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">
                          <img
                            src={home}
                            className="px-1 d-inline-block align-text-top"
                            alt=".."
                            height="15"
                          />
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="searchpanel">
                          <img
                            src={search}
                            className="px-1"
                            height="15"
                            alt=""
                          />
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
                        <Link className="nav-link " to="/admin">
                          <div className="small">Admin</div>
                        </Link>
                      </li>
                      <hr style={{
                        width:"100%"
                      }} />
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
              </div>
              {/* </div> */}
              <div className="col  text-center">
                <Link
                  to="/"
                  className="link-underline link-underline-opacity-0"
                >
                  <h1 style={{ color: "black" }}>
                    IIT<span style={{ color: "red" }}>D</span>h{" "}
                    <span style={{ color: "red" }}>Book</span> Shelf
                  </h1>
                </Link>
              </div>
              <div className="col-2 d-none d-lg-block justify-content border start">
                <div className="dropdown-start ">
                  <button
                    className="btn btn-secondary btn-sm text-dark rounded-pill dropdown-toggle "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      backgroundColor: "white",
                    }}
                  >
                    <img
                      src={logo}
                      className="rounded-circle"
                      alt="..."
                      height="25"
                    />
                    Guest
                  </button>
                  <ul className="dropdown-menu ">
                    {/* <li>
              <a className="dropdown-item" href="/">
                Profile
              </a>
            </li> */}
                    {/* <li>
              <a className="dropdown-item" href="/">
                Favourite
              </a>
            </li> */}
                    <li>
                      <a className="dropdown-item" href="/loginpage">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
