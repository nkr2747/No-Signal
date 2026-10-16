import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "../images/search-icon.svg";
import addStudentIcon from "../images/admin-add-student.png";
import addBookIcon from "../images/admin-add-book.png";
import borrowIcon from "../images/admin-borrow.png";
import returnIcon from "../images/admin-return.png";
import contributionIcon from "../images/Give Gift.svg";

const requests = [
  { to: "/admin", label: "Borrow Requests", icon: borrowIcon, size: 22 },
  { to: "returnrequest", label: "Return Requests", icon: returnIcon, size: 20 },
  { to: "contributionrequests", label: "Contribution Requests", icon: contributionIcon, size: 22 },
];
const management = [
  { to: "presentstatus", label: "Search Student", icon: searchIcon, size: 15 },
  { to: "addnewstudent", label: "Add New Student", icon: addStudentIcon, size: 20 },
  { to: "addnewbook", label: "Add New Book", icon: addBookIcon, size: 20 },
];

function NavGroup({ items }) {
  return (
    <ul className="navbar-nav m-1 align-items-start px-4 flex-column w-100">
      {items.map((item) => (
        <li className="nav-item" key={item.to}>
          <Link className="nav-link d-flex align-items-center" style={{ fontSize: "1rem" }} to={item.to}>
            <span className="me-2 flex-shrink-0 d-flex align-items-center justify-content-center" style={{ width: 22, height: 22 }}>
              <img src={item.icon} width={item.size} height={item.size} alt="" />
            </span>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function AdminNavItems() {
  return <NavGroup items={[...requests, ...management]} />;
}
