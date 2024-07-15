import React,{ useEffect, useState } from "react";
import bg from "../images/bg.png";
import AsideBar from "../admin/AsideBar";
import { Link, Outlet,useNavigate } from "react-router-dom";
import axios from "axios";

export default function Alayout() {

  const navigate = useNavigate();
  const [adminData, setAdminData] = useState(null);

  const callAboutPage = async () => {
    try {
      const res = await fetch("/aboutadmin", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setAdminData(data);
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/loginpageadmin");
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);

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
          <AsideBar />
          <div
            className="col-12 rounded-end h-100 col-lg-9 py-4 scrollable-container" //note : iss line ka mtlb hai ki col-12 rhe jb size chota rhe (kyuki iss time sidebar gayab ho jaega aur aur jb wapas aa jayega lg breakpoint ke bad tb col-9 ho jaye)
            style={{
              height: "100vh",
              overflowY: "scroll",
              backgroundColor: "#F3F3F7",
            }}
          >
            <div className="row my-3 d-lg-none ">
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
                      <img src="" alt="Bootstrap" width="260" />
                    </Link>
                    <ul className="navbar-nav m-1 align-items-start px-5 flex-column ">
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin">
                      <img src="" className='px-1' height="15" alt="" />
                      Issue Requests
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="addnewbook">
                      <img src="" className='px-1' alt="" />
                       Add New Book
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="presentstatus">
                      <img src="" className='px-1' alt="" />
                       Search Student
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="returnrequest">
                      <img src="" className='px-1' alt="" />
                       Return Requests
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="addnewstudent">
                      <img src="" className='px-1' alt="" />
                       Add New Student
                      </Link>
                    </li>
                  </ul>
          
          <ul className="navbar-nav m-1 align-items-start px-5 fs-6 flex-column d-flex position-absolute bottom-0 my-4 ">
                    <li className="nav-item small">
                      <Link className="nav-link " to="logoutadmin">
                        <div className="small">
                          Logout
                        </div>
                      </Link>
                    </li>

                    </ul>
                  </div>
                </div>
              </div>
            <div className="container d-lg-none col-10 text-center">
              <Link to="/" className="link-underline link-underline-opacity-0">
              <h1 style={{color:'black'}}>IIT<span style={{color:'red'}}>D</span>h <span style={{color:'red'}}>Book</span> Shelf</h1>
              </Link>
            </div>
            </div>
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
}
