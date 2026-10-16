import { API_URL } from "../config";
import React, { useContext, useState } from "react";
import "./Loginpage.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import PasswordInput from "./PasswordInput";

const ROLES = {
  student: {
    heading: "Student sign in",
    endpoint: "/loginpage",
    redirect: "/myshelf",
    forgot: "/forgotpassword",
  },
  admin: {
    heading: "Admin sign in",
    endpoint: "/loginpageadmin",
    redirect: "/admin",
    forgot: "/forgotpasswordadmin",
  },
};

export default function LoginForm({ role = "student" }) {
  const config = ROLES[role];
  const { dispatch, authChecked } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();
    if (!authChecked) return;
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch(`https://no-signal.onrender.com${config.endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Unable to log in.");
      }
      if (role === "student") {
        dispatch({ type: "USER", payload: data.user });
      } else {
        dispatch({ type: "USER", payload: false });
      }
      navigate(config.redirect);
    } catch (err) {
      setError(
        err instanceof TypeError
          ? "Cannot reach the library server. Make sure the backend is running (npm run server) and connected to MongoDB."
          : err.message || "Unable to reach the library server."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="background">
      <form method="POST" className="login-form" onSubmit={loginUser}>
        <Link className="link-underline link-underline-opacity-0 " to="/">
          <h6 id="header">
            IIT<span style={{ color: "red" }}>D</span>h <br />
            <span className="book">Book</span> Shelf
          </h6>
        </Link>
        <h5 className="text-center mb-3">{config.heading}</h5>

        <div className="mb-3">
          <label htmlFor="loginEmail" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="loginEmail"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(""); }}
            placeholder="College Email ID"
            autoComplete="username"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="loginPassword" className="form-label">Password</label>
          <PasswordInput
            id="loginPassword"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(""); }}
            required
          />
          <div className="form-text">
            <Link to={config.forgot}>Forgot password?</Link>
          </div>
        </div>
        {error && <p className="text-danger" role="alert">{error}</p>}
        <button type="submit" className="btn btn-outline-danger" disabled={submitting || !authChecked}>
          {!authChecked ? "Preparing sign in…" : submitting ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}
