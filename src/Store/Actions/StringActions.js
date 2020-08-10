
export const startStringGen = (state) => {
    console.log("SRING GEN ACTIONS")
    const { chars, numChars, delimiter, numCases, allowDuplicate, output } = state
    if (output !== '') {
        console.log('ERROR: output not empty, submit clicked more than once')
    }
    let result = ''
    let arr = chars.split('')
    if (allowDuplicate) {
        console.log('ALLOW dup')
        if (delimiter === '') {
            console.log('WITHOUT delimiter')
            for (let i = 0; i < numCases; ++i) {
                result += arr[Math.floor(Math.random() * arr.length)]
            }
        }
        else {
            console.log('WITH delimiter')
            for (let i = 0; i < numCases; ++i) {
                for (let j = 0; j < numChars; ++j) {
                    result += arr[Math.floor(Math.random() * arr.length)]
                }
                if (i !== numCases-1)
                    result += delimiter
            }
        }

    }
    else {
        console.log('dup NOT ALLOWED')
        let count = Math.min(arr.length, numCases)
        if (delimiter === '') {
            console.log('WITHOUT delimiter')
            while (count > 0 && arr.length > 0) {
                let idx = Math.floor(Math.random() * count--)
                result += arr[idx]
                arr.splice(idx, 1)
            }
        }
        else {
            console.log('WITH delimiter')
            while (count > 0 && arr.length > 0) {
                let idx = Math.floor(Math.random() * count--)
                result += arr[idx]
                arr.splice(idx, 1)
                if (count !== 0)
                    result += delimiter
            }
        }
    }
    console.log(result)
}