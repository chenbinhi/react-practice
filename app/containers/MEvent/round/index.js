
import React, { Component } from 'react'
import { Link } from 'react-router'

export class Group extends Component {
    render() {
        <div>
        <CellsTitle>X项目第n阶段第n轮</CellsTitle>
            <Cells>
                <Cell access >
                    <CellBody >
                        
                        <Badge dot preset='body'></Badge>
                    </CellBody>
                    <CellFooter>
                        运动员A VS 运动员B 
                    </CellFooter>
                </Cell>
                <Cell href="javascript:void(alert('球桌2'))" access>
                    <CellBody >球桌2</CellBody>
                    <CellFooter>
                        未编排
                    </CellFooter>
                </Cell>
                <Cell href="javascript:void(alert('球桌3'))" access>
                    <CellBody >球桌3</CellBody>
                    <CellFooter>
                        队A VS 队B 
                        <Badge preset='footer'>9</Badge>
                    </CellFooter>
                </Cell>
            </Cells>
        </div>
    }
}

