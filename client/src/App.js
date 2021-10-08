import React, { useState } from 'react';
import FormContainer from './components/FormContainer';
import GroceryList from './components/GroceryList';
import Header from './components/Header';

const App = () => {
    const [items, setItems] = useState([]);
    // const [setGrocery, setHasGroceries] = useState(true);

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
        setItems(event.target.value);
    }

    return (
        <>
            <Header />
            <FormContainer items={items} setItems={setItems} inputCallback={inputCallback} / >
            <GroceryList />
        </>
    )
}

export default App;