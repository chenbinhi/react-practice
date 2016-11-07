import React, {Component} from 'react';
import { DragDropContext } from 'react-dnd'
import Html5Backend from 'react-dnd-html5-backend'
import _ from 'lodash'

import DragSquare from './DragSquare'
import DropSquare from './DropSquare'


import styles from './styles.css'
// import mobi from 'mobi.css'

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: [ ]
        }
    }

    handleDrop(dropId, dragItem) {
        let [ ...active ] = this.state.active
        _.times(dragItem.count, i => {
            active[dropId+i] = dragItem.id
        })
        console.log(dropId, dragItem, active)
        this.setState({ active })
    }

    render() {
        let dropSquares = []
        for (let i = 0; i < 100; i++) {
            let index = this.state.active[i]
            if (index >= 0)
                dropSquares.push(<DropSquare key={i} id={i} dragId={index} onDrop={this.handleDrop.bind(this, i)} ></DropSquare>)
            else
                dropSquares.push(<DropSquare key={i} id={i} onDrop={this.handleDrop.bind(this, i)} />)
        }

        let dragSquares = []
        for (let i = 0; i < 3; i++) {
            let index = this.state.active.indexOf(i)
            dragSquares.push(<DragSquare id= {i} dropId={index} count={i+1} />)
        }
        return (
            <div className={styles['flex-center']}>
                <div className={styles.container}>
                    { dropSquares }
                </div>
                <div className={styles['hide-on-mobile']} >
                    { dragSquares }
                </div>
            </div>
        );
    }
}

export default DragDropContext(Html5Backend)(Board);