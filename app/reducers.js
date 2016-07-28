import { combineReducers } from 'redux'
import { routerReducer, LOCATION_CHANGE } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import { CLICK } from 'actions'

function global(state = { s: 0, count: 0, price: 10 }, action) {
    if (action.type === CLICK)
        return Object.assign({}, state, { s: state.s + action.data,  count: state.count + action.data })
    
    return state
}

function routing(state = { locationBeforeTransitions: null }, action) {
    //console.log("reducer", action, state)
   if (action.type === LOCATION_CHANGE) {
        //let location = routerReducer(state.route, action)
        return Object.assign({}, state, { locationBeforeTransitions: action.payload })
    }

    return state
}

function initFormData(state = { form: { sex: 1, 'username': 'input your username', city: '2' }}, action) {
    return state
}

export default combineReducers({
    global,
    routing,
    form: formReducer.normalize({
        
    }),
    initFormData,
})
