import React, { useEffect, useState } from 'react';
import FormContainer from './components/FormContainer';
import GroceryList from './components/GroceryList';
import Header from './components/Header';

const App = () => {
    const [groceries, setGroceries] = useState([]);
    const [item, setItem] = useState('')
    const [showGroceries, setShowGroceries] = useState(false);

    function showView() {

        if (!showGroceries) {
            fetch('/api/groceries')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setGroceries(data);
            });
        }

        setShowGroceries(!showGroceries);
    }

    function inputCallback(event) {
        setGroceries(event.target.value);
    }

    return (
        <>
            <Header />
            <FormContainer groceries={groceries} setGroceries={setGroceries} setItem={setItem} item={item} inputCallback={inputCallback} / >
            <GroceryList />
        </>
    )
}

export default App;