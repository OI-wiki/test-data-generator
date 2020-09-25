import { SET_OUTPUT } from './ActionTypes'

export const startVectorGen = (state, dispatch) => {
    console.log("STRING GEN ACTIONS")
    const { chars, numChars, numCases, allowDuplicate, output } = state.rootReducer
    const { string, int, float, vector } = state.VectorReducer
    if (output !== '') {
        console.log('ERROR: output not empty, submit clicked more than once')
    }
    let result = ''

    

    console.log('RESULT=',result)
    dispatch({
        type: SET_OUTPUT,
        payload: result
    })
}