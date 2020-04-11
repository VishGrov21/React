import React from 'react';
import Aux from './../../hoc/auxiliary.js'

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
	</Aux>
}

export default orderSummary;
