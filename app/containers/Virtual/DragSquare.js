import _ from 'lodash'
import React, { PropTypes, Component } from 'react'
import { DragSource } from 'react-dnd'
import ItemTypes from './Constans'
import styles from './styles.css'

class DragSquare extends Component {
    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
        this.mouseDownHandler = this.mouseDownHandler.bind(this)
    }
    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps.id, 'shouldComponetUpdate:', nextProps)
        return true
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.id, 'componentWillReceiveProps:', nextProps)
    }
    clickHandler(e) {
        console.log(this.props.id, 'clicked!')
        this.props.onClick && this.props.onClick(this.props.id)
        e.stopPropagation()
    }
    mouseDownHandler(e) {
         e.stopPropagation()
    }
    render() {       
        const { coincide, fake, active, isDragging, connectDragSource, connectDragPreview, style } = this.props
        let nstyle = Object.assign({}, style)
        if (fake) {
            nstyle.border = '1px dashed green'
        } else {
            nstyle.border = '1px solid green'
        }
        if (coincide) {
            nstyle.background = 'hsla(0, 86%, 60%, 0.5)'
        } else if (active) {
            nstyle.background = 'hsla(120, 67%, 49%, 0.5)'
        } else if (fake) {
            nstyle.background = 'hsla(120, 67%, 49%, 0.1)'
        } else if (isDragging) {
            nstyle.background = 'hsla(50, 67%, 49%, 0.3)'
        } else {
            nstyle.background = ''
        }
        return connectDragPreview(connectDragSource(
            <div className={styles.drag} style={nstyle} 
                onClick={this.clickHandler}
                onMouseDown={this.mouseDownHandler}
                ref={ref => this._container = ref}>
                <div>{isDragging? 'true': 'false'}</div>
                {this.props.children}
            </div>), { captureDraggingState: true })
    }
}

DragSquare.propTypes = {
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
}

const spec = {
    // canDrag(props, monitor) {
    //     return !(props.dropId >= 0)
    // },

    beginDrag(props, monitor, component) { 
        return { id: props.id }
    },

    isDragging(props, monitor) {
        // console.log('isDragging', props.id, props.active, monitor.getItem().id)
        return props.id == monitor.getItem().id
    },

    // endDrag(props, monitor, component) {
    //     let dr = monitor.getDropResult()
    //     console.log('endDrag', dr)
    // }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}
export default DragSource(ItemTypes.TEST, spec,  collect)(DragSquare);
