import {IS_LOGGING_IN, LOGIN_SUCCESS, LOGIN_ERROR, LOGGED_OUT} from '../actions'

const initialState = {
    isLoggingIn: false,
    loggedIn: false,
    errorMessage: null
}

export const login = (state=initialState, {type, payload}) => {
    switch(type){
        case IS_LOGGING_IN:
            return {
                ...state,
                isLoggingIn: true,
                errorMessage:null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                isLoggingIn: false
            }
        case LOGIN_ERROR:
            return {
                ...state,
                errorMessage: payload
            }
        case LOGGED_OUT:
            return{
                ...state,
                loggedIn: false
            }
        default:
            return state
    }
}