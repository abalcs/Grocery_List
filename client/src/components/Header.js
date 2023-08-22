import React, {useEffect, useState} from 'react';
import DayJS from 'react-dayjs';

const Header = () => {

  let [itemCount, setItemCount] = useState([]);

  useEffect(() => {
    fetch('/api/groceries')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
      setItemCount(data)
    })
  }, [itemCount]);

  let now = new Date()
  
  return (
    <header className='d-flex flex-column align-items-center p-3 bg-primary text-light'>
        <div className='text-center'>
          <h1 x>LIST MANAGER</h1>
        </div>
        
        <p className='dayJS date'><DayJS format='dddd MMMM D, YYYY'>{now}</DayJS></p>
        <p className='dayJS time'>Current Time: <DayJS className='dayJS' format='h:mm a'>{now}</DayJS></p>
        
        <div className='d-flex'>
        <button className='mx-2 p-2'>GROCERIES: {itemCount.length}</button>
        <button className='mx-2 p-2'>TARGET</button>
        <button className='mx-2 p-2'>GENERAL</button>
        </div>
        

        <div className='countContainer d-flex'>
          <div className='line mt-auto mb-auto'></div>
            <p className='itemCount pt-3 text-center w-50'>Item Count: <span className='text-warning'>{itemCount.length}</span></p>
          <div className='line mt-auto mb-auto'></div>
        </div>
    </header>
  );
}

export default Header;
