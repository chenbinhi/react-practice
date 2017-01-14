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

class Item extends Component {
    render() {
        return <div>
            <Carrousel />
            <Preview>
                <PreviewHeader>
                    <PreviewItem label='项目信息' value='' />
                </PreviewHeader>
                <PreviewBody>
                    <PreviewItem label='项目名称' value='xxxx' />
                    <PreviewItem label='比赛时间' value='2016/1/1-2016/1/3' />
                    <PreviewItem label='比赛地点' value='四川 成都 xxxxx' />
                    <PreviewItem label='比赛说明' value='说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字' />
                    <PreviewItem label='状态' value='进行中' />
                </PreviewBody>
                <PreviewFooter>
                    <PreviewButton component={Link} to="/m/event/result">编辑</PreviewButton>
                    <PreviewButton component={Link} to="/m/event/enroll" >报名</PreviewButton>
                    <PreviewButton primary component={Link} to="/m/event/fight">进入比赛</PreviewButton>
                </PreviewFooter>
            </Preview>
 
            <br />
            <CellsTitle>成绩公告</CellsTitle>
            <Cells>
                <Cell access href="javascript:void(alert('张继科'))" >
                    <CellHeader>{smallIcon}</CellHeader>
                    <CellBody >冠军</CellBody>
                    <CellFooter>
                        <div style={ {display: 'flex', alignItems: 'center' }} >
                        {smallIcon}
                        <div>张继科</div>
                        </div>
                    </CellFooter>
                </Cell>
                <Cell access href="javascript:void(alert('马龙'))" >
                    <CellHeader>{smallIcon}</CellHeader>
                    <CellBody >亚军</CellBody>
                    <CellFooter>
                        马龙
                    </CellFooter>
                </Cell>
                <Cell access href="javascript:void(alert('小胖'))" >
                    <CellHeader>{smallIcon}</CellHeader>
                    <CellBody >季军</CellBody>
                    <CellFooter>
                        小胖
                    </CellFooter>
                </Cell>
                <Cell component={Link} to="/m/event/result" access link>
                    <CellBody >更多</CellBody>
                    <CellFooter />
                </Cell>
            </Cells>

            <br />
            <CellsTitle>阶段（设置）</CellsTitle>
            <Cells>
                <Cell access>
                    <CellBody >阶段1</CellBody>
                    <CellFooter />
                </Cell>
                <Cell href="javascript:void(alert('阶段2'))" access>
                    <CellBody >
                        阶段2
                        <Badge preset='body'>进行中</Badge>
                    </CellBody>
                    <CellFooter />
                </Cell>
                <Cell component={Link} to="/m/event/phase" access>
                    <CellBody >阶段3</CellBody>
                    <CellFooter />
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

export default Item