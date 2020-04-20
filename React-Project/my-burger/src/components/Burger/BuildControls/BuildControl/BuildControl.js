import React from 'react'
import buildControlStyle from './BuildControl.module.css'

const buildControl = props => (
	<div className={buildControlStyle.BuildControl}>
		<div className={buildControlStyle.Label}>{props.Label}</div>
		<button
			className={buildControlStyle.Less}
			onClick={props.less}
			disabled={props.btnDisabled}>
			Less
		</button>
		<button
			className={buildControlStyle.More}
			onClick={props.more}>
			More
		</button>
	</div>
)

export default buildControl;
