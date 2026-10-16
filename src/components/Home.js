import React, { useContext } from "react";
import Quotes from "./Quotes";
import NewArrivals from "./NewArrivals";
import BookScroller from "./BookScroller";
import { UserContext } from "../UserContext";

const DEPARTMENTS = [
  "Computer Science",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Chemical Engineering",
  "Engineering Physics",
];

function greeting(hour) {
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

export default function Home() {
  const { state: student } = useContext(UserContext);

  return (
    <div className="container-fluid">
      <div className="row my-5 position-relative">
        <Quotes />
        <NewArrivals />
      </div>

      <div className="row p-1 my-5">
        <div className="container">
          <h3>{greeting(new Date().getHours())}</h3>
          {student && student.branch && (
            <BookScroller department={student.branch} recommendation={true} />
          )}
        </div>
      </div>

      {DEPARTMENTS.map((department) => (
        <div className="row my-5" key={department}>
          <div className="container">
            <BookScroller department={department} />
          </div>
        </div>
      ))}
    </div>
  );
}
