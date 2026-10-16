import { API_URL } from "../config";
import React, { useState } from "react";
import "./Loginpage.css";
import { Link } from "react-router-dom";
import PasswordInput from "./PasswordInput";


export default function ForgotPassword({ role = "student" }) {
  const loginPath = role === "admin" ? "/loginpageadmin" : "/loginpage";
  const [form, setForm] = useState({ email: "", password: "", cpassword: "" });
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); 
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (form.password !== form.cpassword) {
      setError("Passwords do not match.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`https://no-signal.onrender.com/resetpassword`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Unable to reset the password.");
      }
      setDone(true);
    } catch (err) {
      setError(
        err instanceof TypeError
          ? "Cannot reach the library server. Make sure the backend is running."
          : err.message
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="background">
      <form className="login-form" onSubmit={submit}>
        <Link className="link-underline link-underline-opacity-0 " to="/">
          <h6 id="header">
            IIT<span style={{ color: "red" }}>D</span>h <br />
            <span className="book">Book</span> Shelf
          </h6>
        </Link>
        <h5 className="text-center mb-3">
          Reset {role === "admin" ? "admin" : "student"} password
        </h5>

        {done ? (
          <>
            <p className="text-success" role="status">
              Your password was changed. You can sign in with the new password now.
            </p>
            <Link className="btn btn-outline-danger" to={loginPath}>Go to sign in</Link>
          </>
        ) : (
          <>
            <p className="small text-secondary">
              Enter your college email (your username) and choose a new password.
            </p>
            <div className="mb-3">
              <label htmlFor="resetEmail" className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                id="resetEmail"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                placeholder="College Email ID"
                autoComplete="username"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="resetPassword" className="form-label">New password</label>
              <PasswordInput
                id="resetPassword"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="At least 8 characters"
                autoComplete="new-password"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="resetCPassword" className="form-label">Confirm new password</label>
              <PasswordInput
                id="resetCPassword"
                name="cpassword"
                value={form.cpassword}
                onChange={handleChange}
                placeholder="Repeat the new password"
                autoComplete="new-password"
                required
              />
            </div>
            {error && <p className="text-danger" role="alert">{error}</p>}
            <div className="d-flex align-items-center gap-3">
              <button type="submit" className="btn btn-outline-danger" disabled={submitting}>
                {submitting ? "Updating..." : "Reset password"}
              </button>
              <Link to={loginPath} className="small">Back to sign in</Link>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
