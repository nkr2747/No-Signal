import React from 'react'

export default function Expand(props) {
    const arrall=[1,2,3,4,5,6,7,7,8,8]
    function arrallfxn(x) {
        return (
          <div
            className="col-4 m-4 justify mx-1  h-100"
            style={{
              width: "12rem",
            }}
          >
            <div
              class="card"
              style={{
                width: "12rem",
              }}
            ><a href="">
              <img
                src="https://minalsampat.com/wp-content/uploads/2019/12/book-placeholder-370x538.jpg"
                class="card-img-top"
                alt="..."
              />
              </a>
            </div>
          </div>
        );
      } 
  return (
    
    <div className="container my-4 g-5">
        <div className="row">
            <h4>{props.category}</h4>
            {arrall.map(arrallfxn)}
        </div>
    </div>
  )
}
