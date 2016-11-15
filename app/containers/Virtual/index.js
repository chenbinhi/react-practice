import _ from 'lodash'
import React, { Component } from 'react'
import { Collection, Grid, ScrollSync } from 'react-virtualized'
import 'react-virtualized/styles.css'

import { DragDropContext } from 'react-dnd'
import Html5Backend from 'react-dnd-html5-backend'
import DragSquare from './DragSquare'
import DropSquare from './DropSquare'
import Board from './board.js'

import styles from './styles.css'

const boardWidht = 700
const boardHeight = 400
const tableCount = 3
const tableWidth = 60
const interval = 80
const intervalCount = 50
const tableGap = 0
const intervalGap = 0


class Virtual extends Component {
    constructor(props) {
      super(props)

      let all =  _.shuffle(_.times(tableCount * intervalCount))
      let data = _.sortBy(_.take(all, _.random(1, tableCount * intervalCount /2)).map(seq => {
          return this.calRegion(seq)
      }), 'seq')
      
      data.reduce((last, d) => {
          if (last && last.x + last.width > d.x) {
            last.width = d.x - last.x
            console.assert(last.seq < d.seq)
          }
          return d
      }, null)
      this.state = { data, count: data.length }
      this.addSelected = this.addSelected.bind(this)
      this.cellRenderer = this.cellRenderer.bind(this)
      this.dragHandler = this.dragHandler.bind(this)
      this.cellSizeAndPositionGetter = this.cellSizeAndPositionGetter.bind(this)
    }
    calRegion(seq, width, height) {
      // console.log('calRegion', seq)
      return {
                seq,
                height: height || tableWidth,
                width: width || interval * _.random(1, 3),
                x: (interval + intervalGap)*(seq%intervalCount),
                y: (tableWidth + tableGap)*(Math.floor(seq/intervalCount))
            }
    }
    dragHandler(fromId, { x, y }, dragging) {
      // console.log(fromId, 'to offset:', x, y, dragging)
      x += (interval + intervalGap)/2
      y += (tableWidth + tableGap)/2

      if (x < 0 || y < 0)
        return

      let column = x / (interval + intervalGap)
      let row = y / (tableWidth + tableGap)
      let seq = Math.floor(column)  +  Math.floor(row) * intervalCount

      if (dragging) {
        if (this._last && this._last.fromId === fromId && this._last.seq === seq)
          return
        console.log(fromId, 'to seq:', seq)

        this._last = { fromId, seq }
      } else {
        this._last = null
      }

      let data = Array.from(this.state.data)
      let orig = data[fromId]
      let region = this.calRegion(seq, orig.width, orig.height)
      let coincide = _.find(data, (d, id) => !d.fake && id !== fromId && region.y === d.y && !(region.x + region.width <= d.x || region.x >= d.x + d.width))
      if (coincide) {
        console.log('coincide', region, coincide)
      }

      if (dragging) {
        region.fake = dragging
        region.coincide = !!coincide
        data[this.state.count] = region
      } else {
        data = data.slice(0, this.state.count)
        if (!coincide) {
          data[fromId] = region
          this.resetSelected()
        }
      }
      this.setState({ data })
    }

    addSelected(id) {
      let index = id
      let data = Array.from(this.state.data)
      data[index].active = !data[index].active
      this.setState({ data })
    }
    resetSelected() {
      let data = Array.from(this.state.data)
      data.forEach(d =>
        delete d.active
      )
      this.setState({ data })
    }
    cellRenderer ({ index, key, style }) {
      // console.log('cellRenderer', index, key, style)
      return (
        <DragSquare
          key={key}
          style={style}
          id={index}
          onClick={this.addSelected}
          onDrag={this.dragHandler}
          active={this.state.data[index].active}
          fake={this.state.data[index].fake}
          coincide={this.state.data[index].coincide}
        >
          { `${this.state.data[index].seq + 1} : ${index + 1}` }
        </DragSquare>
      )
    }
    cellSizeAndPositionGetter ({ index }) {
      // console.log('cellSizeAndPositionGetter', index)
      return this.state.data[index]
    }
    gridCellRenderer({ rowIndex, columnIndex, key, style }) {
      // { `${rowIndex}-${columnIndex}` }
      return (
        <div
          key={key}
          className={styles.grid}
          style={style} >
            { (columnIndex+1) + (rowIndex)*intervalCount  }
        </div>)
    }
    render() {
        return  (<div className={styles.container} >
        <ScrollSync>
      {({ clientHeight, clientWidth, onScroll, scrollHeight, scrollLeft, scrollTop, scrollWidth }) => {
        // console.log(scrollLeft, scrollTop, clientHeight, clientWidth, scrollHeight, scrollWidth)p
        return (
        <div>
       {/* 
          <Grid
          className={styles.grid_container}
          cellRenderer={this.gridCellRenderer}
          columnCount={intervalCount}
          rowCount={tableCount}
          columnWidth={interval}
          rowHeight={tableWidth}
          height={boardHeight}
          width={boardWidht}
          style={{
            // position: "absolute"
          }}
          scrollTop={scrollTop}
          scrollLeft={scrollLeft}
          />
        */} 
          <Board
            data={this.state.data}
            className={styles.collection_container}
            cellCount={this.state.data.length}
            cellRenderer={this.cellRenderer}
            cellSizeAndPositionGetter={this.cellSizeAndPositionGetter}
            height={boardHeight}
            width={boardWidht}
            style={{
              // position: "absolute"
            }}
            scrollLeft={scrollLeft}
            scrollTop={scrollTop}
            onScroll={onScroll}
            onDrag={this.dragHandler}
          />
        </div>)
      }}
        </ScrollSync>
        </div>)
        
    }
} 

export default DragDropContext(Html5Backend)(Virtual);
