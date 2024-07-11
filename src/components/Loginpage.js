import React, {useState} from 'react';
import './Loginpage.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Loginpage(props) {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) =>
  {
      e.preventDefault();

      const res = await fetch('/users', {
        method : "POST",
        headers : {
          "Content-Type": "application/json"
        },
        body : JSON.stringify({
          email,
          password
        })
      })
      const data = await res.json();

      if(res.status === 400 || !data)
      {
        window.alert("Invalid Detail");
      }
      else
      {
        window.alert("Login Successfully");
        navigate('/');
      }
  }
  return (
    <>
    <div className="background">
      <form method="POST" className="login-form">
        <Link className='link-underline link-underline-opacity-0 ' to="/">
        <h6 id="header">IIT<span style={{color:'red'}}>D</span>h <br /><span className="book">Book</span> Shelf</h6>
        </Link>
        <br/>
        
        
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" 
          value = {email}
          onChange= {(e) => setEmail(e.target.value)}
          placeholder='College Email ID' id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">Your credentials will be securely stored.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" 
          value = {password}
          onChange= {(e) => setPassword(e.target.value)}
          placeholder='Password' id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Forgot password</label>
        </div>
        <button type="submit" className="btn btn-outline-danger" value="submit"
          onClick={loginUser }>Submit</button>
      </form>
    </div>
    </>
  );
}
