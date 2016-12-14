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

import { EventSection, ItemSection } from './sections'

const renderPhases = ({ fields, goto, params, meta: { touched, error } }) => (
   <div>
    <div>
        <IconButton
            onTouchTap={ () => fields.push({ name: '新阶段'+fields.length, sex: '男', way: '单打'}) }
            tooltip='添加阶段'
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
            <TableHeaderColumn tooltip='循环赛，淘汰赛'>比赛方法</TableHeaderColumn>
            <TableHeaderColumn tooltip='团体赛制，盘赛制，局赛制，分赛制'>赛制</TableHeaderColumn>
            <TableHeaderColumn>分组数量</TableHeaderColumn>
            <TableHeaderColumn>状态</TableHeaderColumn>
            <TableHeaderColumn>操作</TableHeaderColumn>
        </TableRow>
        </TableHeader>
        <TableBody>
        {fields.map((field, index) =>{
            let phase  = fields.get(index)
            return (<TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{phase.name}</TableRowColumn>
                <TableRowColumn>{phase.description}</TableRowColumn>
                <TableRowColumn>{phase.rule}</TableRowColumn>
                <TableRowColumn>{phase.groupCount}</TableRowColumn>
                <TableRowColumn>准备中</TableRowColumn>
                <TableRowColumn style={{ overflow: 'visible' }} >
                    <IconButton tooltip="删除" onTouchTap={ () => fields.remove(index) }>
                        <FontIcon className='material-icons'>delete</FontIcon>
                    </IconButton>
                    <IconButton tooltip="配置" onTouchTap={ () => goto(`/event/settings/phase/${params.itemNo}/${index}`) }>
                        <FontIcon className='material-icons'>settings</FontIcon>
                    </IconButton>
                </TableRowColumn>
            </TableRow>)
        })}
        </TableBody>
    </Table>
   </div> 
)

const renderPhasesWithData = connect(null,
    dispatch => ({
        save: data => dispatch({ type: SUBMIT, data }),
        goto: uri => dispatch(push(uri))
    }))(renderPhases)


const renderItems = ({ params, fields }) => (
    <div>
        {fields.map((field, index) => {
                return index === parseInt(params.itemNo) && (<div key={index}>
                    <FormSection name={field}>
                        <ItemSection  disabled={true}/>
                    </FormSection>
                    <FieldArray name={`${field}.phases`} params={params} component={renderPhasesWithData} />
                </div>)
            })
        }
    </div>
)

const Settings = ({ handleSubmit, params }) => (
    <form onSubmit={handleSubmit}>
        <FormSection name=''>
            <EventSection  disabled={true}/>
        </FormSection>
        <FieldArray name='items' params={params} component={renderItems} />
    </form>
)

const SettingsForm = reduxForm({
    form: 'settings',
    destroyOnUnmount: false,
})(Settings)

export default SettingsForm
