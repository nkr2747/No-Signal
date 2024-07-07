import React from 'react';
import './BorrowPage.css';

export default function BorrowPage(props) {
  return (
    <div className="container">
    <div className="body-layout">
      <div className="card-container">
        <div className="card" style={{ width: '18rem' }}>
          <img src="bg.png" className="card-img-top" alt="Descriptive alt text" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              About the book
            </p>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary">Reviews</button>
              <button type="button" className="btn btn-primary">Notes</button>
              <button type="button" className="btn btn-primary">Share</button>
            </div>
          </div>
        </div>
      </div>

      <div className="content-between-cards">
        <h2>Book Name PPPPPPPPPPPPPPP</h2>
        <p>By Author Name</p>
        <span className="light-text">Current Addition</span>
        <br/>
        <div>
          <p style={{ display: 'inline-block' }}>Rating</p>
          <p style={{ display: 'inline-block', marginLeft: '20px' }}>Number of Borrows</p>
        </div>
        <h5>Availability Status</h5>
        <br/>
        <div>
        <p style={{ display: 'inline-block' }}>Hard Copy</p>
        <button type="button" className="btn btn-info" style={{ width: '100px',display: 'inline-block', marginLeft: '20px' }}>Info</button>
        </div>
        <br/>
        <div>
      <button type="button" className="btn btn" style={{ display: 'inline-block', backgroundColor: '#EF4D4D', borderColor: '#EF4D4D', color: '#fff', borderLeftWidth: '30px', borderRightWidth: '30px', textAlign: 'center' }}>
        <h5 style={{ margin: '0' }}>Borrow</h5>
      </button>
      <button type="button" className="btn btn" style={{ display: 'inline-block', marginLeft: '20px', backgroundColor: '#3DDA07', borderColor: '#3DDA07', color: '#fff', borderLeftWidth: '30px', borderRightWidth: '30px', textAlign: 'center' }}>
        <h5 style={{ margin: '0' }}>Return</h5>
      </button>
    </div>
      </div>

      <div className="card second-card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">About Author</h5>
          <br />
          <h6>Author Name</h6>
          <br />
          <h6 className="card-subtitle mb-2 text-body-secondary">Some quick example text About Author on the card title and make up the bulk of the card's content.</h6>
          <p className="card-text">Other Books</p>
          <h6>Book1</h6>
          <h6>Book2</h6>
        </div>
      </div>
      </div>
      </div>
  );
}
