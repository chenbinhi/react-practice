import _ from 'lodash'
import React, { Component } from 'react'
import { Collection, Grid, ScrollSync, AutoSizer } from 'react-virtualized'
import 'react-virtualized/styles.css'

import { DragDropContext } from 'react-dnd'
import Html5Backend from 'react-dnd-html5-backend'
import DragSquare from './DragSquare'
import DropSquare from './DropSquare'
import Board from './board.js'

import styles from './styles.css'

const boardWidth = 700
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

      data.reduce((last, d, id) => {
          if (last) {
            if (d.x + d.width > (interval + intervalGap) * intervalCount) {
              d.width = (interval + intervalGap) * intervalCount - d.x
            }
            if (d.y === last.y && last.x + last.width > d.x) {
              last.width = d.x - last.x
            }
            console.assert(last.width > 0, d, last)
            console.assert(last.seq < d.seq)
          }
          d.id = id
          return d
      }, null)
      this.state = { data }
      this._count = data.length
      this.getSelected = this.getSelected.bind(this)
      this.addSelected = this.addSelected.bind(this)
      this.resetSelected = this.resetSelected.bind(this)
      this.cellRenderer = this.cellRenderer.bind(this)
      this.dragHandler = this.dragHandler.bind(this)
      this.scrollHandler = this.scrollHandler.bind(this)
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

      let data = this.state.data
      let active = data.filter((d) => {
        return (d.active || d.id === fromId)
      })
      let all = active.reduce((m, a) => {
        m.width += a.width
        m.height = a.height // height 必须等高
        return m
      }, {
        width: 0,
        height: 0,
      })
      let region = this.calRegion(seq, all.width, all.height)
      // TODO: 检查尾部是否超过范围
      let coincide = _.find(data, (d) => d.id !== fromId && !d.active && region.y === d.y && !(region.x + region.width <= d.x || region.x >= d.x + d.width))
      if (coincide) {
        console.log('coincide', region, coincide)
      }

      data = Array.from(this.state.data)
      if (dragging) {
        active.forEach(a => {
            if (!a.orig) {
              data[a.id].orig = Object.assign({}, a)
            }

            if (a.id !== fromId) {
              data[a.id].hidden = true
            } else {
              region.merge = true
              region.coincide = !!coincide
              Object.assign(data[fromId], region)
            }
        })
      } else {
        active = _.sortBy(active, a => a.orig ? a.orig.seq : a.seq)
        let seq = region.seq
        active.forEach(a => {
            if (a.orig) {
              data[a.id] = Object.assign({}, a.orig)
            }

            let d = data[a.id]
            console.assert(d.id === a.id)
            if (!coincide) {
                let region = this.calRegion(seq, d.width, d.height)
                region.id = d.id
                region.active = true
                data[d.id] = region
                seq += d.width/interval
            }
        })
      }

      this.setState({ data })
    }

    getSelected(id) {
      let active = _.cloneDeep(this.state.data.filter(d => {
          console.assert(d.width >= 0, d)
          return (d.active || d.id === id)
      }).map(a => {
        if (a.orig) {
          return a.orig
        } else {
          return a
        }
      }))

      // active = _.sortBy(active, 'seq')

      console.log('getSelect', active)
      return active
    }
    addSelected(id) {
      console.log('addSelected', id)
      if (_.isNumber(id)) {
        let index = id
        let data = Array.from(this.state.data)
        data[index].active = !data[index].active
        this.setState({ data })
        return
      }

      let rect = id
      let { left, top, width, height } = rect

      let select = this.state.data.filter(d => {
          if (d.x >= left && d.y >= top && d.x + d.width <= left + width && d.y + d.height <= top + height)
            return true
      })
      // console.log('addSelected', select)
      if (select.length > 0) {
        let data = Array.from(this.state.data)
        select.forEach(s => {
          data[s.id].active = true
        })
        this.setState({ data })
      }
    }
    resetSelected() {
      console.log('resetSelected')
      let active = this.state.data.some(d => {
          return d.active
      })

      if (active) {
        let data = Array.from(this.state.data)
        data.forEach(d =>
          delete d.active
        )
        this.setState({ data })
      }
    }
    scrollHandler(scroll) {
      this._scrolled = false
      this.setState({ scroll })
    }
    cellRenderer ({ index, key, style }) {
      // console.log('cellRenderer', index, key, style)
      console.assert(index === this.state.data[index].id, this.state.data[index], index)
      return (
        <DragSquare
          key={key}
          style={style}
          id={this.state.data[index].id}
          onClick={this.addSelected}
          onDrag={this.getSelected}
          active={this.state.data[index].active}
          merge={this.state.data[index].merge}
          hidden={this.state.data[index].hidden}
          coincide={this.state.data[index].coincide}
        >
          { `${this.state.data[index].seq + 1} : ${this.state.data[index].id + 1}` }
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
          <AutoSizer>
          { ({ width: boardWidth, height: boardHeight }) =>{
              console.log(boardWidth, boardHeight)
              return <ScrollSync>
                {({ clientHeight, clientWidth, onScroll, scrollHeight, scrollLeft, scrollTop, scrollWidth }) => {
                  // console.log(scrollLeft, scrollTop, clientHeight, clientWidth, scrollHeight, scrollWidth)
                  if (!this._scrolled && this.state.scroll) {
                    console.log('auto scroll:', this.state.scroll.x, this.state.scroll.y)
                    scrollLeft += this.state.scroll.x
                    screenTop += this.state.scroll.y
                    this._scrolled = true
                  }
                  return (
                  <div>
                    <Grid
                    className={styles.grid_container}
                    cellRenderer={this.gridCellRenderer}
                    columnCount={intervalCount}
                    rowCount={tableCount}
                    columnWidth={interval}
                    rowHeight={tableWidth}
                    height={boardHeight}
                    width={boardWidth}
                    style={{
                      // position: "absolute"
                    }}
                    scrollTop={scrollTop}
                    scrollLeft={scrollLeft}
                    />
                    <Board
                      data={this.state.data}
                      className={styles.collection_container}
                      cellCount={this.state.data.length}
                      cellRenderer={this.cellRenderer}
                      cellSizeAndPositionGetter={this.cellSizeAndPositionGetter}
                      height={boardHeight}
                      width={boardWidth}
                      style={{
                        // position: "absolute"
                      }}
                      scroll={this.scrollHandler}
                      onScroll={onScroll}
                      onDrag={this.dragHandler}
                      onClick={this.resetSelected}
                      onRectSelect={this.addSelected}
                    />
                  </div>)
                }}
              </ScrollSync>
            }
          }
          </AutoSizer>
        </div>)

    }
}

export default DragDropContext(Html5Backend)(Virtual);
