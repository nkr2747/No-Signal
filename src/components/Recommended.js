import React from 'react'
import { Link } from 'react-router-dom';
export default function Recommended() {
    const arr = [1, 2, 3, 4, 5, 6,9,8,];
    function myf(x) {
      return (
        <div
          className="d-inline-block justify mx-3  h-100"
          style={{
            width: "6rem",
          }}
        >
          <div
            class="card border border-0"
            style={{
              width: "6rem",
            }}
          > <Link to="/issuebook">
            <img
              src="https://minalsampat.com/wp-content/uploads/2019/12/book-placeholder-370x538.jpg"
              class="card-img-top"
              alt="..."
            />
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div className="col-12  px-0">
                <div class="overflow-x-auto  h-100 w-100  scrollable-container" >
                  <div
                    className=" text-center"
                    style={{
                      display: "inline-flex",
                      
                    }}
                  >
                    {arr.map(myf)}
                  </div>
                </div>
              </div>
            
    )
}
