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

        fetch('/api/groceries', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: grocery._id
            })
        }).then(() => {

        })
    }

    return (
        <section    >
            <ul>
                {groceries.length ? (
                    groceries.map((grocery, i) => {
                        return (
                            <li key={i}>
                                {grocery.edit ? <input onKeyUp={((event) => closeEdit(event, grocery))} onChange={(event) => editGrocery(event, grocery, i)} value={grocery.item} type='text' /> : grocery.item}
                                <button className='deleteBtn' onClick={(event) => deleteGrocery(event, grocery, i)}>Remove</button>
                                <button className='editBtn' onClick={(event) => showEditGroceryInput(event, grocery, i)}>Edit</button>
                            </li>
                        )
                    })
                ) : hasGroceries ? <p>Loading...</p> : <p>No groceries currently saved.</p>}
            </ul>
        </section>
    );
};

export default GroceryList;
 

