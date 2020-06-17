import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

function purchaseBurgerStart() {
    return {
        type: actionTypes.ORDER_PURCHASE_START,
    }
}
function orderPurchaseSuccess(orderId, orderData) {
    return {
        type: actionTypes.ORDER_PURCHASE_SUCCESS,
        id: orderId,
        orderData: orderData,
    }
}
function orderPurchaseFailure(responseError) {
    return {
        type: actionTypes.ORDER_PURCHASE_FAILURE,
        responseError: responseError,
    }
}
export const purchaseBurger = (orderData, history, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart())
        axios.post('/orders.json?auth=' + token, orderData)
            .then(response => {
                dispatch(orderPurchaseSuccess(response.data.name, orderData))
                history.push("/")
            })
            .catch(error => {
                dispatch(orderPurchaseFailure(error))
            })
    }
}
function fetchOrdersStart() {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}
function fetchOrdersSuccess(orderArray) {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orderArray: orderArray
    }
}
function fetchOrdersFailure(responseError) {
    return {
        type: actionTypes.FETCH_ORDERS_FAILURE,
        responseError: responseError
    }
}
export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart())
        let orderFetched = [];
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalto="' + userId + '"'
        axios.get('/orders.json' + queryParams)
            .then(response => {
                for (let key in response.data) {
                    orderFetched.push({
                        ...response.data[key],
                        id: key
                    })
                }
                dispatch(fetchOrdersSuccess(orderFetched))
            })
            .catch(error => {
                dispatch(fetchOrdersFailure(error))
            })
    }
}