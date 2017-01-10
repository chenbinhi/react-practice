import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Carousel from '../components/Carousel'
import Search from './search'
import EventList from './list'


import { 
    Tab,
    TabBody,
    Article,
    NavBar,
    NavBarItem,
    ActionSheet,
    Button,
    ButtonArea,
    Grids,
} from 'react-weui'

import FaPlusCircle from 'react-icons/lib/fa/plus-circle'
import {
    PingPongIcon,
    YuMaoQiuIcon,
    ZhuQiuIcon,
    LanQiuIcon,
    XiangQiIcon,
    WuDaoIcon,
    MaJiangIcon,
    HotIcon,
    HeartIcon,
    PlusCircle,
} from '../components/icons'

const classData = [
    {
        icon: <PingPongIcon color='red' />,
        label: '乒乓球',
        href: 'javascript:void(alert("href:乒乓球"))'
    },
    {
        icon: <YuMaoQiuIcon />,
        label: '羽毛球',
        href: 'javascript:void(alert("href:羽毛球"))'
    },
    {
        icon: <ZhuQiuIcon />,
        label: '足球',
        href: '',
        onClick(e) {
            alert('onClick: 足球')
            e.preventDefault()
        }
    },
    {
        icon: <LanQiuIcon />,
        label: '篮球',
    },
    {
        icon: <XiangQiIcon />,
        label: '象棋',
    },
    {
        icon: <PlusCircle />,
        label: '围棋',
    },
    {
        icon: <WuDaoIcon />,
        label: '舞蹈',
    },
    {
        icon: <MaJiangIcon />,
        label: '麻将',
    },
    {
        icon: <PlusCircle />,
        label: '运动会',
    },
    {
        icon: <PlusCircle size={28} />,
        label: '铁人三项',
    },
    {
        icon: <HotIcon size={28} />,
        label: '拳击',
    },
    {
        icon: <HeartIcon  color='red'/>,
        label: '更多',
        href: '',
        onClick(e) {
            alert('onClick: 更多')
            // e.preventDefault()
            e.stopPropagation()
        }
    },
]

export default class EventMain extends Component {
    state = {
        tab: 0,
        actionSheetShow: false,
        actionSheetSelect: ''
    }

    render() {
        return (
            <div style={{ display: this.state.tab == 0 ? null : 'none'}}>
                <Carousel />
                <Grids data={classData}/>
                <Search />
                <EventList />
                <Link to='/meventadd'>
                    <FaPlusCircle size={50} style={{
                        color: 'green',
                        position: 'fixed',
                        bottom: 70,
                        right: 10,
                        zIndex: 1000,
                        // backgroundColor: 'white'
                    }} onClick={e=>this.setState({actionSheetShow: true})} />
                </Link>
                <ActionSheet
                    menus={
                        [{
                            label: '乒乓球',
                            onClick: () => {
                                this.setState({ actionSheetSelect: '乒乓球' })

                            }
                        }, {
                            label: '羽毛球',
                            onClick: ()=> {
                                this.setState({ actionSheetSelect: '羽毛球' })
                            }
                        }]
                    }
                    actions={
                        [{
                            label: '取消',
                            onClick: () => {
                                this.setState({ actionSheetShow: false })
                            }
                        }]
                    }
                    show={this.state.actionSheetShow}
                    onRequestClose={e=>this.setState({actionSheetShow: false})}
                />
            </div>)
    }
}