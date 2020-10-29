import { UPDATE_VECTOR_ELEM_TYPE_str, UPDATE_VECTOR_ELEM_TYPE_int, 
    UPDATE_VECTOR_ELEM_TYPE_float, ALTER_ALL, UPDATE_NUM_ELEMENTS,
    UPDATE_FLOAT_RANGE } from "../Actions/ActionTypes";

const initState = {
    numElem: 0,
    typeChecked: {
        string: false,
        int: false,
        float: false,
        vector: false, // TODO
    },
    floatRange: ''
}

const VectorReducer = (state=initState, action) => {
    switch(action.type) {
        case UPDATE_NUM_ELEMENTS:
            return {
                ...state,
                numElem: action.payload
            }
        case UPDATE_VECTOR_ELEM_TYPE_str:
            return {
                ...state,
                typeChecked: {
                    ...state.typeChecked,
                    string: action.payload
                }
            }
        case UPDATE_VECTOR_ELEM_TYPE_int:
            return {
                ...state,
                typeChecked: {
                    ...state.typeChecked,
                    int: action.payload
                }
            }
        case UPDATE_VECTOR_ELEM_TYPE_float:
            return {
                ...state,
                typeChecked: {
                    ...state.typeChecked,
                    float: action.payload
                }
            }
        case UPDATE_FLOAT_RANGE:
            return {
                ...state,
                floatRange: action.payload
            }
        case ALTER_ALL:
            return {
                ...state,
                typeChecked: {
                    ...state.typeChecked,
                    string: false,
                    int: false,
                    float: false,
                    vector: false,
                }
            }
        default:
            return state
    }
}

export default VectorReducer