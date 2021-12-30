import React, { useEffect } from 'react';
import DayJS from 'react-dayjs';

const Header = () => {
  
  let now

  useEffect(() => {
    now = new Date()
  })
  

  return (
    <header>
        <h1>FAMILY GROCERY LIST</h1>
        <p><DayJS className='dayJS' format='dddd MMMM D, YYYY'>{now}</DayJS></p>
        <p className='dayJS'>Current Time: <DayJS className='dayJS' format='h:mm a'>{now}</DayJS></p>
    </header>
  );
}

export default Header;
