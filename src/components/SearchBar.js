import React from "react";
import Search from "./search";
import AuthButton from "./AuthButton";

export default function SearchBar() {
  return (
    <div className="d-flex align-items-start gap-2 px-2 mb-3">
      <div className="flex-grow-1">
        <Search />
      </div>
      <AuthButton />
    </div>
  );
}
