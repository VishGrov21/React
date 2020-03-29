import React from 'react'
import Aux from './../../hoc/auxiliary.js'
import Burger from './../../components/Burger/Burger.js'

class BurgerBuilder extends React.Component {
	state = {
		ingredients: {
			cheese: 0,
			patty: 1,
			salad: 0,
			bacon: 0,
		}
	}

	render() {
		return (<Aux>
			<Burger ingredients={this.state.ingredients}/>
			<div>Build Controls</div>
		</Aux>)
	}
}

export default BurgerBuilder;
