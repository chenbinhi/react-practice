import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { TextField, SelectField } from 'redux-form-material-ui'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'

export const EventSection = ({ disabled }) => (
    <div>
        <FontIcon className='material-icons'>event_note</FontIcon>
        <Field name='eventType' hintText='类别' floatingLabelText='类别' component={SelectField} disabled={disabled}>
            <MenuItem value='乒乓球' primaryText='乒乓球' />
            <MenuItem value='羽毛球' primaryText='羽毛球' />
            <MenuItem value='网球' primaryText='网球' />
        </Field>
        <Field name='eventName' hintText='请输入赛事名称' floatingLabelText='赛事名称'  component={TextField} disabled={disabled} />
    </div>
)

export const ItemSection = () => (
    <div>
        <Field name='name' hintText='项目名称' floatingLabelText='项目名称' component={TextField}/>
        <Field name='description' hintText='项目描述' floatingLabelText='项目描述' multiLine={true} rows={1} rowsMax={4} component={TextField}/>
        <Field name='sex' hintText='参赛者性别' floatingLabelText='参赛者性别' component={SelectField}>
            <MenuItem value='男' primaryText='男' />
            <MenuItem value='女' primaryText='女' />
            <MenuItem value='男女混合' primaryText='男女混合' />
            <MenuItem value='不限' primaryText='不限' />
        </Field>
        <Field name='way' hintText='比赛方式' floatingLabelText='比赛方式'  component={SelectField}>
            <MenuItem value='单打' primaryText='单打' />
            <MenuItem value='双打' primaryText='双打' />
            <MenuItem value='团体' primaryText='团体' />
        </Field> 
    </div>
)

export const PhaseSection = () => (
    <div>
        <Field name='name' hintText='阶段名称' floatingLabelText='阶段名称' component={TextField}/>
        <Field name='description' hintText='阶段描述' floatingLabelText='阶段描述' multiLine={true} rows={1} rowsMax={4} component={TextField}/>
    </div>
)

export const GroupSection = () => (
    <div>
        <Field name='name' hintText='分组名称' floatingLabelText='分组名称' component={TextField}/>
        <Field name='description' hintText='分组描述' floatingLabelText='分组描述' multiLine={true} rows={1} rowsMax={4} component={TextField}/> 
    </div>
)

export const RoundSection = () => (
    <div>
        <Field name='name' hintText='轮次名称' floatingLabelText='轮次名称' component={TextField}/>
        <Field name='description' hintText='轮次描述' floatingLabelText='轮次描述' multiLine={true} rows={1} rowsMax={4} component={TextField}/>
    </div>
)
