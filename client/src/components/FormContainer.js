import React from 'react';


function FormContainer(props) {

    function createGrocery(event) {
        event.preventDefault();

        fetch('/api/groceries', {
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
        <div>
            <form onSubmit={createGrocery}> 
                <input onChange={props.inputCallback} value={props.items} type="text" name="item" placeholder='Type grocery item here'></input><br></br>
                <button>Submit</button>
            </form>
        </div>
    )

}

export default FormContainer;

