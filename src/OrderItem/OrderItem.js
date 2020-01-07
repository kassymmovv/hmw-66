import React from 'react';
import './OrderItem.css';

const OrderItem = props => {

    if (Math.random() > 0.7)throw  new Error('Something went wrong');

    const ingredients = props.ingredients && Object.keys(props.ingredients).map(igName => (
        <span key={igName}>{igName} ({props.ingredients[igName]})</span>
    ));

    return (
        <div className="OrderItem">
            <p>Ingredients: {ingredients}</p>
            <p>Price: <strong>{props.price}</strong></p>
        </div>
    );
};

export default OrderItem;