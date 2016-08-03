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

export const withLog = (Comp) => {
    return class extends Component {
        render () {
            console.log(Comp.name, ' with log')
            return <Comp { ...this.props } { ...this.state } />
        }
    }
}

export const LogA = withLog(A)
export default A;
