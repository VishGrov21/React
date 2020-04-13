import React from 'react';
import Aux from './../../hoc/auxiliary.js'
import Button from '../../ui/button/button'

const orderSummary = (props) => {
	const ingredients = Object.keys(props.ingredients).map(igkey => {
		return <li key={igkey}>
			<span style={{
				textTransform: 'capitalize'
			}}>{igkey}</span>: {props.ingredients[igkey]}</li>
	});

	return <Aux>
		<h3>
			Your Order Summary:
		</h3>
		<ul>{ingredients}</ul>
		<p>Continue to Checkout?</p>
		<p>
			<strong>Current Price: {props.price.toFixed(2)}</strong>
		</p>
		<Button clicked={props.modalClose} btnType="Danger">Cancel</Button>
		<Button btnType="Success">Continue</Button>

	</Aux>
}

export default orderSummary;
