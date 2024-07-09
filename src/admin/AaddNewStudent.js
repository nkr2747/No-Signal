import React,{useState} from "react";
import axios from 'axios';

export default function AaddNewStudent() {

    const [name, setname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3000/users', {
          name,
          password,
          email,
        });
        console.log("hi")
        setMessage(response.data.message);
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data.error);
        } else {
          setMessage('An error occurred');
        }
      }
    };
  return (
    <div className="contanier px-5 py-4 ">
       <h4 className=" my-3">Student Registration</h4>
    <form class="row g-3">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">
          Name
        </label>
        <input type="name" value={name} onChange={(e) => setname(e.target.value)} placeholder="Name" class="form-control" id="inputEmail4" />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">
          Email
        </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="College Email ID"  class="form-control" id="inputEmail4" />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">
          Password
        </label>
        <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="Password"  class="form-control" id="inputPassword4" />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">
          Confirm Password
        </label>
        <input type="password" placeholder="Confirm Password"  class="form-control" id="inputPassword4" />
      </div>
      <div class="col-md-6">
    <label for="inputState" class="form-label">Program</label>
    <select id="inputState" class="form-select">
      <option>B.Tech</option>
      <option>M.Tech</option>
      <option>PhD</option>
    </select>
  </div>
      <div class="col-md-6">
    <label for="inputState" class="form-label">Branch</label>
    <select id="inputState" class="form-select">
      <option>Computer Science and Engineering</option>
      <option>Electrical</option>
      <option>Mechanical</option>
      <option>Civil</option>
      <option>Chemical</option>
      <option>Engineering Physics</option>
      <option>BS-MS</option>
    </select>
  </div>
      
      <div class="col-12">
        <button type="submit" onClick={handleSubmit} class="btn btn-outline-danger">
         Submit
        </button>
      </div>
    </form>
    {message && <p>{message}</p>}
    </div>
  );
}
