import React, { Component, PropTypes} from 'react';

const A = props => {
    return (
        <div onClick={ props.onClick }>
            <a href="#"> A {props.p} {props.s} </a>
        </div> //test
    );
};

A.propTypes = {
    p: PropTypes.number,
    s: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export const withLog = (Component) => {
    return React.createClass({
        render () {
            console.log(Component.name, ' with log')
            return <Component { ...this.props } { ...this.state } />
        }
    })
}
export const LogA = withLog(A)
export default A;
