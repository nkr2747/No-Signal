import React from 'react'

export default function NewArrivals() {
  return (
    <div className="container my-4">
              <h4>New Arrivals</h4>
              <div
                className="overflow-x-auto my-2"
                style={{
                  overflowX: "scroll",
                  overflowY: "hidden", 
                }}
              >
                <div
                  style={{
                    height: "25rem",
                    display: "inline-flex", 
                    alignItems: "center", 
                  }}
                >
                  {[...Array(5)].map((_, index) => (
                    <div className="d-inline-block mx-4" key={index}>
                      <div
                        className="card"
                        style={{
                          width: "10rem",
                        }}
                      >
                        <img
                          src="https://minalsampat.com/wp-content/uploads/2019/12/book-placeholder-370x538.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Title</h5>
                          <p className="card-text">Some quick example</p>
                          <a href="/" className="btn btn-primary">
                            Issue
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  )
}
