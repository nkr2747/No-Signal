import { API_URL } from "../config";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminReturnRequests() {
  const [returnRequests, setReturnRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReturnRequests = async () => {
    try {
      const res = await axios.get(`${API_URL}/admin/returnrequests`, { withCredentials: true });
      setReturnRequests(res.data.requests);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Unable to load return requests.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReturnRequests();
  }, []);

  const handleApproveReturn = async (userId, bookId) => {
    try {
      const response = await axios.post(
        `${API_URL}/admin/approvereturn`,
        { userId, bookId },
        { withCredentials: true }
      );
      if (response.status === 200) {
        alert("Return request approved successfully");
        fetchReturnRequests();
      }
    } catch (err) {
      alert(err.response?.data?.message || "Failed to approve return request");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="list-group m-2">
      <h2>Book return requests</h2>
      {returnRequests.length === 0 && <p className="text-muted">No pending return requests.</p>}
      {returnRequests.map((request) => (
        <div className="list-group-item m-2" key={`${request.userId}-${request.bookId}`}>
          <strong>Student Name:</strong> {request.userName}
          <br />
          <strong>Book Name:</strong> {request.bookTitle}
          <br />
          <strong>Requested At:</strong> {new Date(request.requestedAt).toLocaleString()}
          <br />
          <div className="d-flex gap-2">
            <button
              onClick={() => handleApproveReturn(request.userId, request.bookId)}
              className="btn btn-outline-primary"
            >
              Approve
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
