import * as actionTypes from '../actions/actionTypes';
const INGREDIENT_PRICE = {
    cheese: 20,
    patty: 30,
    salad: 10,
    bacon: 35,
};
const initialState = {
    ingredient: null,
    price: 30,
    error: false,
    buildingBurger: false,
};
const burgerBuilderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredient: {
                    ...state.ingredient,
                    [action.ingredientName]: state.ingredient[action.ingredientName] + 1,
                },
                price: state.price + INGREDIENT_PRICE[action.ingredientName]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredient: {
                    ...state.ingredient,
                    [action.ingredientName]: state.ingredient[action.ingredientName] - 1,
                },
                price: state.price - INGREDIENT_PRICE[action.ingredientName]
            }
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredient: action.ingredients,
                price: 30,
                error: false,
            }
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true,
            }
        default:
            return state;
    }
}
export default burgerBuilderReducer;