import React, {PropTypes} from 'react';

const Input = props => {
    return (
        <div>
            <input type='text' 
            defaultValue={props.defaultValue}
            value={props.value} onChange={props.onInput}/>
        </div>
    );
};

Input.propTypes = {
    defaultValue: PropTypes.string,
    value: PropTypes.string,
};

export default Input;