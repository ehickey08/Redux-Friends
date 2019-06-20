import {UPDATE_FRIEND,
    UPDATING_FRIENDS,
    UPDATE_ERROR,
    ADD_FRIEND,
    ADDING_FRIEND,
    ADD_ERROR,
    DELETE_FRIEND,
    DELETING_FRIEND,
    DELETE_ERROR,
    GET_FRIENDS,
    GETTING_FRIENDS,
    GET_ERROR} from '../actions'

const initialState = {
    friends: [],
    isDeleting: false,
    isGetting: false,
    isAdding: false,
    isUpdating: false,
    errorMessage: ''
}

export const friendManagement = (state=initialState, {type, payload}) => {
    switch(type){
        case UPDATE_FRIEND:
            return {
                ...state,
                friends: payload,
                isUpdating: false
            }
        case UPDATING_FRIENDS:
            return {
                ...state,
                errorMessage: '',
                isUpdating: true
            }
        case UPDATE_ERROR:
            return {
                ...state,
                errorMessage: payload
            }
        case ADD_FRIEND:
            return {
                ...state,
                friends: payload,
                isAdding: false
            }
        case ADDING_FRIEND:
            return {
                ...state,
                errorMessage: '',
                isAdding: true,
            }
        case ADD_ERROR:
            return {
                ...state,
                errorMessage: payload
            }
        case DELETE_FRIEND:
            return {
                ...state,
                isDeleting: false,
                friends: payload
            }
        case DELETING_FRIEND:
            return {
                ...state,
                errorMessage: '',
                isDeleting: true
            }
        case DELETE_ERROR:
            return {
                ...state,
                errorMessage: payload
            }
        case GET_FRIENDS:
            return {
                ...state,
                isGetting: false,
                friends: payload
            }
        case GETTING_FRIENDS:
            return {
                ...state,
                errorMessage: '',
                isGetting: true
            }
        case GET_ERROR:
            return {
                ...state,
                errorMessage: payload
            }
        default:
            return{state}
    }
}