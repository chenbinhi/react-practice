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

const eventIcon = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==" />

const smallEventIcon =
<img
src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
style={{
    width: '20px',
    marginRight: '5px',
    display: 'block'
}}/>

const CellMore = () => (
    <Cell access link>
        <CellBody>More</CellBody>
        <CellFooter />
    </Cell>
)

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
                    <CellHeader>{smallEventIcon}</CellHeader>
                    <CellBody>赛事名</CellBody>
                    <CellFooter/>
                </Cell>
            </MediaBox>
            <MediaBox type='small_appmsg'>
                <Cell>
                    <CellHeader>{smallEventIcon}</CellHeader>
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