import { UPDATE_VECTOR_ELEM_TYPE_str, UPDATE_VECTOR_ELEM_TYPE_int, UPDATE_VECTOR_ELEM_TYPE_float } from "../Actions/ActionTypes";

const initState = {
    typeChecked: {
        string: false,
        int: false,
        float: false,
        vector: false, // TODO
    },
}

const VectorReducer = (state=initState, action) => {
    switch(action.type) {
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
        default:
            return state
    }
}

export default VectorReducer