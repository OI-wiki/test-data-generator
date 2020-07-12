import { UPDATE_CHARSET, UPDATE_DELIMITER, UPDATE_NUM_CHARS } from '../Actions/ActionTypes'

const initState = {
    chars: '',
    numChars: 0,
    delimiterChecked: false,
    delimiter: '',
}

const stringReducer = (state=initState, action) => {
    switch (action.type) {
        case UPDATE_CHARSET:
            return {
                ...state,
                chars: action.payload
            }
        case UPDATE_DELIMITER:
            return {
                ...state,
                delimiterChecked: !state.delimiterChecked
            }
        case UPDATE_NUM_CHARS:
            return {
                ...state,
                numChars: action.payload
            }
        default:
            return state;
    }
}

export default stringReducer;