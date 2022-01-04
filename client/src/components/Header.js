import React from 'react';
import DayJS from 'react-dayjs';

const Header = () => {

  let now = new Date()
  
  return (
    <>
    <header>
        <h1>FAMILY GROCERY LIST</h1>
        <span className='dayJS'><DayJS format='dddd MMMM D, YYYY'>{now}</DayJS></span>
        <p className='dayJS'>Current Time: <DayJS className='dayJS' format='h:mm a'>{now}</DayJS></p>
    </header>
    </>
  );
}

export default Header;
