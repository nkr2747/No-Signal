import React from 'react';
import './support.css';

const userData = {
  name: 'John Doe',
  branch: 'Computer Science',
  program: 'B.Tech',
};
const statusStyle = {
  color: 'red',
};


export default function PresentStatusPage() {
  return (
    <div className="background" style={{ backgroundColor: "#F0F7F7" }}>
      <h1>Present <span style={statusStyle}>Status</span></h1>
      <div
        className="container rounded my-2 p-3 d-flex justify-content-between align-items-center"
        style={{
          backgroundColor: "#F0F7F7"
        }}
      >
        <p className="mb-0">
          <strong>Name:</strong> {userData.name}
        </p>
        <p className="mb-0">
          <strong>Branch:</strong> {userData.branch}
        </p>
        <p className="mb-0">
          <strong>Department:</strong> {userData.program}
        </p>
      </div>
      <div className="row justify-content-start">
        <div className="col-md-8">
          <div className="card border-primary">
            <div className="card-body">
              <h6 className="card-title">Book Name: None</h6>
              <p className="card-text">Author: None</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card border-primary">
            <div className="card-body">
              <h6 className="card-title">Book Name: None</h6>
              <p className="card-text">Author: None</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card border-primary">
            <div className="card-body">
              <h6 className="card-title">Book Name: None</h6>
              <p className="card-text">Author: None</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

