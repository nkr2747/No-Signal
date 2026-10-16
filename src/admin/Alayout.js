import { API_URL } from "../config";
import React,{ useContext, useEffect, useState } from "react";
import bg from "../images/bg.png";
import logo from "../images/logo.png";
import AdminNavItems from "./AdminNavItems";
import { UserContext } from "../UserContext";
import AsideBar from "../admin/AsideBar";
import { Link, Outlet,useNavigate } from "react-router-dom";

export default function Alayout() {

  const navigate = useNavigate();
  const { authChecked } = useContext(UserContext);
  const [adminData, setAdminData] = useState(null);

  const callAboutPage = async () => {
    try {
      const res = await fetch(`${API_URL}/aboutadmin`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (res.status !== 200) {
        throw new Error(data.error || "Unable to load admin account.");
      }
      setAdminData(data);
    } catch (err) {
      navigate("/loginpageadmin");
    }
  };
  useEffect(() => {
    if (authChecked) callAboutPage();
  }, [authChecked]);

  if (!authChecked) return <div className="container py-4" role="status">Preparing admin session…</div>;

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
                      <img src={logo} className="sidebar-brand-logo" alt="IIT Dharwad Library" />
                    </Link>
                    <AdminNavItems />
          
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
            </div            >
              {adminData && (
                <div className="container mb-3">
                  <p className="mb-0"><strong>Welcome, {adminData.name}</strong> <span className="text-muted">({adminData.email})</span></p>
                </div>
              )}
              <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
}
