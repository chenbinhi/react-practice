import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'


const Navigator = (props) => (
   <Drawer { ...props } >
        <MenuItem
            value='赛事'
            primaryText='赛事'
            checked={true}
            leftIcon={<FontIcon className='material-icons'>event</FontIcon>}
            onTouchTap={ () => props.goto('/event/create') } 
            />
        <MenuItem
            value='设置'
            primaryText='设置'
            leftIcon={<FontIcon className='material-icons'>settings</FontIcon>}
            onTouchTap={ () => props.goto('/event/settings') } 
            />
        <MenuItem
            value='编排'
            primaryText='编排'
            leftIcon={<FontIcon className='material-icons'>schedule</FontIcon>}
            onTouchTap={ () => props.goto('/event/schedule') } 
            />
        <MenuItem
            value='场控'
            primaryText='场控'
            leftIcon={<FontIcon className='material-icons'>pan_tool</FontIcon>}
            onTouchTap={ () => props.goto('/event/control') } 
            />
        <MenuItem
            value='成绩'
            primaryText='成绩'
            leftIcon={<FontIcon className='material-icons'>pageview</FontIcon>}
            onTouchTap={ () => props.goto('/event/result') } 
            />
    </Drawer> 
)

export default connect(null, (dispatch, ownProps) => {
    return {
        goto: (uri) => {
            dispatch(push(uri))
            ownProps.onRequestChange && ownProps.onRequestChange()
        }
    }
})(Navigator)