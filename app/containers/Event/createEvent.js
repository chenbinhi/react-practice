import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { reduxForm, Field, FieldArray, formValueSelector, FormSection } from 'redux-form'
import { SelectField, TextField, DatePicker } from 'redux-form-material-ui'

import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
// import TextField from 'material-ui/Textfield'
// import DropdownMenu from 'material-ui/DropdownMenu'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import { Step, Stepper, StepLabel, StepButton } from 'material-ui/Stepper'

import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import DeleteSvgButton from 'material-ui/svg-icons/action/delete'
import { EventSection, ItemSection } from './sections'

import { SUBMIT } from 'containers/App/constants'

const WizardFormCreateEvent = reduxForm({
    form: 'AppWizad',
    destroyOnUnmount: false,
    initialValues: {
        eventType: '网球',
        eventName: '默认赛事名',
        items: [ { name: '默认项目', sex: '男', way: '团体' }]
    }
})(({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <FormSection name=''>
            <EventSection />
        </FormSection>
        <div>
            <RaisedButton 
                label='下一步'
                onTouchTap={handleSubmit}
            />
        </div>
    </form>
))


const renderItems = ({ fields, meta: { touched, error } }) => (
   <ul>
    <li>
        <IconButton
            onTouchTap={ () => fields.push({ name: '新项目'+fields.length, sex: '男', way: '单打'}) }
            tooltip='添加项目'
            >
            <FontIcon className='material-icons'>add</FontIcon>
        </IconButton>
        { touched && error && <span>{error}</span>}
    </li>
    {fields.map((field, index) => (
    <li key={index}>
        <h4>项目{index+1} <IconButton onTouchTap={ () => fields.remove(index) } tooltip='删除' > <DeleteSvgButton /> </IconButton> </h4>
        <FormSection name={field} >
            <ItemSection />
        </FormSection>
    </li>)
    )}
   </ul> 
)

const WizardFormCreateItem = reduxForm({
    form: 'AppWizad',
    destroyOnUnmount: false
})(({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <FieldArray name='items' component={renderItems} />
        <div>
            <RaisedButton 
                label='下一步'
                onTouchTap={handleSubmit}
            />
        </div>
    </form>
))

const renderItemsForEnroll = ({ fields, meta: { touched, error } }) => (
    <div>
    {
        fields.map((field, index) => (
        <div key={index}>
            <FontIcon className="material-icons" >date_range</FontIcon>
            <label>项目：{fields.get(index).name}</label>
            <Field name={`${field}.enrollDateStart`} hintText='报名起始时间' format={null} autoOk={true} component={DatePicker} />
            <Field name={`${field}.enrollDateEnd`} hintText='报名结束时间' format={null} autoOk={true} component={DatePicker} />
        </div>))
    }
    </div>
)

const selector = formValueSelector('AppWizad')
const WizardFormCreateEnroll =  connect(
    state => selector(state, 'eventName', 'eventType'), 
    dispatch => ({
        save: data => dispatch({ type: SUBMIT, data }),
        goto: uri => dispatch(push(uri))
    })
)(reduxForm({
    form: 'AppWizad',
    destroyOnUnmount: false
})(({ eventName, handleSubmit, destroy, save, goto }) => {
    const submit = (values) => {
        // submit
        alert(JSON.stringify(values))
        save(values)
        destroy()
        goto('/event/settings')
    }
    return (<form onSubmit={handleSubmit(submit)}>
        <div>
            <FontIcon className="material-icons" >date_range</FontIcon>
            <label>赛事：{ eventName }</label>
            <Field name={`enrollDateStart`} hintText='报名起始时间' format={null} autoOk={true} component={DatePicker} />
            <Field name={`enrollDateEnd`} hintText='报名结束时间' format={null} autoOk={true} component={DatePicker} />
        </div>
        <FieldArray name='items' component={renderItemsForEnroll} />
        <div>
            <RaisedButton 
                label='完成'
                onTouchTap={handleSubmit(submit)}
            />
        </div>
    </form>)
}))


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventType: '网球',
            eventName: '默认赛事名',
            stepIndex: 0
        }

        this.handlePrev = this.handlePrev.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.handleEvent = this.handleEvent.bind(this)
    }
    
    handleEvent({ eventName, eventType }) {
        if (eventType !== undefined)
            this.setState({ eventType })
        if (eventName !== undefined)
            this.setState({ eventName })
    }
    handlePrev() {
        this.setState({
            stepIndex: this.state.stepIndex - 1
        })
    }
    handleNext() {
        this.setState({
            stepIndex: this.state.stepIndex + 1
        })
    }


    getStepContent(stepIndex) {
        let { eventName, eventType } = this.state
        switch (stepIndex) {
            case 0:
                return <WizardFormCreateEvent onSubmit={this.handleNext} />
            case 1:
                return <WizardFormCreateItem onSubmit={this.handleNext} />
            case 2:
                return <WizardFormCreateEnroll onSubmit={this.handleNext} />
            default:
                return <p>未知的步骤{stepIndex}</p>
        }
    }



    render() {
        let { stepIndex } = this.state

        return ( <div>
            <Paper zDepth={1} >
                <Stepper activeStep={stepIndex} >
                    <Step>
                        <StepLabel>填写赛事名称</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>参赛项目</StepLabel>
                    </Step>
                    <Step>
                        <StepButton>报名时间</StepButton>
                    </Step>
                </Stepper>
                <div>
                    {this.getStepContent(stepIndex)}
                    <FlatButton 
                        label='上一步' 
                        disabled={stepIndex === 0}
                        onTouchTap={this.handlePrev}
                        />
                    <RaisedButton 
                        label={ stepIndex === 2 ? '完成':'下一步' }
                        onTouchTap={this.handleNext}
                        />
                </div>
            </Paper>
            
            <Paper >
                  
            </Paper>
        </div>
        )
    }
}

export default App