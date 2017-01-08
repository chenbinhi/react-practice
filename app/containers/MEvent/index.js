import React, { Component } from 'react'

import 'weui'
import 'react-weui/lib/react-weui.min.css'

import Event from './event'
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
    // constructor(props) {
    //     super(props)
    // }
    state = {
        tab: 0
    }

    render() {
        return (
            <div style={{ backgroundColor: '#F8F8F8'}} >
            <Tab>
                <TabBody>
                    <div style={{display: this.state.tab == 0 ? null : 'none'}} >
                        <Event />
                    </div>
                    <Article style={{display: this.state.tab == 1 ? null : 'none'}}>
                        <h1>Page 2</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>2.1 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                        </section>
                    </Article>
                    <Article style={{display: this.state.tab == 2 ? null : 'none'}}>
                        <h1>Page 3</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>3.1 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                        </section>
                    </Article>
                    <div style={{display: this.state.tab == 3 ? null : 'none'}}>
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
                    <TabBarItem active={this.state.tab == 1} onClick={e=>this.setState({tab:1})}>
                        <TabBarIcon>
                            <img src={IconMsg}/>
                        </TabBarIcon>
                        <TabBarLabel>俱乐部</TabBarLabel>
                    </TabBarItem>
                    <TabBarItem
                        active={this.state.tab == 2}
                        onClick={e=>this.setState({tab:2})}
                        icon={<img src={IconArticle}/>}
                        label="资讯"
                    />
                    <TabBarItem
                        active={this.state.tab == 3}
                        onClick={e=>this.setState({tab:3})}
                        icon={<img src={IconCell}/>}
                        label="我的"
                    />
                </TabBar>
            </Tab>
            </div>
        )
    }
}