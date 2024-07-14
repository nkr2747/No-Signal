import React from 'react'
import logo from "../images/logo.png"
// import home from "../images/home.svg"
import search from "../images/search-icon.svg"
import bookshelf from "../images/Bookshelf.svg"
import contri from "../images/Give Gift.svg"
import { Link } from 'react-router-dom'
export default function AsideBar() {
  return (
    <>
    
    <div
          className="col-3 rounded-start d-none flex-column d-flex h-100 align-items-center text-center d-lg-block"
          style={{
            backgroundColor: "white",
          }}
        >
          <a className="navbar-brand " href="/">
            <img
              src={logo}
              alt="Bootstrap"
              width="260"
            />
          </a>
          <ul className="navbar-nav m-1 align-items-start px-5 flex-column ">
                    {/* <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/">
                      <img src={home} className="px-1 d-inline-block align-text-top" alt=".." height="15" />
                        Home
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin">
                      <img src={search} className='px-1' height="15" alt="" />
                      Issue Requests
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="addnewbook">
                      <img src={bookshelf} className='px-1' alt="" />
                       Add New Book
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="presentstatus">
                      <img src={bookshelf} className='px-1' alt="" />
                       Search Student
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="returnrequest">
                      <img src={bookshelf} className='px-1' alt="" />
                       Return Requests
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="addnewstudent">
                      <img src={contri} className='px-1' alt="" />
                       Add New Student
                      </Link>
                    </li>
                  </ul>
          
          <ul className="navbar-nav m-1 align-items-start px-5 fs-6 flex-column d-flex position-absolute bottom-0 my-4 ">
                    <li className="nav-item small">
                      <Link className="nav-link " to="about">
                        <div className="small">
                          About
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item  small">
                      <Link className="nav-link" to="support">
                      <div className="small">
                          Support
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item small">
                      <Link className="nav-link" to="termsconditions">
                        <div className="small">
                        Terms & Conditions
                        </div>
                      </Link>
                    </li>
                  </ul>

        </div>
        </>
  )
}
