import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd'
import { Collection } from 'react-virtualized'

import ItemTypes from './Constans'
import styles from './styles.css'

class Board extends Component {
    constructor(props) {
        super(props)
    }
    componentWillReceiveProps(nextPros) {
            
    }
    componentDidUpdate() {
        if (this._lastData !== this.props.data) {
            console.log('collection reload')
            this._collection.recomputeCellSizesAndPositions()
            this._lastData = this.props.data
        }
    }
    render() {
        return this.props.connectDropTarget(<div ref={ ref => this._container = ref } >
            <Collection {...this.props} ref={ ref => this._collection = ref } />
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
    let WAITCOUNT = wait || 5
    let count = 0
    let last

    return function(offset) {
        if (last && last.x === offset.x && last.y === offset.y) {
            if (count++ < WAITCOUNT || last.render)
                return
            else
                last.render = true
        } else {
            last = offset
            count = 0
            return
        }

        return true
    }
}

let hoverDebounce = createHoveDebounce()

const spec = {
    hover(props, monitor, component){
        let endOffset =  monitor.getSourceClientOffset()
        if (!hoverDebounce(endOffset))
            return

        let offset = calcParentOffset(endOffset, component._container, props)
        let item = monitor.getItem()    
        props.onDrag(item.id, offset, true)
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
        let offset = calcParentOffset(endOffset, component._container, props)

        props.onDrag(item.id, offset)
    }
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
    }
}

export default DropTarget(ItemTypes.TEST, spec, collect)(Board);


