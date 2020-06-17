import * as actionTypes from '../actions/actionTypes'

const initialState = {
    orders: [],
    loading: false,
    error: false,
}
function orderPurchaseStart(state, action) {
    return {
        ...state,
        loading: true,
    }
}
function orderPurchaseSuccess(state, action) {
    const newOrder = {
        ...action.orderData,
        id: action.id,
    }
    return {
        ...state,
        loading: false,
        error: false,
        orders: state.orders.concat(newOrder)
    }
}
function orderPurchaseFailure(state, action) {
    return {
        ...state,
        loading: false,
        error: true,
    }
}
function fetchOrdersStart(state, action) {
    return {
        ...state,
        loading: true,
    }
}
function fetchOrdersSuccess(state, action) {
    return {
        ...state,
        loading: false,
        error: false,
        orders: action.orderArray
    }
}
function fetchOrdersFailure(state, action) {
    return {
        ...state,
        loading: false,
        error: true,
    }
}
const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ORDER_PURCHASE_START: return orderPurchaseStart(state, action)
        case actionTypes.ORDER_PURCHASE_SUCCESS: return orderPurchaseSuccess(state, action)
        case actionTypes.ORDER_PURCHASE_FAILURE: return orderPurchaseFailure(state, action)
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action)
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action)
        case actionTypes.FETCH_ORDERS_FAILURE: return fetchOrdersFailure(state, action)
        default: return state;
    }
}

export default orderReducer;