import { TimeDateWrapper } from './styles'
import { useState, useEffect } from 'react';


const TimeDate: React.FC = () => {
  const [timeDate, setTimeDate] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const refreshClock = () => {
    setTimeDate(new Date())
  }

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];

    const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

  return (
    <TimeDateWrapper>
      <h3>{`${days[timeDate.getDay()]} ${timeDate.getDate()}.  ${months[timeDate.getMonth()]} ${timeDate.getFullYear()}`}</h3>
      <h1>{timeDate.toLocaleTimeString('no-NO')}</h1>
    </TimeDateWrapper>
  );
};

export default TimeDate;
