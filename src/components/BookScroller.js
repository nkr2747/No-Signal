import React from 'react'
import { Link } from 'react-router-dom';

export default function BookScroller(props) {
    function myf(book) {
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
          > <a href={`issuebook/${book._id}`}>
            <img
              src={book.image_url}
              class="card-img-top"
              alt="..."
            />
            </a>
          </div>
        </div>
      );
    }
    return (
        <>
        <div class="d-flex justify-content-between">
                    <div>
                    <p className='fs-5'>{props.title}</p>
                    </div>

                    <div className="fs-6 small">
                      <p>
                        <Link
                          class="link-secondary link-underline link-underline-opacity-0 small link-opacity-100-hover"
                          to="recommended"
                        >
                          Show all
                        </Link>
                      </p>
                    </div>
                  </div>
      <div className="col-12  px-0">
                <div class="overflow-x-auto  h-100 w-100  scrollable-container" >
                  <div
                    className=" text-center"
                    style={{
                      display: "inline-flex",
                      
                    }}
                  >
                    {props.book.map(myf)}
                  </div>
                </div>
              </div>
              </>
            
    )
}

