
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function AaddNewStudent() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email: "", password: "", cpassword: "", program: "", branch: ""
  });

  let name, value;
  const handleInputs = (e) => {
    // const { name, value } = e.target;
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword, program, branch } = user;

    const res = await fetch("/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password, cpassword, program, branch
      })
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Registration Failed");
    }
    else {
      window.alert("Registration Successfully");
      navigate("/loginpage")
    }
  }

  return (
    <div className="contanier px-5 py-4 ">
      <h4 className=" my-3">Student Registration</h4>
      <form method="POST" class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Name
          </label>
          <input type="text"
            placeholder="Name"
            className="form-control"
            id="inputName"
            name="name"
            value={user.name}
            onChange={handleInputs}
          />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input type="email"
            placeholder="College Email ID"
            className="form-control"
            id="inputEmail"
            name="email"
            value={user.email}
            onChange={handleInputs}
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input type="password"
            placeholder="Password"
            className="form-control"
            id="inputPassword"
            name="password"
            value={user.password}
            onChange={handleInputs}
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Confirm Password
          </label>
          <input type="password"
            placeholder="Confirm Password"
            className="form-control"
            id="inputCPassword"
            name="cpassword"
            value={user.cpassword}
            onChange={handleInputs}
          />
        </div>
        <div class="col-md-6">
          <label for="inputState" class="form-label">Program</label>
          <select id="inputProgram"
            className="form-select"
            name="program"
            value={user.program}
            onChange={handleInputs}>
            <option>B.Tech</option>
            <option>M.Tech</option>
            <option>PhD</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="inputState" class="form-label">Branch</label>
          <select id="inputBranch"
            className="form-select"
            name="branch"
            value={user.branch}
            onChange={handleInputs}>
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
          <button type="submit" className="btn btn-outline-danger"
            onClick={PostData}>
            create
          </button>
        </div>
      </form>
    </div>
  );
}
