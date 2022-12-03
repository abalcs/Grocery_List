import React, { useEffect, useState } from 'react';
import FormContainer from './components/FormContainer';
import GroceryList from './components/GroceryList';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    const [items, setItems] = useState([]);
   
    function inputCallback(event) {
        setItems(event.target.value);
    }

    return (
        <>
            <Header />
            <FormContainer items={items} setItems={setItems} inputCallback={inputCallback} />
            {!items.length && <GroceryList />}
            {!!items.length && <GroceryList />}
            <Footer />
        </>
    )
};

export default App;