import { useState, useEffect } from 'react';

const MyDate=() =>{
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      const timeOptions = { hour: '2-digit', minute: '2-digit'};
      const formattedDate = now.toLocaleDateString(undefined, dateOptions);
      const formattedTime = now.toLocaleTimeString(undefined, timeOptions);
      setCurrentDateTime(`${formattedDate} ${formattedTime}`);
    };

    // Aggiorna la data e l'ora inizialmente e poi ogni secondo
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p className='mb-0'>{currentDateTime}</p>
    </div>
  );
}

export default MyDate;
