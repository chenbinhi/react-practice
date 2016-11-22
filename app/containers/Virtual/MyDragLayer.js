import React, { PropTypes } from 'react';
import ItemTypes from './Constans';
import { DragLayer } from 'react-dnd';

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
};

function getItemStyles(props) {
  const { currentOffset } = props;
  if (!currentOffset) {
    return {
      display: 'none'
    };
  }

  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform: transform,
    WebkitTransform: transform
  };
}

class CustomDragLayer {
  renderItem(type, item) {
    switch (type) {
    case ItemTypes.TEST:
      return (
        <div>tt </div>
      );
    }
  }

  render() {
    const { item, itemType, isDragging } = this.props;
    if (!isDragging) {
      return null;
    }

    return (
      <div style={layerStyles}>
        <div style={getItemStyles(this.props)}>
          {this.renderItem(itemType, item)}
        </div>
      </div>
    );
  }
}

// CustomDragLayer.propTypes = {
//   item: PropTypes.object,
//   itemType: PropTypes.string,
//   currentOffset: PropTypes.shape({
//     x: PropTypes.number.isRequired,
//     y: PropTypes.number.isRequired
//   }),
//   isDragging: PropTypes.bool.isRequired
// };

function collect(monitor) {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  };
}

console.log(DragLayer)
// Todo:  `Cannot call a class as a function`
export default DragLayer(collect)(CustomDragLayer);