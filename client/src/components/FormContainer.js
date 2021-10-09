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
        <main>
            <form onSubmit={createGrocery}> 
                <input onChange={props.inputCallback} value={props.items} type="text" name="item" placeholder='  What do you need ?'></input><br></br>
                <button className='submitBtn'>ADD TO LIST</button>
            </form>
        </main>
    )

}

export default FormContainer;

