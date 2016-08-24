export function calOffsetTop(e) {
    let offsetTop = e.offsetTop
    while (e.offsetParent) {
        e = e.offsetParent
        offsetTop += e.offsetTop
    }
    return offsetTop
}

export function isInVisiableSection(e) {
        let clientHeight = document.compatMode == 'BackCompat' ? document.body.clientHeight : document.documentElement.clientHeight
        let offsetTop = calOffsetTop(e)
        //let scrollTop = document.compatMode == 'BackCompat' ? document.body.scrollTop : document.documentElement.scrollTop
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop // for chrome bug
        return offsetTop - scrollTop < clientHeight
}

