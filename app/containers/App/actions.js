import { CLICK, FETCH } from './constants'

export function createClickAction() {
    return { type: CLICK, data: 1}
}

export function createFetchAction(url) {
    return { type: FETCH, url}
}
