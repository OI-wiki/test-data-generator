import { OPEN_DRAWER, CLOSE_DRAWER, UPDATE_CHARSET, UPDATE_DELIMITER,
    UPDATE_NUM_CHARS } from './ActionTypes'

export const toggleDrawer = () => (dispatch, getState) => {
    const state = getState()
    if (state.open === true) {
        console.log("CLOSING DRAWER")
        dispatch({ type: CLOSE_DRAWER })
    }
    else {
        console.log("OPENING DRAWER")
        dispatch({ type: OPEN_DRAWER })
    }
}

export const updateCharset = (chars) => (dispatch) => {
    dispatch({ 
        type: UPDATE_CHARSET, 
        payload: chars
    })
}

export const updateDelimiter = (d) => (dispatch) => {
    dispatch({ 
        type: UPDATE_DELIMITER, 
        payload: d
    })
}

export const updateNumChars = (num) => (dispatch) => {
    dispatch({ 
        type: UPDATE_NUM_CHARS, 
        payload: num
    })
}