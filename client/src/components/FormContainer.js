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
                item: props.groceries
            })
        }).then(() => {
            props.setGroceries([]);
        });
    }

    return (
        <div>
            <form onSubmit={createGrocery}> 
                <input onChange={props.inputCallback} value={props.groceries} type="text" name="item" placeholder='Type grocery item here'></input><br></br>
                <button>Submit</button>
            </form>
        </div>
    )

}

export default FormContainer;

