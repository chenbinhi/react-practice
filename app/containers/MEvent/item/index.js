import React, { Component } from 'react'
import { Link } from 'react-router'

import PreviewButton from '../components/PreviewButton'
import Carrousel from '../components/carousel'
import Footer from '../components/footer'
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

const smallUserIcon =
<img
src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
style={{
    width: '20px',
    marginRight: '5px',
    display: 'block'
}}/>



class Item extends Component {
    static displayName = 'Item-modified'
    static defaultProps = {

    }

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
                    <PreviewButton component={Link} to="/meventresult">编辑</PreviewButton>
                    <PreviewButton primary component={Link} to="/meventfight">进入比赛</PreviewButton>
                </PreviewFooter>
            </Preview>
 
            <br />
            <CellsTitle>成绩公告</CellsTitle>
            <Cells>
                <Cell access href="javascript:void(alert('张继科'))" >
                    <CellHeader>{smallUserIcon}</CellHeader>
                    <CellBody >冠军</CellBody>
                    <CellFooter>
                        <div style={ {display: 'flex', alignItems: 'center' }} >
                        {smallUserIcon}
                        <div>张继科</div>
                        </div>
                    </CellFooter>
                </Cell>
                <Cell access href="javascript:void(alert('马龙'))" >
                    <CellHeader>{smallUserIcon}</CellHeader>
                    <CellBody >亚军</CellBody>
                    <CellFooter>
                        马龙
                    </CellFooter>
                </Cell>
                <Cell access href="javascript:void(alert('小胖'))" >
                    <CellHeader>{smallUserIcon}</CellHeader>
                    <CellBody >季军</CellBody>
                    <CellFooter>
                        小胖
                    </CellFooter>
                </Cell>
                <Cell component={Link} to="/meventresult" access link>
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
                <Cell component={Link} to="/meventphase" access>
                    <CellBody >阶段3</CellBody>
                    <CellFooter />
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
            <Footer />
        </div>
    }
}

export default Item