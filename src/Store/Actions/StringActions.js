
export const startStringGen = (state) => {
    console.log("SRING GEN ACTIONS")
    const { chars, numChars, delimiter, numCases, allowDuplicate, output } = state
    if (output !== '') {
        console.log('ERROR: output not empty, submit clicked more than once')
    }
    let result = ''
    let arr = chars.split('')
    console.log(arr)
    for (let i = 0; i < numCases; ++i) {
        result += arr[Math.floor(Math.random() * arr.length)]
    }
    console.log(result)
}