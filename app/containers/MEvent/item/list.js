import React from 'react'
import { Link } from 'react-router'
import { 
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxFooter,
    MediaBoxTitle,
    MediaBoxInfo,
    MediaBoxInfoMeta,
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Badge,
    Flex,
    FlexItem
} from 'react-weui'

import { Plus }  from '../components/icons'

const ItemEdit = () => (
    <Panel>
        <PanelHeader>
            <Flex>
                <FlexItem>赛事名称 项目列表</FlexItem>
                <FlexItem component={Link} to='/m/event/item/add' style={{textAlign: 'right'}}><Plus /></FlexItem>
            </Flex>
        </PanelHeader>
        <PanelBody>
            <MediaBox type='small_appmsg'>
                <Cells>
                    <Cell component={Link} to='/m/event/item' access>
                        <CellHeader></CellHeader>
                        <CellBody>青年组男子单打
                        <MediaBoxInfo>
                                <MediaBoxInfoMeta>男</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta>单</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta extra>15人</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta extra>20场比赛</MediaBoxInfoMeta>
                            </MediaBoxInfo>
                        </CellBody>
                        <CellFooter></CellFooter>
                    </Cell>
                    <Cell component={Link} to='/m/event/item' access>
                        <CellHeader></CellHeader>
                        <CellBody>
                            <MediaBoxTitle>
                                青年组女子单打
                            </MediaBoxTitle>
                            <MediaBoxInfo>
                                <MediaBoxInfoMeta>女</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta>双</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta extra>15人</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta extra>20场比赛</MediaBoxInfoMeta>
                            </MediaBoxInfo>
                        </CellBody>
                        <CellFooter></CellFooter>
                    </Cell>
                    <Cell href='javascript:void(alert("中年组团体赛"))'access>
                        <CellHeader></CellHeader>
                        <CellBody>
                            <MediaBoxTitle>
                                中年组团体赛
                            </MediaBoxTitle>
                            <MediaBoxInfo>
                                <MediaBoxInfoMeta>团</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta extra>15人</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta extra>20场比赛</MediaBoxInfoMeta>
                            </MediaBoxInfo>
                        </CellBody>
                        <CellFooter></CellFooter>
                    </Cell>
                    <Cell href='javascript:void(alert("中年组混合团体"))'access>
                        <CellHeader></CellHeader>
                        <CellBody>
                            <MediaBoxTitle>
                                中年组混合团体
                            </MediaBoxTitle>
                            <MediaBoxInfo>
                                <MediaBoxInfoMeta>混</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta>团</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta extra>15人</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta extra>20场比赛</MediaBoxInfoMeta>
                            </MediaBoxInfo>
                        </CellBody>
                        <CellFooter></CellFooter>
                    </Cell>
                </Cells>
            </MediaBox>
        </PanelBody>
        <PanelFooter></PanelFooter>
    </Panel>
)

export default ItemEdit