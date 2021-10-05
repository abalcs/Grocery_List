import React, { useState } from 'react';
import FormContainer from './components/FormContainer';
import GroceryList from './components/GroceryList';
import Header from './components/Header';

const App = () => {
    const [groceries, setGroceries] = useState([]);
    // const [item, setItem] = useState('')
    const [setGrocery, setHasGroceries] = useState(false);

    // function showList() {

    //     if (!showGroceries) {
    //         fetch('/api/groceries')
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             setGroceries(data);
    //         });
    //     }

    //     setShowGroceries(!showGroceries);
    // }

    function inputCallback(event) {
        setGroceries(event.target.value);
    }

    return (
        <>
            <Header />
            <FormContainer groceries={groceries} setGroceries={setGroceries} inputCallback={inputCallback} / >
            <GroceryList groceries={groceries} setGroceries={setGroceries} setGrocery={setGrocery} setHasGroceries={setHasGroceries}/>
        </>
    )
}

export default App;