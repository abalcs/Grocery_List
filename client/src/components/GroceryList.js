import React, { useState, useEffect } from 'react';

function GroceryContainer(props) {
    const [grocery, setGrocery] = useState([]);
    const [hasGroceries, setHasGroceries] = useState(true);

    useEffect(() => {
        fetch('/api/groceries')
        .then((res) => {
            return res.json();
        })
            .then((data) => {
                data.forEach((obj) => obj.edit = false);

                setGrocery(data);

                if (!data.length) {
                    setHasGroceries(false);
                }
            });
    }, []);

    function deleteGrocery(event, job, i) {
        fetch('/api/groceries', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: grocery.id
            })
        }).then(res => {
            grocery.splice(i, 1);
            setGrocery([...grocery]);

            if (!grocery.length) {
                setHasGroceries(false);
            }
        });
    }

    

    function createGrocery(event) {
        event.preventDefault();

        fetch('/api/groceries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                grocery: props.grocery
            })
        }).then(() => {
            setGrocery([]);
        })
    }

    function inputCallback(event) {
        setGrocery(event.target.value);
    }

    



    return (
        <div className='groceryForm'>
            <form onSubmit={createGrocery}>
                <label htmlFor='groceries'>Enter Item</label><br></br>
                <input onChange={inputCallback} value={grocery.item} type='text' id='groceryInput' name='grocery' placeholder='Type your grocery item'></input><br></br>
                <button type='submit' id='submitButton' className='submitButton'>Add Item</button>
            </form>

            <ul className='groceryList'>{grocery.length ? (
                grocery.map((grocery, i) => {
                    return (
                        <li key={i}>{grocery.item}
                            <button id='editButton' className='editButton'>Edit</button>
                            <button onClick={(event) => deleteGrocery(event, grocery, i)} id='deleteButton' className='deleteButton'>Delete</button>
                        </li>
                    )
                })
            ) : hasGroceries ? <p>Wow much empty :(</p> : <p>No items entered yet...</p>}
                
            </ul>
            
        </div>
    );
}

export default GroceryContainer;