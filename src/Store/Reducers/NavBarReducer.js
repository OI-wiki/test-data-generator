import { OPEN_DRAWER, CLOSE_DRAWER } from '../Actions/ActionTypes'

const initState = {
    open: false,
    dataType: ""
}

const NavBarReducer = (state=initState, action) => {
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
        default:
            return state
    }
}

export default NavBarReducer