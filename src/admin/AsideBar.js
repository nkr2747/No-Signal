import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import AdminNavItems from "./AdminNavItems";

export default function AsideBar() {
  return (
    <aside className="col-3 rounded-start d-none flex-column d-lg-flex align-items-center text-center" style={{ backgroundColor: "white" }}>
      <Link className="navbar-brand" to="/">
        <img src={logo} className="sidebar-brand-logo" alt="IIT Dharwad Library" />
      </Link>
      <AdminNavItems />
      <ul className="navbar-nav m-1 align-items-start px-4 fs-6 flex-column position-absolute bottom-0 my-4">
        <li className="nav-item small"><Link className="nav-link" to="logoutadmin">Logout</Link></li>
      </ul>
    </aside>
  );
}
