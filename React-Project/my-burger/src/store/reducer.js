import * as actionTypes from './actions';

const INGREDIENT_PRICE = {
    cheese: 20,
    patty: 30,
    salad: 10,
    bacon: 35,
};
const initialState = {
    ingredient: {
        cheese: 0,
        patty: 0,
        salad: 0,
        bacon: 0,
    },
    price: 30,
};
const reducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}

export default reducer;

