import React from 'react';
import './Loginpage.css';

export default function Loginpage(props) {
  return (
    <div className="background">
      <form className="login-form">
        <h6 id="header">IIT<span style={{color:'red'}}>D</span>h <br /><span className="book">Book</span> Shelf</h6>
        <br/>
        
        
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" placeholder='College Email ID' id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">Your credentials will be securely stored.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" placeholder='Password' id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Forgot password</label>
        </div>
        <button type="submit" className="btn btn-outline-danger">Submit</button>
      </form>
    </div>
  );
}
