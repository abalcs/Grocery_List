import React, { useState, useEffect } from 'react';

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
    }, []);

    function deleteGrocery(event, job, i) {
        fetch('/api/groceries', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: groceries.id
            })
        }).then(res => {
            groceries.splice(i, 1);
            setGroceries([...groceries]);

            if (!groceries.length) {
                setHasGroceries(false);
            }
        });
    }

    return (
        <div className='groceryContainer'>
            <ul>
                {groceries.length ? (
                    groceries.map((grocery, i) => {
                        return (
                            <li key={i}>
                                {grocery.item}<button onClick={deleteGrocery}>Delete</button>
                            </li>
                        )
                    })
                ) : hasGroceries ? <p>Loading...</p> : <p>No groceries currently saved.</p>}
            </ul>
        </div>
    );
};

export default GroceryList;
 

