import React, { useState } from "react";
import axios from "axios";


export default function AddNewStudent() {
  const [user, setUser] = useState({
    name: "", email: "", password: "", cpassword: "", program: "", branch: ""
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const validate = () => {
    const newErrors = {};
    if (!user.name) newErrors.name = "Name is required";
    if (!user.email) newErrors.email = "Email is required";
    if (!user.password) newErrors.password = "Password is required";
    if (!user.cpassword) newErrors.cpassword = "Confirm Password is required";
    if (user.password !== user.cpassword) newErrors.cpassword = "Passwords do not match";
    if (!user.program) newErrors.program = "Program is required";
    if (!user.branch) newErrors.branch = "Branch is required";
    return newErrors;
  }

  const PostData = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Check if the email already exists
      const emailCheckResponse = await axios.post("/check-email", { email: user.email });
      if (emailCheckResponse.data.exists) {
        setMessage("Email already exists");
        return;
      }

      const { name, email, password, program, branch } = user;

      const res = await axios.post("/users", {
        name, email, password, program, branch
      });

      if (res.status === 201) {
        window.alert("Registration Successfully");
        setMessage('');
        setUser({ name: "", email: "", password: "", cpassword: "", program: "", branch: "" });
      } else {
        window.alert("Registration Failed");
      }
    } catch (error) {
      window.alert("Registration Failed");
    }
  }

  return (
    <div className="container px-5 py-4">
      <h4 className="my-3">Student Registration</h4>
      <form method="POST" className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="inputName"
            value={user.name}
            onChange={handleInputs}
            placeholder="Name"
          />
          {errors.name && <span className="text-danger">{errors.name}</span>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="inputEmail"
            value={user.email}
            onChange={handleInputs}
            placeholder="College Email ID"
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="inputPassword"
            value={user.password}
            onChange={handleInputs}
            placeholder="Password"
          />
          {errors.password && <span className="text-danger">{errors.password}</span>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Confirm Password</label>
          <input
            type="password"
            name="cpassword"
            className="form-control"
            id="inputCPassword"
            value={user.cpassword}
            onChange={handleInputs}
            placeholder="Confirm Password"
          />
          {errors.cpassword && <span className="text-danger">{errors.cpassword}</span>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputState" className="form-label">Program</label>
          <select
            id="inputProgram"
            name="program"
            className="form-select"
            value={user.program}
            onChange={handleInputs}
          >
            <option value="">Select Program</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="PhD">PhD</option>
          </select>
          {errors.program && <span className="text-danger">{errors.program}</span>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputState" className="form-label">Branch</label>
          <select
            id="inputBranch"
            name="branch"
            className="form-select"
            value={user.branch}
            onChange={handleInputs}
          >
            <option value="">Select Branch</option>
            <option value="Computer Science and Engineering">Computer Science and Engineering</option>
            <option value="Electrical">Electrical</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
            <option value="Chemical">Chemical</option>
            <option value="Engineering Physics">Engineering Physics</option>
            <option value="BS-MS">BS-MS</option>
          </select>
          {errors.branch && <span className="text-danger">{errors.branch}</span>}
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-outline-danger" onClick={PostData}>
            Create
          </button>
        </div>
      </form>
      {message && <p className="text-danger">{message}</p>}
    </div>
  );
}
