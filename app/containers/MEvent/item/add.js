import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, SubmissionError, formValueSelector } from 'redux-form'
import { push } from 'react-router-redux'
import {
    Cells,
    CellHeader,
    CellsTitle,
    Form,
    FormCell,
    CellBody,
    CellFooter,
    Button,
    ButtonArea,
    Label,
    Toptips,
    Toast,
} from 'react-weui'

import {
    RF,
    RFInput,
    RFSelect,
    RFSwitch,
    RFRadio,
    RFTextArea
} from '../components/redux-form-weui'
import Footer from '../components/Footer'
import AutoToptips from '../components/AutoToptips'

const AddItem = ({ handleSubmit, error, submitting, enrollNow, template, submitFailed }) => (
<form>
    <CellsTitle>添加新项目</CellsTitle>
    <Form>
        <Field name='name' label='名称' placeholder='请输入项目名称' component={ RFInput } />
        <Field name='description' label='描述' placeholder='请输入项目描述' maxLength={200} rows={2} component={ RFTextArea } />
    </Form>

    <CellsTitle>时间</CellsTitle>
    <Form>
        <Field name='enroll' label='立即开始报名' type='checkbox' component={ RFSwitch } />
        { enrollNow || <Field name='startEnrollDatetime' label='报名开始时间' type='datetime-local' component={ RFInput } /> }
        <Field name='endEnrollDatetime' label='报名截止时间' type='datetime-local' component={ RFInput } />
        <Field name='startDatetime' label='比赛开始时间' type='datetime-local' component={ RFInput } />
        <Field name='endDatetime' label='比赛结束时间' type='datetime-local' component={ RFInput } />
    </Form>

    <CellsTitle>资源</CellsTitle>
    <Form>
        <Field name='resource' label='比赛可用资源' placeholder='请输入可用资源(球桌|场地)数' component={ RFInput } />
    </Form>

    <CellsTitle>方案</CellsTitle>
    <Form radio>
        <Field name='template' label='循环赛+淘汰赛' value="0" type='radio' component={ RFRadio } />
        <Field name='template' label='淘汰赛' value="1" type='radio' component={ RFRadio } />
        <Field name='template' label='循环赛' value="2" type='radio' component={ RFRadio } />
{/*
        <Field name='template1' label='方案' component={ RFSelect } >
            <option value="0">循环赛+淘汰赛</option>
            <option value="1">淘汰赛</option>
            <option value="2">循环赛</option>
        </Field>
*/}
    </Form>

    <CellsTitle>参数</CellsTitle>
    <Form>
        { (template == 0 || template == 2) && <Field name='groupCount' label='分组数' placeholder='请输入分组数' component={ RFInput } /> }
        { (template == 0 || template == 1) && <Field name='outlineCount' label='出线人数' placeholder='请输入出线人数' component={ RFInput } /> }
    </Form>

    <AutoToptips type='warn' show={ submitFailed } id={ error && error[0]} >{ error && error[1] }</AutoToptips>
    <Toast icon="loading" show={submitting}>Loading...</Toast>
    <ButtonArea>
        <Button onClick={handleSubmit} disabled={submitting}>创建</Button>
    </ButtonArea>
    <Footer />
</form>)


function handleSubmit(values) {
    console.log(JSON.stringify(values))
    return new Promise((resolve, reject) => setTimeout(resolve, 500)).then(() => {
        let errors = {}
        let msgId = Math.random()
        if (!values.name) {
            throw new SubmissionError({ name: '必填项目', _error: [ msgId, '请输入赛事名称' ] })
        } else if (values.name.length < 5) {
            throw new SubmissionError({ name: '长度不够', _error: [ msgId, '赛事名称至少要5个字符' ] })
        }
    })
}

function handleSubmitFail(error, dispatch, submitError)
{
    // console.log(error, submitError)
}

function handleSubmitSuccess(result, dispatch)
{
    dispatch(push('/m/event/item/msg'))
}

const selector = formValueSelector('addItem')

const AddItemWithData = connect(
    state => ({
        enrollNow: selector(state, 'enroll'),
        template: selector(state, 'template'),
    })
)(reduxForm({
    form: 'addItem',
    initialValues: {
        class: 1,
        enroll: true,
        template: "0"
    },
    onSubmit: handleSubmit,
    onSubmitFail: handleSubmitFail,
    onSubmitSuccess: handleSubmitSuccess,
})(AddItem))

export default AddItemWithData

