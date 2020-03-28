import React from 'react'
import Aux from './../../hoc/auxiliary.js'
import Burger from './../../components/Burger/Burger.js'

class BurgerBuilder extends React.Component {
	render() {
		return (<Aux>
			<Burger/>
			<div>Build Controls</div>
		</Aux>)
	}
}

export default BurgerBuilder;
