// Autocomplete.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css"

const Autocomplete = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

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


  const escapeRegExp = (value) => String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const getHighlightedText = (text, highlight) => {
    const safeText = String(text ?? '');
    const safeHighlight = String(highlight ?? '');
    if (!safeHighlight.trim()) {
      return safeText;
    }

    const parts = safeText.split(new RegExp(`(${escapeRegExp(safeHighlight)})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === safeHighlight.toLowerCase() ?
        <span key={`${part}-${index}`} className="highlight">{part}</span> :
        <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>
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
        zIndex: 2 
      }}>
    <div className="input-group">
        <button
            className="btn btn-outline-danger dropdown-toggle"
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
              <Link className="dropdown-item" to="/">
                Action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                Another action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                Something else here
              </Link>
            </li>
          </ul>

      <input
            type="text"
            className="form-control me-2"
            value={inputValue}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            placeholder="Search"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
          {/* <button className="btn btn-outline-danger rounded" type="submit">Search</button> */}
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
  );
};

export default Autocomplete;
