import React from 'react'
import { connect } from 'react-redux';

import Aux from '../../hoc/auxiliary/auxiliary'
import Burger from './../../components/Burger/Burger.js'
import Modal from './../../ui/modal/modal.js'
import OrderSummary from './../../components/orderSummary/orderSummary.js'
import BuildControls from './../../components/Burger/BuildControls/BuildControls.js'
import axios from '../../axios-orders'
import Spinner from '../../ui/spinner/spinner'
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';
import * as burgerBuilderActions from '../../store/actions/index'

class BurgerBuilder extends React.Component {
	state = {
		purchase: false,
		loading: false,
	}

	updatepurchasable = (ingredients) => {
		const sum = Object.keys(ingredients).map(
			igkey => ingredients[igkey])
			.reduce((accumulator, currentValue) => {
				return accumulator += currentValue;
			}, 0)
		return sum > 0;
	}

	updatePucrhase = () => {
		this.setState({ purchase: true })
	}

	cancelPurchase = () => {
		this.setState({ purchase: false })
	}

	continuePurchaseHandler = () => {
		this.props.history.push({
			pathname: "/checkout",
		})
		console.log("this.props.history", this.props.history)
	}

	componentDidMount() {
		this.props.setIngredientHandler();
	}

	render() {

		const disabledInfo = {
			...this.props.ingredients
		}
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		let burger = this.props.error ? <p>Failed to load the Ingredients</p> : <Spinner />
		let orderSummary = null
		if (this.props.ingredients) {
			burger = <Aux>
				<Burger ingredients={this.props.ingredients} />
				<BuildControls
					ingredientAdded={this.props.addedIngredientHandler}
					ingredientRemoved={this.props.removeIngredientHandler}
					btnDisabled={disabledInfo}
					price={this.props.totalPrice}
					purchasable={this.updatepurchasable(this.props.ingredients)}
					ordered={this.updatePucrhase}
				/>
			</Aux>
			orderSummary = <OrderSummary
				ingredients={this.props.ingredients}
				modalClose={this.cancelPurchase}
				continueHanlder={this.continuePurchaseHandler}
				price={this.props.totalPrice} />

			if (this.state.loading) {
				orderSummary = <Spinner />
				console.log(" Iniside state.loading ")
			}
		}

		return (
			<Aux>
				<Modal
					ordered={this.state.purchase}
					modalClose={this.cancelPurchase}>
					{orderSummary}
				</Modal>
				{burger}
			</Aux>
		)
	}
}
const mapStateToProps = state => {
	return {
		ingredients: state.burgerBuilderReducer.ingredient,
		totalPrice: state.burgerBuilderReducer.price,
		error: state.burgerBuilderReducer.error,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addedIngredientHandler: ingredientName => dispatch(burgerBuilderActions.addIngredient(ingredientName)),
		removeIngredientHandler: ingredientName => dispatch(burgerBuilderActions.removeIngredient(ingredientName)),
		setIngredientHandler: () => dispatch(burgerBuilderActions.loadIngredients())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
