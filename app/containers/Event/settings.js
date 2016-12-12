import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field,  FormSection } from 'redux-form'

import { TextField } from 'redux-form-material-ui'
import { EventSection } from './sections'

const Settings = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <FormSection name=''>
            <EventSection  disabled={true}/>
        </FormSection>
    </form>
)

const SettingsForm = reduxForm({
    form: 'settings',
    destroyOnUnmount: false,
    enableReinitialize: true,
    keepDirtyOnReinitialize: false,
    // initialValues: {
    //     eventName: '测试赛事'
    // }
})(Settings)

export default connect(
    state => ({
        initialValues: state.global.currentEvent
    })
)(SettingsForm)