import React from 'react';
import modalStyles from './modal.module.css';
import Backdrop from './../backdrop/backdrop.js'
import Aux from '../../hoc/auxiliary/auxiliary'

class modal extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		console.log("[modal] nextProps.ordered = " + nextProps.ordered)
		console.log("[modal] this.props.ordered = " + this.props.ordered)
		return nextProps.ordered !== this.props.ordered;
	}

	render() {
		return (
			<Aux>
				<Backdrop show={this.props.ordered} disappear={this.props.modalClose} />
				<div className={modalStyles.Modal} style={{
					transform: this.props.ordered
						? 'translateY(0)'
						: 'translateY(-100vh)',
					opacity: this.props.ordered
						? '1'
						: '0',
				}}>{this.props.children}</div>
			</Aux>
		);
	}
}

export default modal;
