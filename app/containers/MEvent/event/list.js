import React, { Component } from 'react'
import { Link } from 'react-router'

import {
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    MediaBoxInfo,
    MediaBoxInfoMeta,
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter
} from 'react-weui'

import Rating from 'react-rating'
import FaHeartO from 'react-icons/lib/fa/heart-o'
import FaHeart from 'react-icons/lib/fa/heart'

import { eventIcon, smallIcon } from '../components/icons'
import CellMore from '../components/CellMore'

const EventList = (props) => (
    <div>
    <Panel>
        <PanelHeader>
            乒乓球赛事列表
        </PanelHeader>
        <PanelBody>
            <Link to='/mevent'>
            <MediaBox type='appmsg' href="">
                <MediaBoxHeader>{eventIcon}</MediaBoxHeader>
                <MediaBoxBody href=''>
                    <MediaBoxTitle>赛事名</MediaBoxTitle>
                    <MediaBoxDescription>赛事描述</MediaBoxDescription>
                    <MediaBoxInfo>
                        <MediaBoxInfoMeta>专业</MediaBoxInfoMeta>
                        <MediaBoxInfoMeta>官方</MediaBoxInfoMeta>
                        <MediaBoxInfoMeta>奖金</MediaBoxInfoMeta>
                    </MediaBoxInfo>
                </MediaBoxBody>
                <Rating start={2} step={1} end={6} 
                    empty={<FaHeartO color='red' style={ { marginRight: 2 }}/>}
                    full={<FaHeart color='red' style={ { marginRight: 2 }}/>} 
                    onClick={ (rate, e) => {
                        alert(rate)
                        e.stopPropagation()
                        e.preventDefault()
                    }}/>
            </MediaBox>
            </Link>
            <MediaBox type='appmsg' onClick={e=> alert('onClick：打开赛事详情页面')}>
                <MediaBoxHeader>{eventIcon}</MediaBoxHeader>
                <MediaBoxBody>
                    <MediaBoxTitle>赛事名</MediaBoxTitle>
                    <MediaBoxDescription>赛事描述</MediaBoxDescription>
                    <MediaBoxInfo>
                        <MediaBoxInfoMeta>专业</MediaBoxInfoMeta>
                        <MediaBoxInfoMeta>官方</MediaBoxInfoMeta>
                        <MediaBoxInfoMeta>奖金</MediaBoxInfoMeta>
                    </MediaBoxInfo>
                </MediaBoxBody>
                <FaHeartO />
            </MediaBox>
        </PanelBody>
        <PanelFooter>
            <CellMore />
        </PanelFooter>
    </Panel>
    <Panel>
        <PanelHeader>羽毛球赛事列表</PanelHeader>
        <PanelBody>
            <MediaBox type='small_appmsg'>
                <Cell>
                    <CellHeader>{smallIcon}</CellHeader>
                    <CellBody>赛事名</CellBody>
                    <CellFooter/>
                </Cell>
            </MediaBox>
            <MediaBox type='small_appmsg'>
                <Cell>
                    <CellHeader>{smallIcon}</CellHeader>
                    <CellBody>赛事名</CellBody>
                    <CellFooter/>
                </Cell>
            </MediaBox>
        </PanelBody>
        <PanelFooter>
            <CellMore />
        </PanelFooter>
    </Panel>
    <Panel>
        <PanelHeader>其它赛事列表</PanelHeader>
        <PanelBody>
            <MediaBox type='text'>
                    <MediaBoxTitle>赛事名</MediaBoxTitle>
                    <MediaBoxDescription>赛事描述</MediaBoxDescription>
                    <MediaBoxInfo>
                        <MediaBoxInfoMeta>专业</MediaBoxInfoMeta>
                        <MediaBoxInfoMeta>官方</MediaBoxInfoMeta>
                        <MediaBoxInfoMeta>奖金</MediaBoxInfoMeta>
                    </MediaBoxInfo>
            </MediaBox>
            <MediaBox type='text'>
                    <MediaBoxTitle>赛事名</MediaBoxTitle>
                    <MediaBoxDescription>赛事描述</MediaBoxDescription>
                    <MediaBoxInfo>
                        <MediaBoxInfoMeta>专业</MediaBoxInfoMeta>
                        <MediaBoxInfoMeta>官方</MediaBoxInfoMeta>
                        <MediaBoxInfoMeta>奖金</MediaBoxInfoMeta>
                    </MediaBoxInfo>
            </MediaBox>
        </PanelBody>
        <PanelFooter>
            <CellMore />
        </PanelFooter>
    </Panel>
    </div>
)

export default EventList