import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { reduxForm, Field, FieldArray, FormSection } from 'redux-form'

import { TextField } from 'redux-form-material-ui'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import Divider from 'material-ui/Divider' 
import DeleteSvgButton from 'material-ui/svg-icons/action/delete'

import { EventSection } from './sections'


const renderItemsOld = ({ fields, meta: { touched, error } }) => (
   <div>
    <div>
        <IconButton
            onTouchTap={ () => fields.push({ name: '新项目'+fields.length, sex: '男', way: '单打'}) }
            tooltip='添加项目'
            >
            <FontIcon className='material-icons'>add</FontIcon>
        </IconButton>
        { touched && error && <span>{error}</span>}
    </div>
    {fields.map((field, index) => (
    <div key={index}>
        <Card>
            <CardHeader
                title={fields.get(index).name}
                subtitle={fields.get(index).description}
                actAsExpander={true}
                showExpandableButton={true}
                />
            <CardActions>
                <FlatButton label="删除" onTouchTap={ () => fields.remove(index) } />
                <RaisedButton label="配置" />
            </CardActions>
            <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
        </Card>
    </div>)
    )}
   </div> 
)
const renderItems = ({ fields, meta: { touched, error }, goto }) => (
   <div>
    <div>
        <IconButton
            onTouchTap={ () => fields.push({ name: '新项目'+fields.length, sex: '男', way: '单打'}) }
            tooltip='添加项目'
            >
            <FontIcon className='material-icons'>add</FontIcon>
        </IconButton>
        { touched && error && <span>{error}</span>}
    </div>
    <Table>
        <TableHeader>
        <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>名称</TableHeaderColumn>
            <TableHeaderColumn>描述</TableHeaderColumn>
            <TableHeaderColumn tooltip='男子，女子，混合，不限'>参赛性别</TableHeaderColumn>
            <TableHeaderColumn tooltip='单打，双打，团体'>参赛方式</TableHeaderColumn>
            <TableHeaderColumn>阶段数量</TableHeaderColumn>
            <TableHeaderColumn>状态</TableHeaderColumn>
            <TableHeaderColumn>操作</TableHeaderColumn>
        </TableRow>
        </TableHeader>
        <TableBody>
        {fields.map((field, index) =>{
            let item  = fields.get(index)
            return (<TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{item.name}</TableRowColumn>
                <TableRowColumn>{item.description}</TableRowColumn>
                <TableRowColumn>{item.sex}</TableRowColumn>
                <TableRowColumn>{item.way}</TableRowColumn>
                <TableRowColumn>{item.phaseCount}</TableRowColumn>
                <TableRowColumn>准备中</TableRowColumn>
                <TableRowColumn style={{ overflow: 'visible' }} >
                    <IconButton tooltip="删除" onTouchTap={ () => fields.remove(index) }>
                        <FontIcon className='material-icons'>delete</FontIcon>
                    </IconButton>
                    <IconButton tooltip="配置" onTouchTap={ () => goto(`/event/settings/item/${index}`) }>
                        <FontIcon className='material-icons'>settings</FontIcon>
                    </IconButton>
                </TableRowColumn>
            </TableRow>)
        })}
        </TableBody>
    </Table>
   </div> 
)

const renderItemsWithData = connect(null,
    dispatch => ({
        save: data => dispatch({ type: SUBMIT, data }),
        goto: uri => dispatch(push(uri))
    }))(renderItems)

const Settings = ({ handleSubmit, children }) => (
    <div>
    <form onSubmit={handleSubmit}>
        <FormSection name=''>
            <EventSection  disabled={true}/>
        </FormSection>
        <FieldArray name='items' component={renderItemsWithData} />
    </form>
    { children }
    </div>
)

const SettingsForm = reduxForm({
    form: 'settings',
    destroyOnUnmount: false,
    enableReinitialize: true,
    // keepDirtyOnReinitialize: false,
})(Settings)

export default connect(
    state => ({
        initialValues: state.global.currentEvent 
    })
)(SettingsForm)