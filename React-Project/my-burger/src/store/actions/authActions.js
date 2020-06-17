import * as actionTypes from './actionTypes'
import axios from 'axios'

function authStart() {
    return {
        type: actionTypes.AUTH_START,
    }
}

function authSuccess(authData) {
    return {
        type: actionTypes.AUTH_SUCCESS,
        tokenId: authData.idToken,
        userId: authData.localId,
    }
}

function authFailure(errorMessage) {
    return {
        type: actionTypes.AUTH_FAILURE,
        errorMessage: errorMessage,
    }
}

function checkAuthLogout(expirationTime) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const logout = () => {
    localStorage.setItem('token', null)
    localStorage.setItem('expirationDate', null)
    localStorage.setItem('userId', null)
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

export const authentication = (authData, isSignUp) => {
    return dispatch => {
        dispatch(authStart())
        const signUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.REACT_APP_KEY;
        const signInUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.REACT_APP_KEY;
        let url = isSignUp ? signUpUrl : signInUrl
        axios.post(url, authData)
            .then(response => {
                dispatch(authSuccess(response.data))
                localStorage.setItem('token', response.data.idToken)
                localStorage.setItem('expirationDate', new Date(new Date().getTime() + response.data.expiresIn * 1000))
                localStorage.setItem('userId', response.data.localId)
                dispatch(checkAuthLogout(response.data.expiresIn))
            })
            .catch(error => {
                dispatch(authFailure(error.response.data.error.message))
            })
    }
}

export const reloadAuthVerify = () => {
    return dispatch => {
        let token = localStorage.getItem('token')
        let expirationDate = localStorage.getItem('expirationDate')
        let userId = localStorage.getItem('userId')
        if ((token !== null) && new Date(expirationDate).getTime() > new Date().getTime()) {
            dispatch(authSuccess({ 'idToken': token, 'localId': userId }))
            dispatch(checkAuthLogout((new Date(expirationDate).getTime() - new Date().getTime()) / 1000))
        }
    }
}