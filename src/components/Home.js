import React from 'react'
import Quotes from "./Quotes";
import NewArrivals from "./NewArrivals";
import Recommended from "./Recommended";
export default function Home() {
  return (
    <div className="container-fluid">
          <div
            className="row  my-5 position-relative z-index-1"
            style={{
              height: "20vh",
            }}
          >
            <Quotes />
            <NewArrivals />
          </div>
          <div
            className="row p-1  my-5 border"
            style={{
              height: "35vh",
            }}
          >
            <div className="container">
              <h3>Good Morning</h3>
              <div class="d-flex justify-content-between">
                <div>
                  <p>Reccomended for You</p>
                </div>
                <div className="fs-6 small">
                  <p>
                    <a
                      class="link-secondary link-underline small link-underline-opacity-0 link-opacity-100-hover"
                      href="/"
                    >
                      Show all
                    </a>
                  </p>
                </div>
              </div>
              <Recommended />
            </div>
          </div>
          <div
            className="row  my-5 border"
            style={{
              height: "30vh",
            }}
          ></div>
          <div
            className="row  my-5 border"
            style={{
              height: "30vh",
            }}
          ></div>
          <div
            className="row  my-5 border"
            style={{
              height: "30vh",
            }}
          ></div>
          </div>
  )
}
