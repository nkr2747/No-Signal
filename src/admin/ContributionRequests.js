import { API_URL } from "../config";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCover from "../components/BookCover";

export default function ContributionRequests() {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatingIds, setUpdatingIds] = useState([]);

  const fetchContributions = async () => {
    try {
      const response = await axios.get(`https://no-signal.onrender.com/admin/contributions`, { withCredentials: true });
      setContributions(response.data.contributions || []);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || "Unable to load book contributions.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchContributions(); }, []);

  const reviewContribution = async (contribution, approve) => {
    setUpdatingIds((ids) => [...ids, contribution.requestId]);
    try {
      if (approve) {
        await axios.post(
          `https://no-signal.onrender.com/admin/contributions/${contribution.requestId}/approve`,
          { bookId: contribution.bookId },
          { withCredentials: true }
        );
      } else {
        await axios.delete(`https://no-signal.onrender.com/admin/contributions/${contribution.requestId}`, { withCredentials: true });
      }
      await fetchContributions();
    } catch (err) {
      alert(err.response?.data?.error || "Unable to update this contribution.");
    } finally {
      setUpdatingIds((ids) => ids.filter((id) => id !== contribution.requestId));
    }
  };

  if (loading) return <div>Loading book contributions…</div>;
  if (error) return <div role="alert">{error}</div>;

  return (
    <div className="list-group m-2">
      <h2>Contribution requests</h2>
      {contributions.length === 0 && <p className="text-muted">No pending book contributions.</p>}
      {contributions.map((contribution) => {
        const isUpdating = updatingIds.includes(contribution.requestId);
        return (
          <div className="list-group-item m-2" key={contribution.requestId}>
            <strong>{contribution.title}</strong><br />
            <span className="text-secondary">{contribution.author}</span><br />
            <span className="text-muted">
              Submitted by {contribution.contributor?.name || "Student"}
              {contribution.department ? ` · ${contribution.department}` : ""}
              {` · ${contribution.count} cop${contribution.count === 1 ? "y" : "ies"}`}
              {contribution.existingBook
                ? ` · ${contribution.currentCount} currently in the catalogue`
                : contribution.samePendingTitle ? " · Another request for a pending title" : " · New title"}
            </span>
            <div className="my-2">
              <BookCover src={contribution.image_url} title={contribution.title} author={contribution.author}
                alt={`${contribution.title} cover`} style={{ height: "120px", maxWidth: "90px", objectFit: "cover" }} />
            </div>
            {contribution.description && <p className="mb-2">{contribution.description}</p>}
            <div className="d-flex flex-wrap gap-2 mt-2">
              <button type="button" onClick={() => reviewContribution(contribution, true)} className="btn btn-outline-primary" disabled={isUpdating}>
                {isUpdating ? "Updating…" : contribution.existingBook ? "Approve and increase count" : contribution.samePendingTitle ? "Approve copies for pending title" : "Approve and add book"}
              </button>
              <button type="button" onClick={() => reviewContribution(contribution, false)} className="btn btn-outline-danger" disabled={isUpdating}>
                Decline
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
