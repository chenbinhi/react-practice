import React, { Component } from 'react'

import {
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Cells,
    CellsTitle,
    Footer,
    FooterLinks,
    FooterLink,
    FooterText,
    Preview,
    PreviewHeader,
    PreviewBody,
    PreviewFooter,
    PreviewItem,
    Badge,
    SearchBar,
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
} from 'react-weui'

import SampleData from './useless/nameDB';

import { smallIcon, appMsgIcon } from './components/icons'
import CellMore from './components/CellMore'


class Fight extends Component {
    state = {
        searchText: '',
        results: SampleData.slice(0, 3), 
    };

    handleChange = (text, e) => {
        let keywords = [text]
        let results = SampleData.filter(/./.test.bind(new RegExp(keywords.join('|'),'i')))
        if (!text) {
            results = SampleData
        }
        if(results.length > 3) results = results.slice(0,3)
        this.setState({
            results,
            searchText:text,
        })
    }

    render() {
        return <div>
                <SearchBar
                    onChange={this.handleChange}
                    placeholder="比赛查找"
                    lang={{ cancel: '取消' }}
                />
                <Panel style={{ marginTop: 0}}>
                    <PanelHeader>
                        查找到的比赛
                    </PanelHeader>
                    <PanelBody>
                        {
                            this.state.results.length > 0 ?
                                this.state.results.map((item,i)=>{
                                    return (
                                        <MediaBox key={i} type="appmsg" href="javascript:void(0);">
                                            <MediaBoxHeader>{appMsgIcon}</MediaBoxHeader>
                                            <MediaBoxBody>
                                                <MediaBoxTitle>{item}</MediaBoxTitle>
                                                <MediaBoxDescription>
                                                    You may like this name.
                                                </MediaBoxDescription>
                                            </MediaBoxBody>
                                        </MediaBox>
                                    )
                                })
                                : <MediaBox>Can't find any！</MediaBox>
                        }
                    </PanelBody>
                    <PanelFooter href="javascript:void(0);">
                        <CellMore />
                    </PanelFooter>
                </Panel>
            </div> 
    }
}

export default Fight