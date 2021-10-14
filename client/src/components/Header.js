import React from 'react';
import DayJS from 'react-dayjs';

const Header = () => {
  
  let now = new Date()

  return (
    <header>
        <h1>Grocery List</h1>
        <p><DayJS format='dddd MMMM D, YYYY'>{now}</DayJS></p>
        <p>Current Time: <DayJS format='HH:mm:ss'>{now}</DayJS></p>
    </header>
  );
}

export default Header;
