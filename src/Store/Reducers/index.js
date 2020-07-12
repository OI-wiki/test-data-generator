import { combineReducers } from 'redux'
import stringReducer from './String'
import navBarReducer from './NavBarReducer'

export default combineReducers({
    navBarReducer,
    stringReducer
})