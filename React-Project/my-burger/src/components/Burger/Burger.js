import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js'
import burgerStyle from './Burger.module.css'

const burger = (props) => {
	return (<div className={burgerStyle.Burger}>
		<BurgerIngredient type='bread-top'/>
		<BurgerIngredient type='patty'/>
		<BurgerIngredient type='cheese'/>
		<BurgerIngredient type='salad'/>
		<BurgerIngredient type='bacon'/>
		<BurgerIngredient type='bread-bottom'/>

	</div>)
}
export default burger;
