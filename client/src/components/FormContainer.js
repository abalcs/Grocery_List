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
                <button className='p-2 text-dark submitBtn'>ADD TO CART<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 5.829l6.171 6.171-6.171 6.171v-3.171h-13v-6h13v-3.171zm-2-4.829v6h-13v10h13v6l11-11-11-11z"/></svg></span><span><svg className='cartIcon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"/></svg></span></button>
            </form>
        </div>
    )

}

export default FormContainer;

