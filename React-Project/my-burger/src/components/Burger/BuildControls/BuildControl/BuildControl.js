import React from 'react'
import buildControlStyle from './BuildControl.module.css'

const buildControl = props => (<div className={buildControlStyle.BuildControl}>
	<div className={buildControlStyle.Label}>{props.Label}</div>
	<button className={buildControlStyle.Less}>Less</button>
	<button className={buildControlStyle.More}>More</button>
</div>)

export default buildControl;
