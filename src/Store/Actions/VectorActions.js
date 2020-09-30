import { SET_OUTPUT } from './ActionTypes'

const genStringInt = (arr) => {
    console.log('String or Int')
    let rtn = arr[Math.floor(Math.random() * arr.length)]
    return rtn
}

const genFloat = (floatRange) => {
    console.log('Float')
    let lowerBound = parseFloat(floatRange.trim().split('-')[0])
    let upperBound = parseFloat(floatRange.trim().split('-')[1])
    return Math.random() * upperBound + lowerBound
}

export const startVectorGen = (state, dispatch) => {

    console.log("STRING GEN ACTIONS")
    const { chars, numChars, numCases,  output } = state.rootReducer
    const { numElem, floatRange } = state.VectorReducer
    const { string, int, float } = state.VectorReducer.typeChecked

    if (output !== '')
        console.log('RECALCULATE')

    let result = ''
    let arr = chars.split('')

    for (let i = 0; i < numCases; ++i) {
        if (i === 0)
            result += '['
        else
            result += '],['
        for (let j = 0; j < numElem; ++j) {
            if (j !== 0)
                result += ','
            if (float && !string && !int) {
                result += genFloat(floatRange)
            }
            else {
                for (let l = 0; l < numChars; ++l) {
                    if ((string || int) && !float) {
                        result += genStringInt(arr)
                    }
                }
            }
        }
        if (i === numCases-1)
            result += ']'
    }

    console.log('RESULT=',result)
    dispatch({
        type: SET_OUTPUT,
        payload: result
    })
}