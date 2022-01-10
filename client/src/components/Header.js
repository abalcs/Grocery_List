import React from 'react';
import DayJS from 'react-dayjs';

const Header = () => {

  let now = new Date()
  
  return (
    <header className='d-flex flex-column align-items-center p-3 bg-dark text-light'>
        <h1>TASKLIST MANAGER</h1>
        <p className='dayJS date'><DayJS format='dddd MMMM D, YYYY'>{now}</DayJS></p>
        <p className='dayJS time'>Current Time: <DayJS className='dayJS' format='h:mm a'>{now}</DayJS></p>
    </header>
  );
}

export default Header;
