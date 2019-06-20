import axiosWithAuth from "../utils/axiosWithAuth"

export const IS_LOGGING_IN = "IS_LOGGING_IN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR = "LOGIN_ERROR"

export const attemptLogin = (creds) => dispatch => {
    dispatch ({type: IS_LOGGING_IN})
    return axiosWithAuth().post("/login", creds)
        .then(res => {
            localStorage.setItem("token", res.data.payload)
            dispatch({type: LOGIN_SUCCESS})
            return true
        })
        .catch(err => {
            console.log(err)
            dispatch({type: LOGIN_ERROR})
        })
}

