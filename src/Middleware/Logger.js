// logger middleware is implemented for debug purposes only

const logger = store => next => action => {
    console.group(action.type)
    console.info('DISPATCHING', action)
    let result = next(action)
    console.log('NEXT STATE', store.getState())
    console.groupEnd()
    return result
  }
  
export default logger