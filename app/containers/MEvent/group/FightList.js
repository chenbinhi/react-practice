import React, { Component } from 'react'
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from 'react-sortable-hoc'
import MdDragHandle from 'react-icons/lib/md/drag-handle' 

import PlayIcon1 from '../images/huosai.jpeg'
import PlayIcon2 from '../images/king.jpeg'


const SortHandler = SortableHandle(() => <MdDragHandle style={{ height: 78, width: 78 }}></MdDragHandle>)
const SortElement = SortableElement(({ value, seq }) => (
    <div className='vs-container vs-container_around'>
        <SortHandler/> 
        <div className='player1'>
            <img className='player__image' src={PlayIcon1} />
            <div className='player__info'>
                <p className='player__info__name'>1运动员A</p>
            </div>
        </div>
        <span className='vs'>VS</span>
        <div className=''>
            <img className='player__image' src={PlayIcon2} />
            <div className='player__info'>
                <p className='player__info__name'>2运动员B</p>
            </div>
        </div>
    </div>
))

const SortContainer = SortableContainer(({ items }) => <div onChange={ e => alert('SelectableList') } >
    {
        items.map((value, index) =>
                <SortElement key={index} index={index} value={value} seq={index} onTouchTap={ e => alert('SortElement') }/>)
    }
</div>)


class FightList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: ['Match 1', 'Match 2', 'Match 3', 'Match 4', 'Match 5', 'Match 6']
        }
        this.onSortEnd = this.onSortEnd.bind(this)
    }
    
    onSortEnd({ oldIndex, newIndex }) {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex)
        })
    }
    render() {
        return  <div>
                <SortContainer items={this.state.items} hideSortableGhost={true} onSortEnd={this.onSortEnd} useDragHandle={true} lockAxis='y' lockToContainerEdges={true} />
        </div>
    }
}

export default FightList

