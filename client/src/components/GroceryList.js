import React, { useEffect } from 'react';



function GroceryList(props) {
    
        useEffect(() => {
        fetch('/api/groceries')
        .then((res) => {
            return res.json();
        })
            .then((data) => {
                
                // data.forEach((obj) => obj.edit = false);
                console.log(data)
                // data.map()
                // props.setGroceries(data);
                
                // if (!data.length) {
                //     props.setHasGroceries(false);
                // }
            });
    }, []);

    return (
        <div className='groceryContainer'>
            <ul className='groceryList'>
                <li>{props.groceries.item}</li>
            </ul>
        </div>
    );
}


export default GroceryList;

// function GroceryList(props) {
    // const [groceries, setGroceries] = useState([]);
    // const [hasGroceries, setHasGroceries] = useState(true);



//     function deleteGrocery(event, job, i) {
//         fetch('/api/groceries', {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 _id: grocery.id
//             })
//         }).then(res => {
//             grocery.splice(i, 1);
//             setGrocery([...grocery]);

//             if (!grocery.length) {
//                 setHasGroceries(false);
//             }
//         });
//     }
