import { API_URL } from "../config";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DashBoard() {
  const [bookRequests, setBookRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBookRequests = async () => {
    try {
      const response = await axios.get(`${API_URL}/admin/bookrequests`, { withCredentials: true });
      setBookRequests(response.data.requests);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || "Unable to load borrow requests.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBookRequests(); }, []);

  const updateRequest = async (request, approve) => {
    try {
      await axios.post(`${API_URL}/${approve ? "approvebook" : "rejectbook"}`, {
        userId: request.userId,
        bookId: request.bookId,
      }, { withCredentials: true });
      await fetchBookRequests();
    } catch (err) {
      alert(err.response?.data?.message || "Unable to update the borrow request.");
    }
  };

  if (loading) return <div>Loading borrow requests…</div>;
  if (error) return <div role="alert">{error}</div>;

  return (
    <div className="list-group m-2">
      <h2>Borrow requests</h2>
      {bookRequests.length === 0 && <p className="text-muted">No pending borrow requests.</p>}
      {bookRequests.map((request) => (
        <div className="list-group-item m-2" key={`${request.userId}-${request.bookId}`}>
          <strong>Student:</strong> {request.userName}<br />
          <strong>Book:</strong> {request.bookTitle}<br />
          <strong>Requested:</strong> {new Date(request.requestedAt).toLocaleString()}
          <div className="d-flex gap-2 mt-2">
            <button onClick={() => updateRequest(request, true)} className="btn btn-outline-primary">Approve</button>
            <button onClick={() => updateRequest(request, false)} className="btn btn-outline-danger">Decline</button>
          </div>
        </div>
      ))}
    </div>
  );
}
