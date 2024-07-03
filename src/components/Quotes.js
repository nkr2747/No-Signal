import React from 'react'

export default function Quotes() {
  return (
    <div className="col-5 d-none d-lg-block px-4 text-center py-1">
              <div
                className="container rounded h-100 text-center"
                style={{
                  background: "linear-gradient(to top, #792A8E, #BB4248)",
                }}
              >
                <div
                  id="carouselExampleAutoplaying"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner text-light">
                    <div class="carousel-item h-100 active align-items-start justify-content-start">
                      <h3>Todays Quote1</h3>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Cumque dignissimos dolor voluptates .
                      </p>
                    </div>
                    <div class="carousel-item">
                      <h3>Todays Quote2</h3>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Cumque dignissimos dolor voluptates .
                      </p>
                    </div>
                    <div class="carousel-item">
                      <h3>Todays Quote3</h3>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Cumque dignissimos dolor voluptates .
                      </p>
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>

  )
}
