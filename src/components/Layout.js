import React from "react";
import bg from "../images/bg.png";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div
        className="container-fluid p-4"
        style={{
          backgroundImage: `url(${bg})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <div className="row h-100">
          <SideBar />
          <div
            className="col-12 text-centre rounded-end h-100 col-lg-9 py-4 scrollable-container" //note : iss line ka mtlb hai ki col-12 rhe jb size chota rhe (kyuki iss time sidebar gayab ho jaega aur aur jb wapas aa jayega lg breakpoint ke bad tb col-9 ho jaye)
            style={{
              height: "100vh",
              overflowY: "scroll",
              backgroundColor: "#F3F3F7",
            }}
          >
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
}
