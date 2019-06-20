import {IS_LOGGING_IN, LOGIN_SUCCESS, LOGIN_ERROR} from '../actions'

const initialState = {
    isLoggingIn: false,
    errorMessage: ''
}

export const login = (state=initialState, {type, payload}) => {
    switch(type){
        case IS_LOGGING_IN:
            return {
                ...state,
                isLoggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false
            }
        case LOGIN_ERROR:
            return {
                ...state,
                errorMessage: payload
            }
        default:
            return{state}
    }
}