import React from 'react';
import modalStyles from './modal.module.css';
import Backdrop from './../backdrop/backdrop.js'
import Aux from './../../hoc/auxiliary.js'

const modal = (props) => <Aux>
	<Backdrop show={props.ordered} disappear={props.modalClose}/>
	<div className={modalStyles.Modal} style={{
			transform: props.ordered
				? 'translateY(0)'
				: 'translateY(-100vh)',
			opacity: props.ordered
				? '1'
				: '0',
		}}>{props.children}</div>
</Aux>;

export default modal;
