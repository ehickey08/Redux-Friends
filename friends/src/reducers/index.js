import {combineReducers} from "redux"

import {friendManagement} from "./friendManagement"
import {login} from "./login"

export default combineReducers({
    login,
    friendManagement
})