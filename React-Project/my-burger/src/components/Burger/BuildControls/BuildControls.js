import React from 'react'
import BuildControl from './BuildControl/BuildControl.js'
import buildControlsStyle from './BuildControls.module.css'

const controls = [
	{
		label: 'Cheese',
		type: 'cheese',
	}, {
		label: 'Patty',
		type: 'patty',
	}, {
		label: 'Salad',
		type: 'salad',
	}, {
		label: 'Bacon',
		type: 'bacon',
	},
]
const buildControls = props => (<div className={buildControlsStyle.BuildControls}>
	{controls.map(arrEle => (<BuildControl key={arrEle.label} Label={arrEle.label}/>))}
</div>);

export default buildControls
