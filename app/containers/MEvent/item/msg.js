import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Footer from '../components/Footer'
import {
    Msg
} from 'react-weui'

const MessagePage = ({ goto, history }) => (
    <Msg 
        type='success'
        title='创建成功'
        description='创建成功'
        buttons={[
            {
                label: '设置项目阶段',
                type: 'primary',
                onClick: e => goto('/meventpharseedit')
            },
            {
                label: '返回',
                type: '',
                onClick: e => {
                    if (history)
                        history.goBack()
                    else
                        goto('/meventitemlist')
                }
            },
        ]}
        footer={Footer}
        >
    </Msg>
)

export default connect(
    null,
    (dispatch) => ({
        goto(uri) {
            dispatch(push(uri))
        }
    })
)(MessagePage)