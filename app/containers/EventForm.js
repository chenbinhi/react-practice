import React, { PropTypes, Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { RadioButton } from 'material-ui/RadioButton'
import MenuItem from 'material-ui/MenuItem'

import {
    Checkbox,
    RadioButtonGroup,
    SelectField,
    TextField,
    Toggle
} from 'redux-form-material-ui'



// const EventForm = (props) => {
//     const { fields: { username, password }, handleSubmit } = props
//     return (
//         <form onSubmit={handleSubmit}>
//             <input placeholder='用户名' type='text' {...username} />
//             <input placeholder='密码' type='text' {...password} />
//             <button type='submit'>提交</button>
//         </form>
//     );
// };
class EventForm extends Component {
    handleSubmit(e) {
        alert('form data: ' + JSON.stringify(e, (k, v) => {
            if (v instanceof FileList)
                return Array.from(v).map(f => f.name)
            return v
        }))
    }

    render() {
        const { handleSubmit, reset } = this.props
        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <Field name='username' hintText='用户名' floatingLabelText='用户名' component={TextField} />
                <Field name='password' hintText='密码' floatingLabelText='密码' type='password' component={TextField} />
                <Field name='sex' component={RadioButtonGroup}>
                    <RadioButton value='男' label='男' />
                    <RadioButton value='女' label='女' />
                </Field>
                <Field name='join' label='加入' component={Checkbox} />
                <Field name='city' hintText='城市' floatingLabelText='城市' component={SelectField} >
                    <MenuItem value='成都' primaryText='成都' type='text' />
                    <MenuItem value='北京' primaryText='北京' />
                    <MenuItem value='上海' primaryText='上海'/>
                </Field>
                <Field name='files' multiple type='file'  hintText='上传文件名' floatingLabelText='上传文件名' component={TextField}/>
                <div>
                    <button type='submit'>提交</button>
                    <button type='button' onClick={reset}>重置</button>
                </div>
            </form>
        );
    }   
};

EventForm.PropTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
    form: 'EventForm',
    initialValues: {
        username: 'myname',
        password: 'pass',
        sex: '女',
        join: true,
        city: '成都',
    }
}, state => ({
}))(EventForm);