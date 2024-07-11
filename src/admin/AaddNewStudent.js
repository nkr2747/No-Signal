import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function AaddNewStudent() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email: "", password: "", cpassword: "", program: "", branch: ""
  });
  const [errors, setErrors] = useState({});
  
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

    const { name, email, password, cpassword, program, branch } = user;
    try {
      const res = await fetch('/admin', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, password, cpassword, program, branch
        })
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        window.alert("Email Already exist");
      } else {
        window.alert("Registration Successfully");
        navigate("/loginpage")
      }
    } catch (err) {
      console.log(err);
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
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword" className="form-label">Password</label>
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
          <label htmlFor="inputCPassword" className="form-label">Confirm Password</label>
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
          <label htmlFor="inputProgram" className="form-label">Program</label>
          <select
            id="inputProgram"
            name="program"
            className="form-select"
            value={user.program}
            onChange={handleInputs}
          >
            <option value="">Select Program</option>
            <option>B.Tech</option>
            <option>M.Tech</option>
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
          >
            <option value="">Select Branch</option>
            <option>Computer Science and Engineering</option>
            <option>Electrical</option>
            <option>Mechanical</option>
            <option>Civil</option>
            <option>Chemical</option>
            <option>Engineering Physics</option>
            <option>BS-MS</option>
          </select>
          {errors.branch && <span className="text-danger">{errors.branch}</span>}
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




// import React,{useState} from "react";
// import axios from 'axios';

// export default function AaddNewStudent() {

//     const [name, setname] = useState('');
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');
//     const [program, setProgram] = useState('B.Tech');
//     const [branch, setBranch] = useState('CSE');
//     const [message, setMessage] = useState('');
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const response = await axios.post('http://localhost:3000/users', {
//           name,
//           email,
//           password,
//           program,
//           branch
//         });
//         console.log("hi")
//         setMessage(response.data.message);
//       } catch (error) {
//         if (error.response) {
//           setMessage(error.response.data.error);
//         } else {
//           setMessage('An error occurred');
//         }
//       }
//     };
//   return (
//     <div className="contanier px-5 py-4 ">
//        <h4 className=" my-3">Student Registration</h4>
//     <form class="row g-3">
//       <div class="col-md-6">
//         <label for="inputEmail4" class="form-label">
//           Name
//         </label>
//         <input type="name" value={name} onChange={(e) => setname(e.target.value)} placeholder="Name" class="form-control" id="inputEmail4" />
//       </div>
//       <div class="col-md-6">
//         <label for="inputEmail4" class="form-label">
//           Email
//         </label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="College Email ID"  class="form-control" id="inputEmail4" />
//       </div>
//       <div class="col-md-6">
//         <label for="inputPassword4" class="form-label">
//           Password
//         </label>
//         <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="Password"  class="form-control" id="inputPassword4" />
//       </div>
//       <div class="col-md-6">
//         <label for="inputPassword4" class="form-label">
//           Confirm Password
//         </label>
//         <input type="password" placeholder="Confirm Password"  class="form-control" id="inputPassword4" />
//       </div>
//       <div class="col-md-6">
//     <label for="inputprogram" class="form-label">Program</label>
//     <select id="inputprogram" value={program} onChange={(e) => setProgram(e.target.value)} class="form-select">
//       <option>B.Tech</option>
//       <option>M.Tech</option>
//       <option>PhD</option>
//     </select>
//   </div>
//       <div class="col-md-6">
//     <label for="inputbranch" class="form-label">Branch</label>
//     <select id="inputbranch" value={branch} onChange={(e) => setBranch(e.target.value)} class="form-select">
//       <option value="CSE">CSE</option>
//       <option value="Electrical">Electrical</option>
//       <option value="Mechanical">Mechanical</option>
//       <option value="Civil">Civil</option>
//       <option value="Chemical">Chemical</option>
//       <option value="Engineering Physics">Engineering Physics</option>
//       <option value="BS-MS">BS-MS</option>
//     </select>
//   </div>
      
//       <div class="col-12">
//         <button type="submit" onClick={handleSubmit} class="btn btn-outline-danger">
//          Submit
//         </button>
//       </div>
//     </form>
//     {message && <p>{message}</p>}
//     </div>
//   );
// }




// import React, { useState } from "react";
// import axios from 'axios';

// export default function AaddNewStudent() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [program, setProgram] = useState('B.Tech');
//   const [branch, setBranch] = useState('CSE');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/users', {
//         name,
//         email,
//         password,
//         program,
//         branch
//       });
//       setMessage(response.data.message);
//     } catch (error) {
//       if (error.response) {
//         setMessage(error.response.data.error);
//       } else {
//         setMessage('An error occurred');
//       }
//     }
//   };

//   return (
//     <div className="container px-5 py-4">
//       <h4 className="my-3">Student Registration</h4>
//       <form className="row g-3" onSubmit={handleSubmit}>
//         <div className="col-md-6">
//           <label htmlFor="inputName" className="form-label">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="inputName"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Name"
//             required
//           />
//         </div>
//         <div className="col-md-6">
//           <label htmlFor="inputEmail" className="form-label">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             id="inputEmail"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="College Email ID"
//             required
//           />
//         </div>
//         <div className="col-md-6">
//           <label htmlFor="inputPassword" className="form-label">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="inputPassword"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             required
//           />
//         </div>
//         <div className="col-md-6">
//           <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="confirmPassword"
//             placeholder="Confirm Password"
//             required
//           />
//         </div>
//         <div className="col-md-6">
//           <label htmlFor="inputProgram" className="form-label">Program</label>
//           <select
//             id="inputProgram"
//             className="form-select"
//             value={program}
//             onChange={(e) => setProgram(e.target.value)}
//           >
//             <option value="B.Tech">B.Tech</option>
//             <option value="M.Tech">M.Tech</option>
//             <option value="PhD">PhD</option>
//           </select>
//         </div>
//         <div className="col-md-6">
//           <label htmlFor="inputBranch" className="form-label">Branch</label>
//           <select
//             id="inputBranch"
//             className="form-select"
//             value={branch}
//             onChange={(e) => setBranch(e.target.value)}
//           >
//             <option value="CSE">CSE</option>
//             <option value="Electrical">Electrical</option>
//             <option value="Mechanical">Mechanical</option>
//             <option value="Civil">Civil</option>
//             <option value="Chemical">Chemical</option>
//             <option value="Engineering Physics">Engineering Physics</option>
//             <option value="BS-MS">BS-MS</option>
//           </select>
//         </div>
//         <div className="col-12">
//           <button type="submit" className="btn btn-outline-danger">Submit</button>
//         </div>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }
