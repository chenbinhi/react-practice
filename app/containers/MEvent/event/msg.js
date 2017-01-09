import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Footer from '../components/footer'
import {
    Msg
} from 'react-weui'

const MessagePage = ({ goto }) => (
    <Msg 
        type='success'
        title='创建成功'
        description='创建成功'
        buttons={[
            {
                label: '添加赛事项目',
                type: 'primary',
                onClick: e => goto('/meventitemlist')
            },
            {
                label: '回到首页',
                type: '',
                onClick: e => goto('/m')
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