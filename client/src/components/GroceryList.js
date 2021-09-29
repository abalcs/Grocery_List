import React from 'react';

// function GroceryContainer(props) {
//     const [grocery, setGrocery] = useState([]);
//     const [hasGroceries, setHasGroceries] = useState(true);

    // useEffect(() => {
    //     fetch('/api/groceries')
    //     .then((res) => {
    //         return res.json();
    //     })
    //         .then((data) => {
    //             data.forEach((obj) => obj.edit = false);

    //             setGrocery(data);

    //             if (!data.length) {
    //                 setHasGroceries(false);
    //             }
    //         });
    // }, []);

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


function GroceryList(props) {
    return (
        <div className='groceryContainer'>
            <ul className='groceryList'>{props.groceries.length ? (
                props.groceries.map((grocery, i) => {
                    return (
                        <li key={i}>{grocery}</li>
                    )
                })
            ) : <p>No items entered yet...</p>}
                
            </ul>
        </div>
    );
}

export default GroceryList;