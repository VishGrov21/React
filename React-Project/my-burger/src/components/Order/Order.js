import React from 'react';
import Classes from './Order.module.css'
const Order = (props) => {
    const ingredients = []
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            quantity: props.ingredients[ingredientName]
        })
    }
    const ingredientOutput = ingredients.map(ingredient => {
        return <span key={ingredient.name}
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 10px',
                padding: '5px',
                border: ' 1px solid #ccc',
                boxSizing: 'border-box'
            }}>{ingredient.name} ({ingredient.quantity})</span>
    })
    return (

        <div className={Classes.Order}>
            <p>Ingredients:{ingredientOutput}</p>
            <p>Price:&#x20B9; {props.price}</p>
        </div>
    );
}

export default Order;