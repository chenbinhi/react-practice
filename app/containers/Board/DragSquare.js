import React, { PropTypes, Component } from 'react'
import { DragSource } from 'react-dnd'
import ItemTypes from './Constans'
import styles from './styles.css'

class DragSquare extends Component {
    render() {
        const { id, isDragging, connectDragSource, connectDragPreview, canDrag } = this.props
        //console.log('Dragging: %s', isDragging)
        return connectDragPreview(
            <div className={styles.drag}>
                <div>ID: {id}</div>
                <div>canDrag: {canDrag? 'true':'false'}</div>
                <div>Dragging: {isDragging? 'true': 'false'}</div>
                {connectDragSource(<div className={styles.drag}> drag me </div>)}
            </div>
        );
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
        return props.id == 1
    },

    beginDrag(props) {
        //console.log('beginDrag')
        return { id: props.id }
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