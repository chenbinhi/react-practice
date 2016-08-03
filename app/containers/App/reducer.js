import { CLICK } from './constants'

function global(state = { s: 0, count: 0, price: 10 }, action) {
    if (action.type === CLICK)
        return Object.assign({}, state, { s: state.s + action.data,  count: state.count + action.data })
    
    return state
}

export { 
    global
}