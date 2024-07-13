import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DashBoard() {
  const [bookRequests, setBookRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookRequests();
  }, []);

  const fetchBookRequests = async () => {
    try {
      const response = await axios.get('/admin/bookrequests', {
        headers: {
          "Content-Type": "application/json"
        }
      });
      setBookRequests(response.data.requests);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch book requests');
      setLoading(false);
    }
  };

  const approveBookRequest = async (userId, bookId) => {
    try {
      const response = await axios.post('/approvebook', { userId, bookId }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.status === 200) {
        alert('Book request approved successfully');
        // Update the list of book requests after approval
        fetchBookRequests();
      }
    } catch (err) {
      alert('Failed to approve book request');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="list-group m-2">
      {bookRequests.map(request => (
        <div className="list-group-item m-2" key={`${request.userId}-${request.bookId}`}>
          <strong>Student Name:</strong> {request.userName}
          <br />
          <strong>Book Name:</strong> {request.bookTitle}
          <br />
          <strong>Requested At:</strong> {new Date(request.requestedAt).toLocaleString()}
          <br />
          <button onClick={() => approveBookRequest(request.userId, request.bookId)} className="btn btn-primary">
            Approve
          </button>
        </div>
      ))}
    </div>
  );
}
