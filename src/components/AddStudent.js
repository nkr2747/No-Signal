import React from 'react';
import './Loginpage.css';
import { Link } from 'react-router-dom';

export default function Loginpage(props) {
  return (
    <div className="background">
      <form className="login-form">
        <Link className='link-underline link-underline-opacity-0 ' to="/">
        <h6 id="header">IIT<span style={{color:'red'}}>D</span>h <br /><span className="book">Book</span> Shelf</h6><br/><h5>Student Registration</h5>
        </Link>
        <br/>

        
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Student Name</label>
          <input type="email" className="form-control" placeholder='Student Name' id="exampleStudentName" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">Registration under Admin/librarian surveillance</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Student Roll Number</label>
          <input type="email" className="form-control" placeholder='Student Roll Number' id="exampleStudentRollNumber" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">Registration under Admin/librarian surveillance</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Student Branch</label>
          <input type="email" className="form-control" placeholder='Student Branch' id="exampleStudentBranch" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">Registration under Admin/librarian surveillance</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" placeholder='College Email ID' id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">Registration under Admin/librarian surveillance</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" placeholder='Password' id="exampleInputPassword1" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" placeholder='Password' id="exampleInputConfirmPassword" />
        </div>

        <button type="submit" className="btn btn-outline-danger">Submit</button>
      </form>
    </div>
  );
}
