import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import { Tabs, Tab } from 'material-ui/Tabs'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import SwapeableViews from 'react-swipeable-views'
import Paper from 'material-ui/Paper'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>
const userIcon = <FontIcon className="material-icons">face</FontIcon>
const timeIcon = <FontIcon className="material-icons">timelapse</FontIcon>
import SvgIcon from 'material-ui/SvgIcon'
import {blue500, red500, greenA200} from 'material-ui/styles/colors'
const HotIcon = <SvgIcon color={red500} width="200" height="200" >
        <path d="M510.079174 65.748447c-245.081888 0-443.765125 199.928449-443.765125 446.544219 0 246.622934 198.683237 446.544219 443.765125 446.544219 245.083935 0 443.767172-199.921285 443.767172-446.544219C953.846346 265.675872 755.163108 65.748447 510.079174 65.748447zM590.691456 907.502729c187.992309-218.470757-44.206637-269.364891-44.206637-269.364891 45.7171 94.279247-50.791888 186.081069-50.791888 186.081069 22.856503-47.143717-63.497791-99.244328-63.497791-99.244328-7.617811 79.400375-29.099956 120.950699-29.099956 120.950699-23.001819 24.39562-33.929141 40.173978-37.71144 50.330292 12.296563 4.108574 24.884781 7.967462 38.028678 11.247158 0 0-48.865945 17.851577-38.028678-11.247158-144.505087-48.298006-225.019128-150.712537-110.973005-236.238422 58.571389-43.921325 76.192438-161.269987 76.192438-161.269987 27.939478 27.291576 38.097242 74.440409 38.097242 74.440409 126.992513-37.21867 114.291726-272.92395 114.291726-272.92395 129.529395 71.954799 149.846969 168.71454 165.087708 173.675528 15.238692 4.959965 12.696693-62.025659 12.696693-62.025659 96.508988 94.281293 139.685112 198.48661 139.685112 198.48661C959.440996 825.837778 590.691456 907.502729 590.691456 907.502729z"  ></path>
    </SvgIcon>

const nearbyIcon = <IconLocationOn />
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import Drawer from './Drawer'
import Login from './Login'

class Event extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openDrawer: false,
            openLogin: false,
            bottomNavigationIndex: 0,
            tabIndex: 0,
        } 
        this.handleDrawer = this.handleDrawer.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleBottomNavigation = this.handleBottomNavigation.bind(this)
        this.handleTab = this.handleTab.bind(this)
    }

    handleDrawer() {
        this.setState({
            openDrawer: ! this.state.openDrawer
        })
    }

    handleLogin() {
        this.setState({
            openLogin: ! this.state.openLogin
        })
    }

    handleBottomNavigation(index) {
        this.setState({
            bottomNavigationIndex: index
        })
    }

    handleTab(index) {
        this.setState({
            tabIndex: index
        })
    }

    getCurrentPageName() {
        if (this.props.routes && this.props.routes.length > 0) {
            let currentRoute = this.props.routes[this.props.routes.length-1]
            switch (currentRoute.path) {
                case 'event':
                case 'create':
                    return '创建'
                case 'settings':
                    return '设置'
                case 'schedule':
                    return '编排'
                case 'control':
                    return '场控'
                case 'result':
                    return '成绩'
                default:
                    return ''
            }
        }
        return ''
    }
    render() {
        let { openDrawer, openLogin } = this.state
        const actions = [
            <FlatButton label='取消' onTouchTap={this.handleLogin} />,
            <RaisedButton label='登录' onTouchTap={this.handleLogin} />
        ]
        const styles = {
            appBar: {
                flexWrap: 'wrap',
            },
            tabs: {
                width: '100%',
            },
        }
        return (<div>
            <AppBar
                title={ this.getCurrentPageName() } 
                style={styles.appBar}
                iconElementRight={<FlatButton label="登录" onTouchTap={this.handleLogin}/>}
                onLeftIconButtonTouchTap={this.handleDrawer} >
                <IconButton tooltip="搜索" onTouchTap={ () => {} } >
                    <FontIcon className='material-icons'>search</FontIcon>
                </IconButton>
                <Tabs
                    style={styles.tabs} 
                    value={this.state.tabIndex}
                    onChange={this.handleTab}
                    >
                    <Tab
                        icon={userIcon}
                        label="我"
                        value={0}
                    />
                    <Tab
                        label="热门"
                        value={1}
                        icon={HotIcon}
                    />
                    <Tab label="进行中" value={2} icon={timeIcon} />
                    <Tab label="进行中" value={3} icon={timeIcon} />
                    <Tab label="进行中" value={4} icon={timeIcon} />
                    <Tab label="进行中" value={5} icon={timeIcon} />
                    <Tab label="进行中" value={6} icon={timeIcon} />
                </Tabs>
            </AppBar>
            <SwapeableViews
                index={this.state.tabIndex}
                onChangeIndex={this.handleTab}
                >
                <div label="我">
                    <p style={{marginTop: 16 }}>我的比赛</p>
                </div>
                <div label="热门" >热门的比赛</div>
                <div label="进行中" >进行中的比赛</div>
            </SwapeableViews>
            <Drawer
                open={openDrawer}
                docked={false}
                width={200}
                onRequestChange={this.handleDrawer} />
            <Dialog
                open={openLogin}
                title='登录'
                actions={actions}
                onRequestClose={this.handleLogin} >
                <Login onCancel={this.handleLogin} />
            </Dialog>
                {this.props.children}
            <FloatingActionButton 
                secondary={true}
                style={{
                    position: 'fixed',
                    bottom: '70px',
                    right: '5%'
                }}
                onTouchTap={ e => alert('click')}
            >
                <FontIcon className='material-icons'>settings</FontIcon>
            </FloatingActionButton>
            <Paper zDepth={1} style={{ position: 'fixed', bottom: 0, width: '100%'}}>
                <BottomNavigation selectedIndex={this.state.bottomNavigationIndex} >
                    <BottomNavigationItem
                        label="Recents"
                        icon={recentsIcon}
                        onTouchTap={() => this.handleBottomNavigation(0)}
                    />
                    <BottomNavigationItem
                        label="Favorites"
                        icon={favoritesIcon}
                        onTouchTap={() => this.handleBottomNavigation(1)}
                    />
                    <BottomNavigationItem
                        label="Nearby"
                        icon={nearbyIcon}
                        onTouchTap={() => this.handleBottomNavigation(2)}
                    />
                </BottomNavigation>
            </Paper>
        </div>)
    }
}

export default Event