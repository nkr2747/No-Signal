import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-4">404</h1>
      <p className="lead">We couldn't find that page.</p>
      <Link className="btn btn-outline-danger" to="/">Back to the library</Link>
    </div>
  );
}
