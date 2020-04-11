import React from 'react'
import backdropStyle from './backdrop.module.css'

const backdrop = props => (
	props.show
		? <div className={backdropStyle.Backdrop} onClick={props.disappear}></div>
		: null
);

export default backdrop;
