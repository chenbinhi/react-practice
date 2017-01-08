import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Footer from './footer'
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
                label: '回到首页',
                type: 'primary',
                onClick: e => goto('/mevent')
            },
             {
                label: '添加赛事项目',
                type: 'default',
                onClick: e => goto('/meventitemadd')
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