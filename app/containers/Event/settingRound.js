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

import { EventSection, ItemSection, PhaseSection, GroupSection, RoundSection } from './sections'

import { SUBMIT } from 'containers/App/constants'

const renderRounds = ({ params, fields }) => (
    <div>
        {fields.map((field, index) => {
                return index === parseInt(params.roundNo) && (<div key={index}>
                    <FormSection name={field}>
                        <RoundSection  disabled={true}/>
                    </FormSection>
                </div>)
            })
        }
    </div>
)

const renderGroups = ({ params, fields }) => (
    <div>
        {fields.map((field, index) => {
                return index === parseInt(params.groupNo) && (<div key={index}>
                    <FormSection name={field}>
                        <GroupSection  disabled={true}/>
                    </FormSection>
                    <FieldArray name={`${field}.rounds`} params={params} component={renderRounds} />
                </div>)
            })
        }
    </div>
)

const renderPhases = ({ params, fields }) => (
    <div>
        {fields.map((field, index) => {
                return index === parseInt(params.phaseNo) && (<div key={index}>
                    <FormSection name={field}>
                        <PhaseSection  disabled={true}/>
                    </FormSection>
                    <FieldArray name={`${field}.groups`} params={params} component={renderGroups} />
                </div>)
            })
        }
    </div>
)


const renderItems = ({ params, fields }) => (
    <div>
        {fields.map((field, index) => {
                return index === parseInt(params.itemNo) && (<div key={index}>
                    <FormSection name={field}>
                        <ItemSection  disabled={true}/>
                    </FormSection>
                    <FieldArray name={`${field}.phases`} params={params} component={renderPhases} />
                </div>)
            })
        }
    </div>
)

const Settings = ({ handleSubmit, params, save, destroy, goto }) => {
    const submit = (values) => {
        // submit
        alert(JSON.stringify(values))
        save(values)
        destroy()
        goto('/event/settings')
    }
    return (<form onSubmit={handleSubmit(submit)}>
        <FormSection name=''>
            <EventSection  disabled={true}/>
        </FormSection>
        <FieldArray name='items' params={params} component={renderItems} />
        <RaisedButton 
                label='完成'
                onTouchTap={handleSubmit(submit)}
            />
    </form>)
}

const SettingsForm = connect(
    null,
    dispatch => ({
        save: data => dispatch({ type: SUBMIT, data }),
        goto: uri => dispatch(push(uri))
    })
)(reduxForm({
    form: 'settings',
    destroyOnUnmount: false,
})(Settings))

export default SettingsForm


