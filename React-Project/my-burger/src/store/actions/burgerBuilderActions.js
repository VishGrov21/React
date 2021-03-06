import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const addIngredient = ingredientName => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingredientName,
    }
};
export const removeIngredient = ingredientName => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingredientName,
    }
};
function setIngredients(ingredients) {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients,
    }
}
function fetchIngredientsFailed() {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
    }
}
export const loadIngredients = () => {
    return dispatch => {
        axios.get('ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data))
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed())
            })

    }
}