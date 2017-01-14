import React, { Component } from 'react'
import { Link } from 'react-router'


import PreviewButton from '../components/PreviewButton'
import Carrousel from '../components/Carousel'
import Footer from '../components/Footer'
import {
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Cells,
    CellsTitle,
    Preview,
    PreviewHeader,
    PreviewBody,
    PreviewFooter,
    // PreviewButton,
    PreviewItem,
    Badge,
} from 'react-weui'

import { smallIcon } from '../components/icons'

class Event extends Component {
    render() {
        return <div>
            <Carrousel />
            <Preview>
                <PreviewHeader>
                    <PreviewItem label='赛事信息' value='' />
                </PreviewHeader>
                <PreviewBody>
                    <PreviewItem label='赛事名称' value='xxxx' />
                    <PreviewItem label='比赛时间' value='2016/1/1-2016/1/3' />
                    <PreviewItem label='比赛地点' value='四川 成都 xxxxx' />
                    <PreviewItem label='比赛说明' value='说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字' />
                    <PreviewItem label='状态' value='进行中' />
                </PreviewBody>
                <PreviewFooter>
                    <PreviewButton component={Link} to="/m/event/enroll" >报名</PreviewButton>
                    <PreviewButton component={Link} to="/m/event/fight" primary={true} >进入比赛</PreviewButton>
                </PreviewFooter>
            </Preview>
 
            <br />
            <CellsTitle>项目（设置）</CellsTitle>
            <Cells>
                <Cell component={Link} to='/m/event/item' access >
                    <CellBody >项目1</CellBody>
                    <CellFooter />
                </Cell>
                <Cell href="javascript:void(alert('项目2'))" access>
                    <CellBody >
                        项目2
                        <Badge preset='body'>进行中</Badge>
                    </CellBody>
                    <CellFooter />
                </Cell>
                <Cell component={Link} to="/m/event/item" access>
                    <CellBody >项目3</CellBody>
                    <CellFooter />
                </Cell>
            </Cells>
            <CellsTitle>场地与球桌（编排）</CellsTitle>
            <Cells>
                <Cell access >
                    <CellBody >
                        球桌1
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

            <br />
            <CellsTitle>参赛名单</CellsTitle>
            <Cells>
                <Cell access >
                    <CellHeader>{smallIcon}</CellHeader>
                    <CellBody >选手1</CellBody>
                    <CellFooter />
                </Cell>
                <Cell href="javascript:void(alert('选手2'))" access>
                    <CellBody >
                        选手2
                        <Badge preset='body'>种子</Badge>
                    </CellBody>
                    <CellFooter />
                </Cell>
                <Cell href="javascript:void(alert('选手3'))" access>
                    <CellBody >选手3</CellBody>
                    <CellFooter />
                </Cell>
            </Cells>

            <br />
            <CellsTitle>说明</CellsTitle>
            <Cells>
                <Cell >
                    <CellBody >说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字</CellBody>
                </Cell>
            </Cells>

            <br />
            <Footer />
        </div>
    }
}

export default Event