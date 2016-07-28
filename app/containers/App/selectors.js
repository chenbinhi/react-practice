import { createSelector } from 'reselect'

function selectGlobal(state, props) {
    return state.global
}

const selectCount = createSelector(
    selectGlobal,
    global => global.count
)

const selectPrice = createSelector(
    selectGlobal,
    global => global.price
)

const selectSum = createSelector(selectCount, selectPrice, (count, price) => count*price)

export {
    selectGlobal,
    selectCount,
    selectPrice,
    selectSum
}