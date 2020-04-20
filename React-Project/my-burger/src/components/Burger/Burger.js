import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js'
import burgerStyle from './Burger.module.css'

const burger = (props) => {

	let propsIngredients = Object.keys(props.ingredients).map(ingredientsKey => {
		return [...Array(props.ingredients[ingredientsKey])].map((_, i) => {
			return <BurgerIngredient type={ingredientsKey} key={ingredientsKey + "-" + i} />
		})
	}).reduce((accumulator, currentValue) => {
		return accumulator.concat(currentValue)
	}, [])

	if (propsIngredients.length === 0) {
		propsIngredients = <p>Please Add Some Ingredients</p>
	}

	return (
		<div className={burgerStyle.Burger}>
			<BurgerIngredient type='bread-top' />
			{propsIngredients}
			<BurgerIngredient type='bread-bottom' />
		</div>)
}
export default burger;
