import React, { Component, PropTypes } from 'react'
import { Toptips } from 'react-weui' 

class AutoToptips extends Component {
    static propTypes = {
        id: PropTypes.number,
        show: PropTypes.bool,
        type: PropTypes.string,
        children: PropTypes.string
    }

    state = {
        show: false
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.id != this.props.id || nextProps.show != this.props.show ||
            nextProps.type  != this.props.type ||
            nextProps.children  != this.props.children ) {
            clearTimeout(this.timer)
            if (nextProps.show) {
                this.setState({ show: true })
                this.timer = setTimeout(() => {
                    this.setState({ show: false })
                }, 2000)
            } else {
                this.setState({ show: false })
            }
        }
    }

    componentWillUnmount() {
        if (this.timer)
            clearTimeout(this.timer)
    }

    render() {
        let { type, children, ...rest } = this.props
    
        return <Toptips show={this.state.show} type={type}>{children}</Toptips>
    }
}

export default AutoToptips