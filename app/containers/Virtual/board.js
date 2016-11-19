import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

import { DropTarget } from 'react-dnd'
import { Collection } from 'react-virtualized'

import RectSelect from './RectSelect'

import ItemTypes from './Constans'
import styles from './styles.css'

const SCROLLMORE = 50

const RectSelectCollection = RectSelect(Collection)

class Board extends Component {
    constructor(props) {
        super(props)
    }
    componentWillReceiveProps(nextPros) {

    }
    componentDidUpdate() {
        if (this._lastData !== this.props.data) {
            console.log('collection reload')
            this._collection.wrappedInstance.recomputeCellSizesAndPositions()
            this._lastData = this.props.data
        }
    }
    render() {
        return this.props.connectDropTarget(
            <div>
            <RectSelectCollection {...this.props} ref={ ref => this._collection = ref } />
            </div>)
    }
}

function calcParentOffset(offset, parent, scroll) {
    let rect = parent.getBoundingClientRect()
    let x = offset.x + scroll.scrollLeft - rect.left
    let y = offset.y + scroll.scrollTop - rect.top
    // console.log('calc', x, y,
    //     `(${offset.x} + ${scroll.scrollLeft} - ${rect.left})`,
    //     `(${offset.y} + ${scroll.scrollTop} - ${rect.top})`)
    return { x, y }
}

function createHoveDebounce(wait) {
    let WAITCOUNT = wait || 3
    let count = 0
    let last

    return function(offset) {
        if (last && last.x === offset.x && last.y === offset.y) {
            if (count++ < WAITCOUNT || last.render) {
                return
            } else {
                last.render = true
                return true
            }
        } else {
            last = offset
            count = 0
            return
        }        
    }
}

function createScrollDebounce(wait) {
    let WAITCOUNT = wait || 3
    let count = 0
    let last

    return function(offset) {
        if (last && last.x === offset.x && last.y === offset.y) {
            if (count++ < WAITCOUNT) {
                return
            } else {
                count = 0
                return true
            }
        } else {
            last = offset
            count = 0
            return
        }
    }
}

let hoverDebounce = createHoveDebounce()
let scrollDebounce = createScrollDebounce()

const spec = {
    hover(props, monitor, component){
        let endOffset =  monitor.getSourceClientOffset()

        let item = monitor.getItem()

        if (scrollDebounce(endOffset)) {
            //let rect = component._collection._collectionView._scrollingContainer.getBoundingClientRect()
            // console.log(findDOMNode(component._collection), findDOMNode(component._collection._collectionView), findDOMNode(component._collection._collectionView._scrollingContainer))
            let rect = item.offsetParent.getBoundingClientRect()
            let scrollX = endOffset.x - rect.left // scroll left
            if (scrollX >= 0) {
                scrollX = (endOffset.x + item.width) - rect.right // scroll right
                if (scrollX < 0)
                    scrollX = 0
            }
            let scrollY = endOffset.y - rect.top
            if (scrollY >= 0) {
                scrollY = (endOffset.y + item.height) - rect.bottom
                if (scrollY < 0)
                    scrollY = 0
            }
                // console.log('calc', scrollX, scrollY,
                //     `((${endOffset.x} + ${item.width}) - ${rect.right})`,
                //     `((${endOffset.y} + ${item.height}) - ${rect.bottom})`)
            if ( scrollX != 0 || scrollY != 0) {
                // console.log('hover scroll:', scrollX, scrollY)
                scrollX = scrollX > 0 ? scrollX + SCROLLMORE  : scrollX - SCROLLMORE
                scrollY = scrollY > 0 ? scrollY + SCROLLMORE : scrollY - SCROLLMORE
                props.scroll && props.scroll({ x: scrollX, y: scrollY})
            }
        }

        if (hoverDebounce(endOffset)) {
            let offset = calcParentOffset(endOffset, item.offsetParent, props)
            props.onDrag(item.id, offset, true)
        }
    },
    // hover(props, monitor, component) {
    //     const cancelAnimationFrame = window.cancelAnimationFrame || (timeout => clearTimeout(timeout));
    //     const requestAnimationFrame = window.requestAnimationFrame || (func => setTimeout(func, 1000 / 60));

    //     // If already scrolling, stop the previous scroll loop
    //     if (this.lastScroll) {
    //         cancelAnimationFrame(this.lastScroll);
    //         this.lastScroll = null;
    //         clearTimeout(this.removeTimeout);
    //     }

    //     const slideRegionSize = component.props.slideRegionSize;
    //     const { x: dragXOffset, y: dragYOffset } = monitor.getClientOffset();
    //     const {
    //         top:    containerTop,
    //         bottom: containerBottom,
    //         left:   containerLeft,
    //         right:  containerRight,
    //     } = component.containerRef.getBoundingClientRect();
    //     let yScrollDirection = 0;
    //     let yScrollMagnitude = 0;
    //     const fromTop = dragYOffset - slideRegionSize - Math.max(containerTop, 0);
    //     if (fromTop <= 0) {
    //         // Move up
    //         yScrollDirection = -1;
    //         yScrollMagnitude = Math.sqrt(-1 * fromTop);
    //     } else {
    //         const fromBottom = dragYOffset + slideRegionSize - Math.min(containerBottom, window.innerHeight);
    //         if (fromBottom >= 0) {
    //             // Move down
    //             yScrollDirection = 1;
    //             yScrollMagnitude = Math.sqrt(fromBottom);
    //         }
    //     }

    //     let xScrollDirection = 0;
    //     let xScrollMagnitude = 0;
    //     const fromLeft = dragXOffset - slideRegionSize - Math.max(containerLeft, 0);
    //     if (fromLeft <= 0) {
    //         // Move up
    //         xScrollDirection = -1;
    //         xScrollMagnitude = Math.ceil(Math.sqrt(-1 * fromLeft));
    //     } else {
    //         const fromRight = dragXOffset + slideRegionSize - Math.min(containerRight, window.innerWidth);
    //         if (fromRight >= 0) {
    //             // Move down
    //             xScrollDirection = 1;
    //             xScrollMagnitude = Math.ceil(Math.sqrt(fromRight));
    //         }
    //     }

    //     // Don't do anything if there is no scroll operation
    //     if (xScrollDirection === 0 && yScrollDirection === 0) {
    //         return;
    //     }

    //     // Indefinitely scrolls the container at a constant rate
    //     const doScroll = () => {
    //         component.scrollBy(xScrollDirection * xScrollMagnitude, yScrollDirection * yScrollMagnitude);
    //         this.lastScroll = requestAnimationFrame(doScroll);
    //     };

    //     // Stop the scroll loop after a period of inactivity
    //     this.removeTimeout = setTimeout(() => {
    //         cancelAnimationFrame(this.lastScroll);
    //         this.lastScroll = null;
    //     }, 20);

    //     // Start the scroll loop
    //     this.lastScroll = requestAnimationFrame(doScroll);
    // },

    drop(props, monitor, component) {
        let item = monitor.getItem()
        let endOffset =  monitor.getSourceClientOffset()
        let offset = calcParentOffset(endOffset, item.offsetParent, props)

        props.onDrag(item.id, offset)
    }
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
    }
}

export default DropTarget(ItemTypes.TEST, spec, collect)(Board);


