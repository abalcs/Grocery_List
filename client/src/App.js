import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FormContainer from './components/FormContainer';
import GroceryList from './components/GroceryList';
import Header from './components/Header';
import Footer from './components/Footer';
import TargetList from './components/TargetList';

const App = () => {
    const [items, setItems] = useState([]);
    const [targetItems, setTargetItems] = useState([]);

   
    function inputCallback(event) {
        setItems(event.target.value);
    }

    return (
        <>
        <Router>
            <Header />
            {/*<FormContainer items={items} setItems={setItems} inputCallback={inputCallback} />*/}
            <Routes>
                <Route path='/' element={!items.length && <GroceryList />} />
                <Route path='/' element={!!items.length && <GroceryList />} />

                <Route path='/target' element={!items.length && <TargetList />} />
                <Route path='/target' element={!!items.length && <TargetList />} />
            </Routes>
            <Footer />
        </Router>
        </>
    )
};

export default App;