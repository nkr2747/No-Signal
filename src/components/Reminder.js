import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Reminder() {
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReminders();
  }, []);

  const fetchReminders = async () => {
    try {
      const response = await axios.get('/user/reminders', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setReminders(response.data.reminders);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch reminders');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="list-group m-2">
      {reminders.map((reminder, index) => (
        <div className="list-group-item m-2" key={index}>
          {reminder.message}
        </div>
      ))}
    </div>
  );
}
