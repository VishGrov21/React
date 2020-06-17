import * as actionTypes from '../actions/actionTypes'

const initialState = {
    tokenId: null,
    userId: null,
    errorMessage: '',
    loading: false,
}

function authStart(state, action) {
    return {
        ...state,
        loading: true,
    }
}

function authSuccess(state, action) {
    return {
        ...state,
        loading: false,
        errorMessage: null,
        tokenId: action.tokenId,
        userId: action.userId
    }
}

function authFailure(state, action) {
    return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage,
    }
}

function authLogout(state, action) {
    return {
        ...state,
        tokenId: null,
        userId: null,
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAILURE: return authFailure(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default: return state;
    }
}

export default authReducer;