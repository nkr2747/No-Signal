// About.js
import React, { useState, useEffect } from 'react';
import { getRandomQuote } from './QuotesFunction';

export default function About() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

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
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner text-light">
            <div className="carousel-item h-100 active align-items-start justify-content-start">
              <h3>Quote One</h3>
              <p id="quote">
                {quote}
              </p>
            </div>
            <div className="carousel-item">
              <h3>Quote Three</h3>
              <p id="quote">
                {getRandomQuote()}
              </p>
            </div>
            <div className="carousel-item">
              <h3>Quote Two</h3>
              <p id="quote">
                {getRandomQuote()}
              </p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

