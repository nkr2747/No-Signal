import React from 'react'
import { useEffect,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import SearchBar from './SearchBar'
import axios from 'axios'
import Fuse from "fuse.js"
export default function SearchPanel(props) {
  function bkttle(x) {
    return x.title;
  }
  const [books, setBooks] = useState([]);
  const suggestions = books.map(bkttle);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const handleChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    // Filter suggestions based on input value if input value is not empty
    if (inputValue.trim() !== '') {
      const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredSuggestions(filteredSuggestions);
    } else {
      setFilteredSuggestions([]);
    }
  };



  const handleSelect = (value) => {
    setInputValue(value);
    setFilteredSuggestions([]);
  };

  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('searchpanel');
  }

  const handleSearch = () => {
    const fuse = new Fuse(books, {
      keys: ['title', 'author', 'description'],
      includeScore: true,
      threshold:0.5
    });

    const results = fuse.search(inputValue);
    setSearchResults(results.map(result => result.item));
    goToAbout()
  };

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === highlight.toLowerCase() ? <span key={index} onk className="highlight">{part}</span> : part
    );
  };
//uselocation url me query token valid
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
            <Link to={`issuebook/${book._id}`} className="list-group-item my-2 rounded list-group-item-action" >
    <div className="d-flex w-100 justify-content-between">
      <div className="row small gx-2 w-100">
      <div className='col-3' style={{ height:'60px', }}>
  <img className='object-fit-cover' src={book.image_url} style={{ height:'60px' }} alt="book" />
</div>

        <div className="col-6">
        <h6 className="mb-1">{book.title}</h6>
        <small className="text-body-secondary">{book.author}</small>
        </div>
        <div className="col-2 small ">{book.genre}</div>
        <div className="col-1 small">{book.count===0?"Unavailable":"Available"}</div>
      </div>
      
    </div>
  </Link>
        )
    }
  return (
    <>
    {/* <SearchBar/> */}
    <div
      className="row mx-1  "
      style={{
        backgroundColor: "#F3F3F7",
      }}
    >
      <div className="col-12 col-lg-9  border align-items-end ">
        {/* <DateTimeDisplay /> */}
        {/* <Autocomplete suggestions={bkttles} /> */}
            <div className="container px-0" style={ {
        position: 'relative',
        zIndex: 2 /* Ensures this container is on top */
      }}>
    <div className="input-group">
        <button
            className="btn  btn-secondary text-dark dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              backgroundColor: "#F3F3F7",
            }}
          >
            All
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </li>
          </ul>

      <input
            type="text"
            className="form-control me-2"
            value={inputValue}
            onChange={handleChange}
            placeholder="Search"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
          <button className="btn btn-outline-danger rounded" onClick={handleSearch} type="submit">Search</button>
          {inputValue.trim() !== '' && (
            <div className="container overflow-y-auto list-group scrollable-container " style={{maxHeight:'40vh'}}>
        <ul className='' style={{
            position: 'absolute',
            zIndex:2
        }} >
          {filteredSuggestions.map((suggestion, index) => (
            <li className="list-group-item list-group-item-action" key={index} onClick={() => handleSelect(suggestion)}>
              {getHighlightedText(suggestion, inputValue)}
            </li>
          ))}
        </ul>
        </div>
      )}
    </div>
    </div>
      </div>
    </div>
    <div className="contaiiner px-4">
    <div className="row pt-5  mt-4">
      <div className="col-6 "><h6>Title</h6></div>
      <div className="col-4 px-0"><h6>Category</h6></div>
      <div className="col-2 px-0"><h6>Status</h6></div>
    </div>
    </div>
    <div className="list-group ">
      
       
        
        {(searchResults.length > 0 ? searchResults : books).map(func)}
        
      
      
    </div>
    </>
  )
}
