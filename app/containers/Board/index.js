import React, {Component} from 'react';
import { DragDropContext } from 'react-dnd'
import Html5Backend from 'react-dnd-html5-backend'

import DragSquare from './DragSquare'
import DropSquare from './DropSquare'


import styles from './styles.css'

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: [ 1, 2 ]
        }
    }

    handleDrop(i, id) {
        let [ ...active ] = this.state.active
        active[id-1] = i
        //console.log(active)
        this.setState({ active })
    }

    render() {
        let dropSquares = []
        for (let i=1; i <= 10; i++) {
            let index = this.state.active.indexOf(i)
            if (index >= 0)
                dropSquares.push(<DropSquare key={i} id={i} onDrop={this.handleDrop.bind(this, i)} ><DragSquare id= {index+1} /></DropSquare>)
            else
                dropSquares.push(<DropSquare key={i} id={i} onDrop={this.handleDrop.bind(this, i)} />)
        }
        return (
            <div className={styles.board}>
                { dropSquares }
            </div>
        );
    }
}

export default DragDropContext(Html5Backend)(Board);