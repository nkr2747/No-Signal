import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      axios.get(`/search?q=${query}`)
        .then(response => {
          setResults(response.data);
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
        });
    } else {
      setResults([]);
    }
  }, [query]);

  const highlightMatch = (text, highlight) => {
    const regex = new RegExp(`(${highlight})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  };

  return (
    <div className='list-group' >
      <input
        // type="text"
        // value={query}
        // onChange={(e) => setQuery(e.target.value)}
        // placeholder="Search books..."
        //
        type="text"
            className="form-control me-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            // onKeyPress={handleKeyPress}
            placeholder="Search Book Title"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
      />
      {results.length > 0 && (
        <div className='list-group overflow-y-auto' style={{maxHeight:"40vh"
        }}  >
            <div className="list-group z-1" style={{position:"absolute",
            backgroundColor:"white"
        }}>
          {results.map(result => (
            <Link to={`issuebook/${result._id}`}>
            <div className='list-group-item my-1 ' key={result._id}>
              <div className='link-underline link-underline-opacity-0' dangerouslySetInnerHTML={{ __html: highlightMatch(result.title, query) }} />  
            </div>
            </Link>
          ))}
        </div>
        </div>
      )}
    </div>
  );
};

export default Search;
