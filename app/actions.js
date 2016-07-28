export const CLICK = "CLICK"

export const FETCH = "FETCH"

export function createClickAction() {
    return { type: CLICK, data: 1}
}

export function createFetchAction(url) {
    return { type: FETCH, url}
}
