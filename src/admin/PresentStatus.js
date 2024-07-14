import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const statusStyle = {
  color: 'red',
};

export default function PresentStatus() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const presentStatus = async (e) => {

    e.preventDefault();

    const res = await fetch('/presentstatus', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email
      })
    })

    const data = await res.json();

    if (res.status === 400 || !data) 
    {
      window.alert("Student Does Not Found");
    }
    else 
    {
      window.alert("Student Found");
    }

  }

  return (
    <>
    <div className="background">
      <div className="d-flex align-items-center mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-person-gear me-3" viewBox="0 0 16 16">
          <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
        </svg>
        <h1>Present <span style={statusStyle}>Status</span> of Students</h1>
      </div>

      <div className="card" style={{ width: '100%' }}>
        <div className="card-body">
          <div className="mb-3 row">
            <div className="col-md-9">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" 
              value = {email}
              onChange= {(e) => setEmail(e.target.value)}
              placeholder="RollNo@iiitdh.ac.in" />
            </div>
            <div className="col-md-3 d-flex align-items-end">
              <button type="search" className="btn btn-primary" value="search" onClick={presentStatus }>Search ID</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}