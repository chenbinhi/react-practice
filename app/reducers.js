import { combineReducers } from 'redux'
import { routerReducer, LOCATION_CHANGE } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import { global } from 'containers/App/reducer'

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
    form: formReducer,
    initFormData,
})
