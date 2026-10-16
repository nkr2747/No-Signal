import { API_URL } from "../config";
import React, { useState } from "react";
import PasswordInput from "../components/PasswordInput";

export default function AaddNewStudent() {

  const [user, setUser] = useState({
    name: "", email: "", password: "", cpassword: "", program: "", branch: ""
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const validate = () => {
    const newErrors = {};
    if (!user.name) newErrors.name = "Name is required";
    if (!user.email) newErrors.email = "Email is required";
    if (!user.password) newErrors.password = "Password is required";
    else if (user.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (!user.cpassword) newErrors.cpassword = "Confirm Password is required";
    if (user.password !== user.cpassword) newErrors.cpassword = "Passwords do not match";
    if (!user.program) newErrors.program = "Program is required";
    if (!user.branch) newErrors.branch = "Branch is required";
    return newErrors;
  }

  const PostData = async (e) => {
    e.preventDefault();
    setMessage("");

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const { name, email, password, cpassword, program, branch } = user;
    try {
      const res = await fetch(`${API_URL}/admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          name, email, password, cpassword, program, branch
        })
      });

      const data = await res.json();

      if (!res.ok) {
        window.alert(data.error || "Unable to register student.");
      } else {
        setMessage("Student registered successfully. You can add another student or choose a different admin page.");
        setUser({ name: "", email: "", password: "", cpassword: "", program: "", branch: "" });
        setErrors({});
      }
    } catch (err) {
      window.alert("Unable to reach the library server.");
    }
  }

  return (
    <div className="container px-5 py-4 ">
      <h4 className="my-3">Student Registration</h4>
      <form method="POST" className="row g-3" onSubmit={PostData}>
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="inputName"
            value={user.name}
            onChange={handleInputs}
            placeholder="Name"
            required
          />
          {errors.name && <span className="text-danger">{errors.name}</span>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail" className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="inputEmail"
            value={user.email}
            onChange={handleInputs}
            placeholder="College Email ID"
            required
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <PasswordInput
            name="password"
            id="inputPassword"
            value={user.password}
            onChange={handleInputs}
            placeholder="Password"
            autoComplete="new-password"
            required
          />
          {errors.password && <span className="text-danger">{errors.password}</span>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCPassword" className="form-label">Confirm Password</label>
          <PasswordInput
            name="cpassword"
            id="inputCPassword"
            value={user.cpassword}
            onChange={handleInputs}
            placeholder="Confirm Password"
            autoComplete="new-password"
            required
          />
          {errors.cpassword && <span className="text-danger">{errors.cpassword}</span>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputProgram" className="form-label">Program</label>
          <select
            id="inputProgram"
            name="program"
            className="form-select"
            value={user.program}
            onChange={handleInputs}
            required
          >
            <option value="">Select Program</option>
            <option>B.Tech</option>
            <option>M.Tech</option>
            <option>BS-MS</option>
            <option>PhD</option>
          </select>
          {errors.program && <span className="text-danger">{errors.program}</span>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputBranch" className="form-label">Branch</label>
          <select
            id="inputBranch"
            name="branch"
            className="form-select"
            value={user.branch}
            onChange={handleInputs}
            required
          >
            <option value="">Select Branch</option>
            <option>Computer Science</option>
            <option>Electrical Engineering</option>
            <option>Mechanical Engineering</option>
            <option>Civil Engineering</option>
            <option>Chemical Engineering</option>
            <option>Engineering Physics</option>
          </select>
          {errors.branch && <span className="text-danger">{errors.branch}</span>}
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-outline-danger">
            Create
          </button>
        </div>
      </form>
      {message && <p className="alert alert-success mt-3" role="status">{message}</p>}
    </div>
  );
}
