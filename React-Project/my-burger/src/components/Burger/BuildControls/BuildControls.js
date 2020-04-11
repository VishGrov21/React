import React from 'react'
import BuildControl from './BuildControl/BuildControl.js'
import buildControlsStyle from './BuildControls.module.css'

const controls = [
	{
		label: 'Cheese',
		type: 'cheese'
	}, {
		label: 'Patty',
		type: 'patty'
	}, {
		label: 'Salad',
		type: 'salad'
	}, {
		label: 'Bacon',
		type: 'bacon'
	},
]
const buildControls = props => (
	<div className={buildControlsStyle.BuildControls}>
		<p>
			<strong>Current Price: {props.price.toFixed(2)}</strong>
		</p>
		{controls.map(arrEle => (<BuildControl key={arrEle.label} Label={arrEle.label} more={() => props.ingredientAdded(arrEle.type)} less={() => props.ingredientRemoved(arrEle.type)} btnDisabled={props.btnDisabled[arrEle.type]}/>))}
		<button className={buildControlsStyle.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
	</div>
);

export default buildControls
