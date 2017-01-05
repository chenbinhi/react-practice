import React, { Component } from 'react'

import Carousel from './carousel'
import EventInfo from './eventInfo'
import Search from './search'

import { 
    Tab,
    TabBody,
    Article,
    NavBar,
    NavBarItem,
    ActionSheet,
    Button,
    ButtonArea
} from 'react-weui'

export default class Event extends Component {
    state = {
        tab: 0,
        actionSheetShow: false,
        actionSheetSelect: ''
    }

    render() {
        return (
            <Tab>
                <NavBar>
                    <NavBarItem active={this.state.tab == 0} onClick={e=>this.setState({tab:0})}>首页</NavBarItem>
                    <NavBarItem active={this.state.tab == 1} onClick={e=>this.setState({tab:1})}>进行中</NavBarItem>
                    <NavBarItem active={this.state.tab == 2} onClick={e=>this.setState({tab:2})}>最热</NavBarItem>
                </NavBar>
                <TabBody>
                    <div>
                    <Carousel />
                    <ButtonArea>
                    <Button onClick={e=>this.setState({actionSheetShow: true})}>发布新赛事</Button>
                    </ButtonArea>
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
                    <Search />
                    <EventInfo />
                    <Article style={{display: this.state.tab == 0 ? null : 'none'}}>
                        <h1>Page 1</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>1.1 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                        </section>
                    </Article>
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
                            <section>
                                <h3>2.2 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                            <section>
                                <h3>3.2 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </section>
                        </section>
                    </Article>
                </TabBody>
            </Tab>
        )
    }
}