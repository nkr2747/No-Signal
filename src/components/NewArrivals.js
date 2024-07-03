import React from 'react'

export default function NewArrivals() {
    const arr = [1, 2, 3, 4, 5, 6];
  function myf(x) {
    return (
      <div
        className="d-inline-block justify mx-1  h-100"
        style={{
          width: "6rem",
        }}
      >
        <div
          class="card"
          style={{
            width: "6rem",
          }}
        >
          <img
            src="https://minalsampat.com/wp-content/uploads/2019/12/book-placeholder-370x538.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
      </div>
    );
  }
  return (
    <div className="col-12 col-lg-7 bg-light px-0">
              <div class="overflow-x-auto  h-100 w-100 bg-light  scrollable-container" >
                <div
                  className="align-items-center text-center"
                  style={{
                    display: "inline-flex",
                    backgroundColor:'white'
                  }}
                >
                  {arr.map(myf)}
                </div>
              </div>
            </div>
          
  )
}
