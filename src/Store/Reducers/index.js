// import { combineReducers } from 'redux'
// import string from './String'
// import navBar from './NavBar'

// export default combineReducers({
//     navBar,
//     string
// })

import { OPEN_DRAWER, CLOSE_DRAWER, UPDATE_CHARSET, UPDATE_DELIMITER, UPDATE_NUM_CHARS, 
    SET_DATATYPE, UPDATE_NUM_CASES, SET_OUTPUT, UPDATE_ALLOW_DUPLICATE, ALTER_ALL } from '../Actions/ActionTypes'

const initState = {
    open: false,
    dataType: 'String',
    chars: 'abcdefghijklmnopqrstuvwxyz',
    numChars: 0,
    delimiter: '',
    numCases: 0,
    allowDuplicate: true,
    output: ''
}

const reducer = (state=initState, action) => {
    switch (action.type) {
        case OPEN_DRAWER:
            return {
                ...state,
                open: true
            }
        case CLOSE_DRAWER:
            return {
                ...state,
                open: false
            }
        case SET_DATATYPE:
            return {
                ...state,
                dataType: action.payload
            }
        case UPDATE_CHARSET:
            return {
                ...state,
                chars: action.payload
            }
        case UPDATE_NUM_CHARS:
            return {
                ...state,
                numChars: action.payload
            }
        case UPDATE_DELIMITER:
            return {
                ...state,
                delimiter: action.payload
            }
        case UPDATE_NUM_CASES:
            return {
                ...state,
                numCases: action.payload
            }
        case SET_OUTPUT:
            return {
                ...state,
                output: action.payload
            }
        case UPDATE_ALLOW_DUPLICATE:
            return {
                ...state,
                allowDuplicate: action.payload
            }
        case ALTER_ALL:
            console.log('in ALTER_ALL')
            return {
                ...state,
                open: false,
                dataType: '',
                chars: 'abcdefghijklmnopqrstuvwxyz',
                numChars: 0,
                delimiter: '',
                numCases: 0,
                allowDuplicate: true,
                output: ''
            }
        default:
            return state
    }
}

export default reducer