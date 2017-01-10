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


class Phase extends Component {
    render() {
        return <div>
            <Preview>
                <PreviewHeader>
                    <PreviewItem label='阶段信息' value='' />
                </PreviewHeader>
                <PreviewBody>
                    <PreviewItem label='赛事' value='xxxx' />
                    <PreviewItem label='项目' value='xxxx' />
                    <PreviewItem label='类型' value='循环赛' />
                    <PreviewItem label='比赛时间' value='2016/1/1-2016/1/3' />
                    <PreviewItem label='分组数' value='3' />
                    <PreviewItem label='参赛人数' value='5' />
                    <PreviewItem label='状态' value='进行中(第n轮第n场)' />
                </PreviewBody>
                <PreviewFooter>
                    <PreviewButton component={Link} to="/meventresult">编辑</PreviewButton>
                    <PreviewButton primary component={Link} to="/meventfight">进入比赛</PreviewButton>
                </PreviewFooter>
            </Preview>
 
            <br />
            <CellsTitle>得分</CellsTitle>
            <Cells>
                <Cell access href="javascript:void(alert('张继科'))" >
                    <CellHeader>{smallIcon}</CellHeader>
                    <CellBody >张继科</CellBody>
                    <CellFooter>
                        <div style={ {display: 'flex', alignItems: 'center' }} >
                        {smallIcon}
                        <div>16分</div>
                        </div>
                    </CellFooter>
                </Cell>
                <Cell access href="javascript:void(alert('马龙'))" >
                    <CellHeader>{smallIcon}</CellHeader>
                    <CellBody >马龙</CellBody>
                    <CellFooter>
                        12分
                    </CellFooter>
                </Cell>
                <Cell access href="javascript:void(alert('小胖'))" >
                    <CellHeader>{smallIcon}</CellHeader>
                    <CellBody >小胖</CellBody>
                    <CellFooter>
                        10分
                    </CellFooter>
                </Cell>
                <Cell component={Link} to="/meventresult" access link>
                    <CellBody >更多</CellBody>
                    <CellFooter />
                </Cell>
            </Cells>

            <br />
            <CellsTitle>分组</CellsTitle>
            <Cells>
                <Cell access>
                    <CellBody >A组</CellBody>
                    <CellFooter>4人</CellFooter>
                </Cell>
                <Cell href="javascript:void(alert('B组'))" access>
                    <CellBody >
                        B组
                        <Badge preset='body'>进行中</Badge>
                    </CellBody>
                    <CellFooter>4人</CellFooter>
                </Cell>
                <Cell component={Link} to="/meventgroup" access>
                    <CellBody >C组</CellBody>
                    <CellFooter>4人</CellFooter>
                </Cell>
            </Cells>

            <br />

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

export default Phase