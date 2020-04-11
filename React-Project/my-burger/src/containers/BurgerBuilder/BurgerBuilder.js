import React from 'react'
import Aux from './../../hoc/auxiliary.js'
import Burger from './../../components/Burger/Burger.js'
import Modal from './../../ui/modal/modal.js'
import OrderSummary from './../../components/orderSummary/orderSummary.js'
import BuildControls from './../../components/Burger/BuildControls/BuildControls.js'

const INGREDIENT_PRICE = {
	cheese: 20,
	patty: 30,
	salad: 10,
	bacon: 35,
};

class BurgerBuilder extends React.Component {
	state = {
		ingredients: {
			cheese: 0,
			patty: 0,
			salad: 0,
			bacon: 0,
		},
		totalPrice: 30,
		purchasable: false,
		purchase: false,
	}

	updatepurchasable = (ingredients) => {
		const sum = Object.keys(ingredients).map(igkey => ingredients[igkey]).reduce((accumulator, currentValue) => {
			return accumulator += currentValue;
		}, 0)
		this.setState({
			purchasable: sum > 0
		})
	}

	updatePucrhase = () => {
		this.setState({ purchase: true })
	}

	cancelPurchase = () => {
		this.setState({ purchase: false })
	}
	addIngredientHandler = type => {
		let currentState = {
			...this.state.ingredients
		};
		const updatedIngredientCount = this.state.ingredients[type] + 1;
		currentState[type] = updatedIngredientCount;
		const updatedBurgerPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
		this.setState({ ingredients: currentState, totalPrice: updatedBurgerPrice })
		this.updatepurchasable(currentState);
	}

	removeIngredientHandler = type => {
		let currentState = {
			...this.state.ingredients
		};
		const updatedIngredientCount = this.state.ingredients[type] - 1;
		currentState[type] = updatedIngredientCount;
		const updatedBurgerPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
		this.setState({ ingredients: currentState, totalPrice: updatedBurgerPrice })
		this.updatepurchasable(currentState);
	}

	render() {

		const disabledInfo = {
			...this.state.ingredients
		}
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		return (
			<Aux>
				<Modal ordered={this.state.purchase} modalClose={this.cancelPurchase}><OrderSummary ingredients={this.state.ingredients} /></Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} btnDisabled={disabledInfo} price={this.state.totalPrice} purchasable={this.state.purchasable} ordered={this.updatePucrhase} />
			</Aux>
		)
	}
}

export default BurgerBuilder;
