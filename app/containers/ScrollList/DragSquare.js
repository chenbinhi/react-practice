import React, { PropTypes, Component } from 'react'
import { DragSource } from 'react-dnd'
import ItemTypes from './Constans'
import styles from './styles.css'

class DragSquare extends Component {
    constructor(props) {
        super(props)
        this.state = { active: props.active}
    }
    componentWillReceiveProps(nextProps) {
        this.setState({active: nextProps.active})
    }
    clickHandler() {
        // console.log(this.props.id, 'clicked!')
        let active = !this.state.active
        this.setState({ active})
        this.props.onClick && this.props.onClick(this.props.id)
    }
    render() {       
        const { id, isDragging, connectDragSource, connectDragPreview, canDrag, dropId, style } = this.props
        let nstyle = Object.assign({}, style)
        if (this.state.active) {
            nstyle.background = 'lightgreen'
        } else {
            nstyle.background = ''
        }
        //console.log('Dragging: %s', isDragging)
        return connectDragPreview(connectDragSource(
            <div className={styles.drag} style={nstyle} onClick={this.clickHandler.bind(this)}>
                <div>ID: {id}</div>
                {this.props.children}
            </div>
        ))
    }
}

DragSquare.propTypes = {
    id: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
}

const spec = {
    canDrag(props, monitor) {
        return !(props.dropId >= 0)
    },

    beginDrag(props) {
        //console.log('beginDrag')
        return { id: props.id, count: props.count || 1 }
    },

    isDragging(props, monitor) {
        console.log('isDragging', props.id, monitor.getItem().id)
        return props.id === monitor.getItem().id
    },

    endDrag(props, monitor, component) {
        //console.log('endDrag', props, monitor.getDropResult(), component)
        if (!monitor.didDrop())
            return
        //console.log('endDrag', props, monitor.getDropResult())
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
        canDrag: monitor.canDrag(),
    }
}
export default DragSource(ItemTypes.TEST, spec,  collect)(DragSquare);