import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

import { TextField } from 'redux-form-material-ui'

const Login = ({ handleSubmit, onCancel, invalid, submitting }) => {
    function submit(values, dispatch, props) {
        alert(JSON.stringify(values))
    } 
    return (<form onSubmit={handleSubmit(submit)}>
        <Field
            name='username'
            hintText='用戶名'
            floatingLabelText='用戶名'
            component={TextField} />
        <Field
            name='password'
            hintText='密码'
            floatingLabelText='密码'
            type='password'
            component={TextField} />
        <div>
            <FlatButton label='取消' onTouchTap={onCancel} />
            <RaisedButton label='登录' disabled={invalid || submitting} onTouchTap={handleSubmit(submit)} />
        </div>
    </form>)
}

const validate = ({ username, password }) => {
    let errors = {}
    if (!username) {
        errors.username = '必填'
    }

    if (!password) {
        errors.password = '必填'
    }

    return errors
}

const warn = ({ username, password }) => {
    let warnings = {}
    if (username && username.length < 5) {
        warnings.username = '用户名长度不够'
    }


    return warnings
}

export default reduxForm({
    form: 'login',
    validate,
    warn,
    destroyOnUnmount: false
})(Login)
