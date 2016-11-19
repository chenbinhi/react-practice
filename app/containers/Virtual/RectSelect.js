// 支持滚动（scroll）框选的 高阶组件HOC 
import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import styles from './styles.css'

function calcParentOffset(offset, parent) {
    let rect = parent.getBoundingClientRect()
    let x = offset.x + parent.scrollLeft - rect.left
    let y = offset.y + parent.scrollTop - rect.top
    // console.log('calc', x, y,
    //     `(${offset.x} + ${parent.scrollLeft} - ${rect.left})`,
    //     `(${offset.y} + ${parent.scrollTop} - ${rect.top})`)
    return { x, y }
}

export default function createRectSelect(WrapComponent) {
    class RectSelect extends Component {
        constructor(props) {
                super(props)
                this.state = {
                    style: {}
                }
                this.mouseDownHandler = this.mouseDownHandler.bind(this)
                this.mouseMoveHandler = this.mouseMoveHandler.bind(this)
                this.mouseUpHandler = this.mouseUpHandler.bind(this)
                this.clickHandler = this.clickHandler.bind(this)
            }
            componentWillReceiveProps(nextPros) {

            }
            componentDidMount() {
                this._container = findDOMNode(this.wrappedInstance);
            }
            componentDidUpdate() {
            }
            mouseDownHandler(e) {
                let offset = calcParentOffset({ x: e.clientX, y: e.clientY }, this._container)
                console.log('down', e.clientX, e.clientY, offset)
                this._style = {
                    x: offset.x,
                    y: offset.y
                }
            }

            mouseMoveHandler(e) {
                let s = this._style
                if (!s || s.x == undefined || s.y == undefined)
                    return

                // console.log('move', e.clientX, e.clientY, s)
                this._dragging = true

                let offset = calcParentOffset({ x: e.clientX, y: e.clientY }, this._container)
                s.left = Math.min(offset.x, s.x),
                s.top = Math.min(offset.y, s.y),
                s.width = Math.abs(s.x - offset.x),
                s.height = Math.abs(s.y - offset.y),

                this.setState({
                    style: {
                        left: (s.left - this._container.scrollLeft),
                        top: (s.top - this._container.scrollTop),
                        width: s.width,
                        height: s.height
                    }
                })
            }
            mouseUpHandler(e) {
                let s = this._style
                console.log('up', e.clientX, e.clientY, s)
                if (s && s.width && s.height) {
                    this.props.onRectSelect && this.props.onRectSelect(s)
                }

                this._style = null
                this.setState({
                    style: {}
                })
            }

            clickHandler(e) {
                if (this._dragging) {
                    this._dragging = null
                } else {
                    console.log('clicked!')
                    this.props.onClick && this.props.onClick(this.props.id)
                }
            }
            
            render() {
                return (
                    <div
                        className={styles.rectSelect} 
                        onClick={this.clickHandler}
                        onMouseDown={this.mouseDownHandler}
                        onMouseMove={this.mouseMoveHandler}
                        onMouseUp={this.mouseUpHandler}>
                        <div className={styles.select} style={this.state.style}></div> 
                        <WrapComponent
                            ref={ ref => this.wrappedInstance = ref }
                            { ...this.props }
                        />
                    </div>)
            }
        }
    return RectSelect
}
