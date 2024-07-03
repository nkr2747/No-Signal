import React, { useState, useEffect } from 'react';
import vec1 from "../images/Vector.svg"
import vec2 from "../images/Time.svg"
const DateTimeDisplay = () => {
    const [dateTime, setDateTime] = useState('');
    const [time, setTime] = useState('');
    
  const updateDateTime = () => {
    const now1 = new Date();
    const options1 = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    const now2 = new Date();
    const options2 = {
      hour: '2-digit',
      minute: '2-digit',
    };
    const dateString = now1.toLocaleDateString('en-GB', options1).replace('/','-');
    setDateTime(`${dateString.replace('/','-')}`);
    const timeString = now2.toLocaleTimeString('en-GB', options2);
    setTime(`${timeString}`);
  };

  useEffect(() => {
    // Update date and time immediately
    updateDateTime();
    // Update date and time every second
    const intervalId = setInterval(updateDateTime, 1000);
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container " >
      <div className=" rounded-pill border d-flex flex-row justify-content-around" style={{
        backgroundColor: 'white',
        minHeight: '40px'
      }
      }>
        <div className="flex-row py-2 ">
            <img src={vec2} className='px-1' alt=".." />
          {time}
        </div>
        <div className="flex-row py-2">
            <img src={vec1} className='px-1' alt=".." />
          {dateTime}
        </div>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
