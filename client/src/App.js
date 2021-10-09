import React, { useState } from 'react';
import FormContainer from './components/FormContainer';
import GroceryList from './components/GroceryList';
import Header from './components/Header';

const App = () => {
    const [items, setItems] = useState([]);
   
    function inputCallback(event) {
        setItems(event.target.value);
    }

    return (
        <>
        <div className='appBody'>
            <Header />
            <FormContainer items={items} setItems={setItems} inputCallback={inputCallback} / >
            <GroceryList />
        </div> 
        </>
    )
}

export default App;