import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import { Tabs, Tab } from 'material-ui/Tabs'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import Drawer from './Drawer'
import Login from './Login'

class Event extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openDrawer: false,
            openLogin: false,
        } 
        this.handleDrawer = this.handleDrawer.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
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
                <Tabs style={styles.tabs}>
                    <Tab label="ALL" />
                    <Tab label="CAMERA" />
                    <Tab label="RECENT" />
                </Tabs>
            </AppBar>
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
        </div>)
    }
}

export default Event