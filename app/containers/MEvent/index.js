import React, { Component } from 'react'

import 'weui'
import 'react-weui/lib/react-weui.min.css'

import Event from './event/main'
import Me from './me'

import { 
    Tab,
    TabBody,
    TabBar,
    TabBarItem,
    TabBarIcon,
    TabBarLabel,
    Article,
    NavBar,
    NavBarItem,
} from 'react-weui'

import IconButton from 'assets/images/icon_nav_button.png';
import IconMsg from 'assets/images/icon_nav_msg.png';
import IconArticle from 'assets/images/icon_nav_article.png';
import IconCell from 'assets/images/icon_nav_cell.png';


export default class EventApp extends Component {
    state = {
        tab: 0
    }

    render() {
        return (
            <Tab style={{ backgroundColor: '#F8F8F8'}}>
                <TabBody>
                    <div style={{display: this.state.tab == 0 ? null : 'none'}} >
                        <Event />
                    </div>
                    <div style={{display: this.state.tab == 1 ? null : 'none'}}>
                       <Me />
                    </div>
                </TabBody>
                <TabBar>
                    <TabBarItem
                        active={this.state.tab == 0}
                        onClick={e=>this.setState({tab:0})}
                        icon={<img src={IconButton}/>}
                        label="比赛"
                    />
                    <TabBarItem
                        active={this.state.tab == 1}
                        onClick={e=>this.setState({tab:1})}
                        icon={<img src={IconCell}/>}
                        label="我的"
                    />
                </TabBar>
            </Tab>
        )
    }
}