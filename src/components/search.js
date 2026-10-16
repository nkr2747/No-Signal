import { API_URL } from "../config";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      axios.get(`${API_URL}/search`, { params: { q: query } })
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

  const escapeRegExp = (value) => String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const escapeHtml = (value) => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  const highlightMatch = (text, highlight) => {
    const safeText = String(text ?? '');
    const safeHighlight = String(highlight ?? '');
    if (!safeHighlight.trim()) {
      return escapeHtml(safeText);
    }

    const regex = new RegExp(`(${escapeRegExp(safeHighlight)})`, 'gi');
    return safeText
      .split(regex)
      .map((part) => {
        if (part.toLowerCase() === safeHighlight.toLowerCase()) {
          return `<strong>${escapeHtml(part)}</strong>`;
        }
        return escapeHtml(part);
      })
      .join('');
  };

  return (
    <div className='list-group' >
      <input

        type="text"
            className="form-control me-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
            <Link to={`/issuebook/${result._id}`} key={result._id}>
            <div className='list-group-item my-1 '>
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
