import React from 'react';

// const newItem = document.getElementById('groceryInput')



const GroceryList = () => {
    return (
        <div className='groceryForm'>
            <form>
                <label htmlFor='groceries'>Enter Item</label><br></br>
                <input type='text' id='groceryInput' placeholder='Peanut Butter'></input><br></br>
                <button type='submit' id='submitButton' className='submitButton'>Add Item</button>
            </form>

            <ul className='groceryList'>
                <li>Peanut Butter<button id='editButton' className='editButton'>Edit</button><button id='deleteButton' className='deleteButton'>Delete</button></li>
            </ul>
            
        </div>
    );
}

export default GroceryList;