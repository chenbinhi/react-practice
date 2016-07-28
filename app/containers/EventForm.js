import React, { PropTypes, Component } from 'react';
import { reduxForm } from 'redux-form'

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
        const { fields: { username, password, email, sex, join, city, file: { value: _, ...fileRest } }, handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <div>
                <lable>用户名</lable>
                <input placeholder='用户名' type='text' {...username} />
                </div>
                <div>
                <lable>密码</lable>
                <input placeholder='密码' type='text' {...password} />
                </div>
                <div>
                <lable>性别</lable>
                <input type='radio' {...sex} value='1' checked={sex.value == '1'} />男
                <input type='radio' {...sex} value={2} checked={sex.value == '2'} />女
                </div>
                <div>
                    <lable>加入</lable>
                    <input type='checkbox' {...join} value={1} checked={join.value} />
                </div>
                <div>
                    <lable>城市</lable>
                    <select {...city}>
                        <option value='0'></option>
                        <option value='1'>成都</option>
                        <option value='2'>北京</option>
                        <option value='3'>上海</option>
                    </select>
                </div>
                <div>
                    <label>上传</label>
                    <input multiple type='file' {...fileRest}/>
                </div>
                <div>
                <button type='submit'>提交</button>
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
    fields: [ 'username', 'password', 'sex', 'join', 'city', 'file' ]
}, state => ({
    initialValues: state.initFormData.form
}))(EventForm);