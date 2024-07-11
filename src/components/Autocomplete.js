// Autocomplete.js
import React, { useState } from 'react';
import "../App.css"
// import Fuse from 'fuse.js'
const Autocomplete = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');

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


  // const handleSearch = () => {
  //   const fuse = new Fuse(books, {
  //     keys: ['title', 'author', 'description'],
  //     includeScore: true,
  //     threshold:0.5
  //   });

  //   const results = fuse.search(inputValue);
  //   setSearchResults(results.map(result => result.item));
  // };

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === highlight.toLowerCase() ? <span key={index} className="highlight">{part}</span> : part
    );
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log("hey")
    }
  };

  return (
    <div className="container px-0" style={ {
        position: 'relative',
        zIndex: 2 /* Ensures this container is on top */
      }}>
    <div class="input-group">
        <button
            class="btn  btn-secondary text-dark dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              backgroundColor: "#F3F3F7",
            }}
          >
            All
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="/">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Something else here
              </a>
            </li>
          </ul>

      <input
            type="text"
            class="form-control me-2"
            value={inputValue}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            placeholder="Search"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
          {/* <button class="btn btn-outline-danger rounded" type="submit">Search</button> */}
          {inputValue.trim() !== '' && (
            <div className="container overflow-y-auto list-group scrollable-container " style={{maxHeight:'40vh'}}>
        <ul className='' style={{
            position: 'absolute',
            zIndex:2
        }} >
          {filteredSuggestions.map((suggestion, index) => (
            <li class="list-group-item list-group-item-action" key={index} onClick={() => handleSelect(suggestion)}>
              {getHighlightedText(suggestion, inputValue)}
            </li>
          ))}
        </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default Autocomplete;
