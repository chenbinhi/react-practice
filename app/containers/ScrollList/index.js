import React, {Component} from 'react';
import withScrolling, { createVerticalStrength } from 'react-dnd-scrollzone';
import { List } from 'react-virtualized';
import { DragDropContext } from 'react-dnd'
import Html5Backend from 'react-dnd-html5-backend'
import DragSquare from './DragSquare';

// creates array with 1000 entries
const testArray = Array.from(Array(1000)).map((e,i)=>'Item '+i);

const ScrollZoneVirtualList = withScrolling(List);
const vStrength = createVerticalStrength(500);

class ScrollList extends Component {
  render() {
      return (
        <main>
        <header />
        <ScrollZoneVirtualList
            verticalStrength={vStrength}
            horizontalStrength={ ()=>{} }
            speed={200}
            height={600}
            width={800}
            rowCount={testArray.length}
            rowHeight={34}
            rowRenderer={
            ({ key, index, style }) => {
                return <DragSquare key={key} style={style} id={index} content={testArray[index]}/>
            }
            }
        />
        </main>
    )
  }
}

export default DragDropContext(Html5Backend)(ScrollList)