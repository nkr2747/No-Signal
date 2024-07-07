import React from 'react'
import SearchBar from './SearchBar'
import authorlogo from '../images/authorlogo.svg'
import { Link } from 'react-router-dom'
export default function IssueBook() {
  return (
    <>
    <SearchBar/>
    <div style={{height:'10vh'}}></div>
    <div className="container ">
        <div className="row  "style={{height:'40vh'}}>
            <div className="col-5 col-lg-3 border d-flex ">
            <div
          className="d-inline-block justify mx-3  h-100"
          style={{
            width: "8rem",
          }}
        >
          <div
            class="card border border-0"
            style={{
              width: "8rem",
            }}
          > <Link to="issuebook">
            <img
              src="https://minalsampat.com/wp-content/uploads/2019/12/book-placeholder-370x538.jpg"
              class="card-img-top"
              alt="..."
            />
            </Link>
          </div>
        </div>

                
                

            </div>
            <div className="col-7 col-lg-5 border ">
                <div className="container my-3">
                    <p className='fs-4'>Book Title</p>
                    <p  style={{
                        fontSize:'0.7rem'
                    }}>By Author Name</p>
                    will add details of the book later
                    
                </div>
                <div className="container  my-5">
                <button className='btn btn-outline-danger'>Borrow</button>
                </div>
            </div>
            <div className="col-4 d-none d-lg-block">
              <div className="container h-100 rounded" style={{backgroundColor:"white"}}>
                <div className="row">
                    <div className="col-6 py-3">
                    <strong> <span style={{color:'red'}}>About</span> Author</strong>
                        <br/>
                        <br/>
                        Author name
                    </div>
                    <div className="col-6">
                        <img src={authorlogo} alt="" />
                    </div>
                    <div className='small'>
                        <p className='small'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis dolor consectetur consequuntur maxime fugit neque nisi, sequi quidem hic officia.
                        </p>
                    </div>
                    <div className="container small">
                        <p className='small'><strong>Other Books</strong></p>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}
