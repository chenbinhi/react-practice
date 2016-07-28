import React, { Component } from 'react'

class UnctrlInput extends Component {
    render() {
        return (
            <div>
                <input type='text' defaultValue={this.props.defaultValue} onChange={this.props.onInput} />
            </div>
        );
    }
}

export default UnctrlInput
