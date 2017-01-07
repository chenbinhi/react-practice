import React from 'react'
import { reduxForm, Field } from 'redux-form' 
import {
    ButtonArea,
    Button,
    CellsTitle,
    CellsTips,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Form,
    FormCell,
    Icon,
    Input,
    Label,
    TextArea,
    Switch,
    Radio,
    Checkbox,
    Select,
    VCode,
    Agreement,
    Toptips
} from 'react-weui'

import {
    RF,
    RFCheckbox,
    RFRadio,
    RFSelect,
    RFSwitch,
    RFTextArea,
    RFInput
} from './redux-form-weiui'

import iconSrc from './images/icon.png'
import vcodeSrc from './images/vcode.jpg'
import avatarSrc from './images/avatar.jpg'

const validate = (values) => {
    const errors = {}
    if (values.input && isNaN(Number(values.input))) {
        errors.input = '必须是数字'
    }
    return errors
}
const ReduxForm = reduxForm({
    form: 'MEVENT',
    validate,
})(({ handleSubmit }) => (
     <form onSubmit={ handleSubmit }>
        <Form radio>
            <Field name='radio' label='单选1' radioValue='1' component={ RFRadio } />
            <Field name='radio' label='单选2' radioValue='2' component={ RFRadio } />
        </Form>
        <Form checkbox>
            <Field name='checkbox1' label='多选1' component={ RFCheckbox } />
            <Field name='checkbox2' label='多选2' component={ RFCheckbox } />
        </Form>
        <Form>
            <Field name='switch1' label='开关1' component={ RFSwitch } />
            <Field name='switch2' label='开关2' component={ RFSwitch } />
        </Form>
        <Form>
            <Field name='input' label='输入' placeholder='请输入一个数字' footer={ <Field name='switch-input' component={ RF(Switch) } /> } component={ RFInput } />
            <Field name='vcode' label='验证码' placeholder='请输入验证码' footer={<VCode src={vcodeSrc} />} component={ RFInput } />
            <Field name='text' label='输入' placeholder='请输入一个段文字' rows="3" maxlength="200" component={ RFTextArea } />
            <Field name='switch_mix' label='开关' component={ RFSwitch } />
            <Field name='select' component={ RFSelect() }>
                <option value="1">WeChat</option>
                <option value="2">QQ</option>
                <option value="3">Email</option>
            </Field>
            <Field name='select1' label='国家' data={[
                            {
                                value: 1,
                                label: 'China'
                            },
                            {
                                value: 2,
                                label: 'United States'
                            },
                            {
                                value: 3,
                                label: 'Germany'
                            }
                        ]} component={ RFSelect() } />
            <Field name='select2' component={ RFSelect(<Field name='tel' type="tel" placeholder="Enter Phone" component={ RF(Input) } />)  }>
                <option value="1">+86</option>
                <option value="2">+80</option>
                <option value="3">+84</option>
                <option value="4">+87</option>
            </Field>
            <Field name='select3' label='电话' component={ RFSelect(<Input type="tel" placeholder="Enter Phone" />) }>
                <option value="1">+86</option>
                <option value="2">+80</option>
                <option value="3">+84</option>
                <option value="4">+87</option>
            </Field>
        </Form>
        <ButtonArea>
            <Button onClick={ handleSubmit } >提交</Button>
        </ButtonArea>
     </form>
))
export default ReduxForm

// class ReduxForm extends React.Component {
//    render() {
//        return
//    } 
// }
