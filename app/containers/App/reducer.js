import { CLICK, SUBMIT } from './constants'

function global(state = { s: 0, count: 0, price: 10, currentEvent: {
            "eventType":"网球","eventName":"默认赛事名",
            "items":[
                {
                    "name": "默认项目",
                    "sex": "男",
                    "way":"团体",
                    "phases": [
                        { "name":"默认阶段" }
                    ]
                },
                {
                    "name": "新项目1",
                    "sex": "男",
                    "way":"单打",
                    "phases": [
                        { "name":"默认阶段1" }
                    ]
                }
            ]
        }}, action) {
    if (action.type === CLICK)
        return Object.assign({}, state, { s: state.s + action.data,  count: state.count + action.data })
    if (action.type === SUBMIT)
        return {
            ...state,
            currentEvent: action.data
        }
    return state
}

export { 
    global
}
