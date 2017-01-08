import React, { Component } from 'react'
import { reduxForm, Field, SubmissionError } from 'redux-form'
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
    Label
} from 'react-weui'

import {
    RF,
    RFInput,
    RFSelect,
    RFSwitch,
    RFTextArea
} from './redux-form-weui'
import Footer from './footer'

function handleSubmit(values) {
    alert(JSON.stringify(values))
    return new Promise((resolve, reject) => setTimeout(resolve, 500)).then(() => {
        let errors = {}
        if (!values.name) {
            throw new SubmissionError({ name: '必填项目', _error: '请输入赛事名称' })
        } else if (values.name.length < 5) {
            throw new SubmissionError({ name: '长度不够', _error: '赛事名称至少要5个字符' })
        } 
    })
}

function handleSubmitFail(error, dispatch, submitError)
{
    console.log(error, submitError)
}

function handleSubmitSuccess(result, dispatch)
{
    dispatch(push('/meventmsg'))
}

const AddEvent = reduxForm({
    form: 'addEvent',
    initialValues: {
        class: 1,
        enroll: true
    },
    onSubmit: handleSubmit,
    onSubmitFail: handleSubmitFail,
    onSubmitSuccess: handleSubmitSuccess,

})(({ handleSubmit, error, submitting }) => (
    <form onSubmit={handleSubmit}>
        <CellsTitle>创建新赛事</CellsTitle>
        <Form>
            <Field name='class' label='类别' component={ RFSelect }>
                <option value='1'>乒乓球</option>
                <option value='2'>羽毛球</option>
                <option value='3'>网球</option>
                <option value='4'>足球</option>
            </Field>
            <Field name='name' label='名称' placeholder='请输入赛事名称' component={ RFInput } />
            <Field name='description' label='描述' placeholder='请输入赛事描述' maxLength={200} rows={2} component={ RFTextArea } />
            <Field name='address' label='地址' placeholder='请比赛所在的地址' component={ RFInput } />
            <Field name='enroll' label='立即开始报名' component={ RFSwitch } />
            <Field name='startEnrollDatetime' label='报名开始时间' type='datetime-local' component={ RFInput } />
            <Field name='endEnrollDatetime' label='报名截止时间' type='datetime-local' component={ RFInput } />
            <Field name='startDatetime' label='比赛开始时间' type='datetime-local' component={ RFInput } />
            <Field name='endDatetime' label='比赛结束时间' type='datetime-local' component={ RFInput } />
            { error && <FormCell warn><CellHeader><Label>错误提示</Label></CellHeader><CellBody>{ error }</CellBody><CellFooter></CellFooter></FormCell> }
        </Form>
        <ButtonArea>
            <Button onClick={handleSubmit} disabled={submitting}>创建</Button>
        </ButtonArea>
        <Footer />
    </form>
))

export default AddEvent
