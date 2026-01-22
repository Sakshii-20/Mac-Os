import React, { useEffect, useState } from 'react';

const DateTime = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      };

      setTime(
        now.toLocaleString('en-US', options).replace(',', '')
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); 

    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
};

export default DateTime;
