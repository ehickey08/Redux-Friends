import axiosWithAuth from '../utils/axiosWithAuth'

export const UPDATE_FRIEND = "UPDATE_FRIEND"
export const UPDATING_FRIENDS = "UPDATING_FRIENDS"
export const UPDATE_ERROR = "UPDATE_ERROR"

export const ADD_FRIEND = "ADD_FRIEND"
export const ADDING_FRIEND = "ADDING_FRIEND"
export const ADD_ERROR = "ADD_ERROR"

export const DELETE_FRIEND = "DELETE_FRIEND"
export const DELETING_FRIEND = "DELETING_FRIEND"
export const DELETE_ERROR = "DELETE_ERROR"

export const GET_FRIENDS = "GET_FRIENDS"
export const GETTING_FRIENDS = "GETTING_FRIENDS"
export const GET_ERROR = "GET_ERROR"



export const getFriends = () => dispatch => {
    dispatch({type: GETTING_FRIENDS})
    axiosWithAuth().get("/friends")
        .then(res=> {
            dispatch({type: GET_FRIENDS, payload: res.data})
        })
        .catch(err => {
            dispatch({type:GET_ERROR, payload: err})
        })
}

export const deleteFriend = (id) => dispatch => {
    dispatch({type: DELETING_FRIEND})
    axiosWithAuth().delete(`/friends/${id}`)
        .then(res=> {
            dispatch({type: DELETE_FRIEND, payload: res.data})
        })
        .catch(err => {
            dispatch({type:DELETE_ERROR, payload: err})
        })
}

export const addFriend = (friend) => dispatch => {
    dispatch({type: ADDING_FRIEND})
    axiosWithAuth().post("/friends", friend)
        .then(res=> {
            dispatch({type: ADD_FRIEND, payload: res.data})
        })
        .catch(err => {
            dispatch({type:ADD_ERROR, payload: err})
        })
}

export const updateFriend = (friend) => dispatch => {
    dispatch({type: UPDATING_FRIENDS})
    axiosWithAuth().put(`/friends/${friend.id}`, friend)
        .then(res=> {
            dispatch({type: UPDATE_FRIEND, payload: res.data})
        })
        .catch(err => {
            dispatch({type:UPDATE_ERROR, payload: err})
        })
}