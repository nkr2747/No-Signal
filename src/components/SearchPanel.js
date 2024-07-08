import React from 'react'
import { useEffect,useState } from 'react';
import SearchBar from './SearchBar'
import axios from 'axios'
export default function SearchPanel(props) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the books!', error);
      });
  }, []);
    function func(book){
        return (
            <a href={`issuebook/${book._id}`} class="list-group-item my-2 rounded list-group-item-action" >
    <div class="d-flex w-100 justify-content-between">
      <div className="row small gx-2 w-100">
      <div className='col-3' style={{ height:'60px', }}>
  <img className='object-fit-cover' src={book.image_url} style={{ height:'60px' }} alt="book" />
</div>

        <div className="col-6">
        <h6 class="mb-1">{book.title}</h6>
        <small class="text-body-secondary">{book.author}</small>
        </div>
        <div className="col-2 small ">{book.genre}</div>
        <div className="col-1 small">{book.count===0?"Unavailable":"Available"}</div>
      </div>
      
    </div>
  </a>
        )
    }
  return (
    <>
    <SearchBar/>
    <div className="contaiiner px-4">
    <div className="row pt-5  mt-4">
      <div className="col-6 "><h6>Title</h6></div>
      <div className="col-4 px-0"><h6>Category</h6></div>
      <div className="col-2 px-0"><h6>Status</h6></div>
    </div>
    </div>
    <div className="list-group ">
      {
        books.map(func)
      }
      
    </div>
    </>
  )
}
