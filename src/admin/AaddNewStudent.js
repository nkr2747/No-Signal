import React from "react";

export default function AaddNewStudent() {
  return (
    <div className="contanier px-5 py-4 ">
       <h4 className=" my-3">Student Registration</h4>
    <form class="row g-3">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">
          Name
        </label>
        <input type="email" placeholder="Name" class="form-control" id="inputEmail4" />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">
          Email
        </label>
        <input type="email" placeholder="College Email ID"  class="form-control" id="inputEmail4" />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">
          Password
        </label>
        <input type="password" placeholder="Password"  class="form-control" id="inputPassword4" />
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
        <button type="submit" class="btn btn-outline-danger">
         Create
        </button>
      </div>
    </form>
    </div>
  );
}
