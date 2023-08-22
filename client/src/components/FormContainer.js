import React from 'react';
import {AiOutlinePlusCircle} from 'react-icons/ai'

function FormContainer(props) {

    function createGrocery(event) {
        event.preventDefault();

        fetch('api/groceries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                item: props.items
            })
        }).then(() => {
            props.setItems([]);
        });
    }

    return (
        <div className='d-flex justify-content-center'>
            <form 
                className='d-flex flex-column justify-content-center align-items-center inputForm mt-4' 
                onSubmit={createGrocery}> 
                <input 
                    className='input bg-light text-secondary' 
                    style={{width: '250px', height: '35px', borderColor: 'blue'}}
                    onChange={props.inputCallback} 
                    value={props.items} type="text" 
                    name="item" 
                    placeholder='  What do you need ?'>
                </input><br></br>
                <button className='addItem'><AiOutlinePlusCircle color='green' size={60}/></button>
            </form>
        </div>
    )
}

export default FormContainer;

