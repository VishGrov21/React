import React from 'react'
import ingredientStyle from './BurgerIngredient.module.css'
import PropTypes from 'prop-types'

const burgerIngredient = props => {
	let ingredient = null;
	switch (props.type) {
		case('bread-top'):
			ingredient = (<div className={ingredientStyle.BreadTop}>
				<div className={ingredientStyle.Seeds1}></div>
				<div className={ingredientStyle.Seeds2}></div>
			</div>);
			break
		case('bread-bottom'):
			ingredient = <div className={ingredientStyle.BreadBottom}></div>;
			break;
		case('patty'):
			ingredient = <div className={ingredientStyle.Patty}></div>;
			break;
		case('salad'):
			ingredient = <div className={ingredientStyle.Salad}></div>;
			break;
		case('bacon'):
			ingredient = <div className={ingredientStyle.Bacon}></div>;
			break;
		case('cheese'):
			ingredient = <div className={ingredientStyle.Cheese}></div>;
			break;
		default:
			ingredient = null;
	}
	return ingredient;
}

burgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
}
export default burgerIngredient;
