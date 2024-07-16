import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminReturnRequests() {
  const [returnRequests, setReturnRequests] = useState([]);
  async function fetchReturnRequests() {
    try {
      const res = await axios.get('https://no-signal.onrender.com/admin/returnrequests');
      setReturnRequests(res.data.requests);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    
    fetchReturnRequests();
  }, []);

  const handleApproveReturn = async (userId, bookId) => {
    try {
      await axios.post('https://no-signal.onrender.com/admin/approvereturn', { userId, bookId });
      setReturnRequests(returnRequests.filter(request => !(request.userId === userId && request.bookId === bookId)));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Return Requests</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Book</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {returnRequests.map(request => (
            <tr key={`${request.userId}-${request.bookId}`}>
              <td>{request.userName}</td>
              <td>{request.bookTitle}</td>
              <td>
                <button onClick={() => handleApproveReturn(request.userId, request.bookId)}>Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
