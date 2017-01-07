import React, { Component } from 'react'

import Carrousel from './carousel'

import {
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Cells,
    CellsTitle,
    Footer,
    FooterLinks,
    FooterLink,
    FooterText,
    Preview,
    PreviewHeader,
    PreviewBody,
    PreviewFooter,
    PreviewButton,
    PreviewItem,
    Badge,
} from 'react-weui'

const smallUserIcon =
<img
src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
style={{
    width: '20px',
    marginRight: '5px',
    display: 'block'
}}/>

class EventDetail extends Component {
    static displayName = 'EventDetail-modified'
    static defaultProps = {

    }

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
                    <PreviewButton primary={true} href="/meventfight">进入比赛</PreviewButton>
                </PreviewFooter>
            </Preview>
 
            <br />
            <CellsTitle>项目（设置）</CellsTitle>
            <Cells>
                <Cell access >
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
                <Cell href="/meventitem" access>
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
                    <CellHeader>{smallUserIcon}</CellHeader>
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
            <Footer>
                <FooterLinks>
                    <FooterLink href="javascript:void(alert('联系客服'))">有任何疑问请联系客服</FooterLink>
                </FooterLinks>
                <FooterText>Copyright &copy; 2016 xxx.com </FooterText>
            </Footer>
        </div>
    }
}

export default EventDetail