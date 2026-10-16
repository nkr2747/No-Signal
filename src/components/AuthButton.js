import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function AuthButton() {
  const { state, authChecked } = useContext(UserContext);

  if (!authChecked) return null;

  if (state) {
    return (
      <div className="d-flex align-items-center gap-2 text-nowrap">
        <span className="small text-secondary d-none d-md-inline">Hi, {state.name}</span>
        <Link className="btn btn-outline-danger" to="/logout">Logout</Link>
      </div>
    );
  }
  return (
    <Link className="btn btn-outline-danger text-nowrap" to="/loginpage">
      Student login
    </Link>
  );
}
