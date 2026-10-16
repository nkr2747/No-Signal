import { API_URL } from "../config";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PasswordInput from "../components/PasswordInput";

export default function AaddNewAdmin() {

  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    name: "", email: "", password: "", cpassword: ""
  });
  const [errors, setErrors] = useState({});
  
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  }

  const validate = () => {
    const newErrors = {};
    if (!admin.name) newErrors.name = "Name is required";
    if (!admin.email) newErrors.email = "Email is required";
    if (!admin.password) newErrors.password = "Password is required";
    else if (admin.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (!admin.cpassword) newErrors.cpassword = "Confirm Password is required";
    if (admin.password !== admin.cpassword) newErrors.cpassword = "Passwords do not match";
    return newErrors;
  }

  const PostData = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const { name, email, password, cpassword } = admin;
    try {
      const res = await fetch(`https://no-signal.onrender.com/adminregister`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          name, email, password, cpassword
        })
      });

      if (res.status === 401) {
        window.alert("Only a signed-in admin can create more admin accounts. Please log in as an admin first.");
        return;
      }
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        window.alert(data.error || "Unable to register admin.");
        return;
      }
      window.alert("Registration Successfully");
      navigate("/loginpageadmin");
    } catch (err) {
      window.alert("Unable to reach the library server.");
    }
  }

  return (
    <div className="container px-5 py-4 ">
      <h4 className="my-3">Admin Registration</h4>
      <form method="POST" className="row g-3" onSubmit={PostData}>
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="inputName"
            value={admin.name}
            onChange={handleInputs}
            placeholder="Name"
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
            value={admin.email}
            onChange={handleInputs}
            placeholder="College Email ID"
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <PasswordInput
            name="password"
            id="inputPassword"
            value={admin.password}
            onChange={handleInputs}
            placeholder="Password"
            autoComplete="new-password"
          />
          {errors.password && <span className="text-danger">{errors.password}</span>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCPassword" className="form-label">Confirm Password</label>
          <PasswordInput
            name="cpassword"
            id="inputCPassword"
            value={admin.cpassword}
            onChange={handleInputs}
            placeholder="Confirm Password"
            autoComplete="new-password"
          />
          {errors.cpassword && <span className="text-danger">{errors.cpassword}</span>}
        </div>
       
        <div className="col-12">
          <button type="submit" className="btn btn-outline-danger">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}


