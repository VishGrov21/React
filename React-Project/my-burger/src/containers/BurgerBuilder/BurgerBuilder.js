import React from 'react'
import Aux from '../../hoc/auxiliary/auxiliary'
import Burger from './../../components/Burger/Burger.js'
import Modal from './../../ui/modal/modal.js'
import OrderSummary from './../../components/orderSummary/orderSummary.js'
import BuildControls from './../../components/Burger/BuildControls/BuildControls.js'
import axios from '../../axios-orders'
import Spinner from '../../ui/spinner/spinner'
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICE = {
	cheese: 20,
	patty: 30,
	salad: 10,
	bacon: 35,
};

class BurgerBuilder extends React.Component {
	state = {
		ingredients: null,
		totalPrice: 30,
		purchasable: false,
		purchase: false,
		loading: false,
		error: false,
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

	continuePurchaseHandler = () => {
		this.setState({ loading: true })
		const orderDetails = {
			ingredient: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: ' Name of the Customer',
				address: {
					street: ' Street where customer lives',
					zipcode: ' Zipcode of the customer',
					country: ' India',
				},
				email: 'abc@xyz.com',
				deliveryMethod: 'fastest'
			}
		}

		axios.post('/orders.json', orderDetails)
			.then(response => {
				this.setState({ loading: false, purchase: false });
			})
			.catch(error => this.setState({ loading: false, purchase: false }))
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
	componentDidMount() {
		axios.get('ingredients.json')
			.then(response => {
				this.setState({ ingredients: response.data })
			})
			.catch(error => {
				this.setState({ error: error })
			})
	}

	render() {

		const disabledInfo = {
			...this.state.ingredients
		}
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		let burger = this.state.error ? <p>Failed to load the Ingredients</p> : <Spinner />
		let orderSummary = null
		if (this.state.ingredients) {
			burger = <Aux>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					btnDisabled={disabledInfo}
					price={this.state.totalPrice}
					purchasable={this.state.purchasable}
					ordered={this.updatePucrhase}
				/>
			</Aux>
			orderSummary = <OrderSummary
				ingredients={this.state.ingredients}
				modalClose={this.cancelPurchase}
				continueHanlder={this.continuePurchaseHandler}
				price={this.state.totalPrice} />

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

export default withErrorHandler(BurgerBuilder, axios);
