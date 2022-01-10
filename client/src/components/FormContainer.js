import React from 'react';

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
        <div className='d-flex justify-content-center p-3'>
            <form className='d-flex flex-column justify-content-center align-items-center inputForm pt-4' onSubmit={createGrocery}> 
                <input className='input' onChange={props.inputCallback} value={props.items} type="text" name="item" placeholder='  What do you need ?'></input><br></br>
                <button className='p-2 text-light bg-primary submitBtn'>ADD TO LIST</button>
            </form>
        </div>
    )

}

export default FormContainer;

