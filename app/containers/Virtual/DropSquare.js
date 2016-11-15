import React, { PropTypes } from 'react';
import { DropTarget } from 'react-dnd'
import ItemTypes from './Constans'
import styles from './styles.css'

const DropSquare = (props) => {
    const { id, isOver, canDrop, connectDropTarget, dragId } = props
    //console.log('Over: %s', isOver)
    return connectDropTarget(
        <div className={styles.drop}>
            <div>ID: {id}</div>
            <div>isOver: { isOver? 'true': 'false' }</div>
            <div>canDrop: { canDrop? 'true': 'false' }</div>
            <div>dragId: { dragId }</div>
            { props.children }
        </div>
    );
};

DropSquare.propTypes = {
    id: PropTypes.number.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
}
const spec = {
    canDrop(props, monitor) {
        const e = monitor.getItem()
        //console.log('canDrop: %d - %d', props.id, e.id)
        return !(props.dragId >= 0)
    },
    drop(props, monitor, component) {
        const e = monitor.getItem()
        //console.log('drop: %d - %d', props.id, e.id)
        props.onDrop(e)

        return { id: props.id }
    }
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        // isOver: monitor.isOver(),
        // canDrop: monitor.canDrop(),
    }
}

export default DropTarget(ItemTypes.TEST, spec, collect)(DropSquare);