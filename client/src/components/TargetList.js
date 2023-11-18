import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'

import { BsTrash, BsPencil } from 'react-icons/bs';
import FormContainer from './FormContainer';

function TargetList() {
    const [targetItems, setTargetItems] = useState([]);
    const [hasTargetItems, setHasTargetItems] = useState(true);

    const [items, setItems] = useState([]);

    function inputCallback(event) {
        setTargetItems(event.target.value);
    }

    const getAll = () => {
        fetch('/api/target') //need new api for target items
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            data.forEach((obj) => obj.edit = false);
            setTargetItems(data);

            if(!data.length) {
                setHasTargetItems(false);
            }
        })  
    };

    function deleteTargetItem(event, target, i) {
        fetch('/api/target', { //update w/ new api
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: target._id
            })
        }).then(res => {
            targetItems.splice(i, 1);
            setTargetItems([...targetItems]);

            if (!targetItems.length) {
                setHasTargetItems(false);
            }
        });
    }

    function showEditItemInput(event, item, i) {
        item.edit = true;
        setTargetItems([...targetItems]);
    }

    function editItem(event, item, i) {
        item.item = event.target.value;
        setTargetItems([...targetItems]);
    }

    function closeEdit(event, item) {
        if(event.keyCode === 13) {

        fetch('/api/target', { //update w/ new api
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: item._id,
                item: item.item
            })
        }).then(() => {
            setTargetItems([...targetItems]);
        }); 

        item.edit = false;
    }}

    useEffect(() => {
        getAll();
    }, []);

    return (
        <>
        <FormContainer items={items} setItems={setItems} inputCallback={inputCallback} />
        <section className='d-flex justify-content-center'>
            <ul>
                {targetItems ? (
                    targetItems.map((item, i) => {
                        return (
                                <div style={{maxWidth: '250px'}} className='d-flex justify-content-between align-items-center text-wrap' key={i}>           
                                    <div className='mt-3'>
                                        {item.edit ? <input onKeyDown={((event) => closeEdit(event, item))} onChange={(event) => editItem(event, item, i)} value={item.item} type='text' />
                                        : <p>{item.item}</p>}
                                    </div>
                                    
                                    <div className='d-flex justify-content-end' style={{width: '125px'}}>
                                        <BsPencil className='editBtn mx-3' color='orange' size='20px' onClick={(event) => showEditItemInput(event, item, i)}>EDIT</BsPencil> 
                                        <BsTrash className='deleteBtn' color='blue' size='20px' onClick={(event) => deleteTargetItem(event, item, i)}>REMOVE</BsTrash> 
                                    </div>
                                </div>
                            )
                        })
                    ): hasTargetItems ? 
                    <div className='d-flex flex-column align-items-center'>
                        <Spinner className='mt-4 mb-3' animation='border' role='status'></Spinner>
                        <p className='text-danger'>Retrieving List...</p>
                    </div> 
                : <p className='mt-3 text-primary'>waiting to add new items...</p>}
            </ul>
        </section>
        </>
    );
};

export default TargetList;