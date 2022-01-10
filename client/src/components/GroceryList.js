import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'

function GroceryList() {
    const [groceries, setGroceries] = useState([]);
    const [hasGroceries, setHasGroceries] = useState(true);

    useEffect(() => {
        fetch('/api/groceries')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            data.forEach((obj) => obj.edit = false);
            setGroceries(data);

            if(!data.length) {
                setHasGroceries(false);
            }
        })  
    }, [groceries]);

    function deleteGrocery(event, grocery, i) {
        fetch('/api/groceries', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: grocery._id
            })
        }).then(res => {
            groceries.splice(i, 1);
            setGroceries([...groceries]);

            if (!groceries.length) {
                setHasGroceries(false);
            }
        });
    }

    function showEditGroceryInput(event, grocery, i) {
        grocery.edit = true;
        setGroceries([...groceries]);
    }

    function editGrocery(event, grocery, i) {
        grocery.item = event.target.value;
        setGroceries([...groceries]);
    }

    function closeEdit(event, grocery) {
        if(event.keyCode === 13) {
            grocery.edit = false;
            setGroceries([...groceries])
        }

        //update the put req. to console.log the error

        fetch('/api/groceries', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: grocery._id
            })
        }).then(() => {
            setGroceries([...groceries]);
        })
    }

    // F45F02 comp color hex

    return (
        <section className='d-flex justify-content-center'>
            <ul>
                {groceries.length ? (
                    groceries.map((grocery, i) => {
                        return (
                                <Card className='mt-3 bg-dark card' style={{width: '14rem'}} key={i}>
                                    <Card.Text className='text-center bg-dark text-light p-1 grocery'>
                                        {grocery.edit ? <input onKeyUp={((event) => closeEdit(event, grocery))} onChange={(event) => editGrocery(event, grocery, i)} value={grocery.item} type='text' /> : grocery.item}
                                    </Card.Text>
                                    
                                    <div className='d-flex justify-content-center btnContainer'>
                                        <button className='editBtn bg-warning text-dark' onClick={(event) => showEditGroceryInput(event, grocery, i)}>EDIT</button> 
                                        <button className='deleteBtn bg-danger text-light' onClick={(event) => deleteGrocery(event, grocery, i)}>REMOVE</button> 
                                    </div>
                                </Card>
                        )
                    })
                ) : hasGroceries ? <p>Loading...</p> : <Spinner animation='border' role='status'></Spinner>}
            </ul>
        </section>
    );
};

export default GroceryList;
 

