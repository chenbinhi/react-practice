import React, {PropTypes} from 'react';
import classNames from 'classnames';

const PreviewButton = (props) => {
    let Component
    const { className, component, primary, children, ...others } = props;
    const cls = classNames({
        'weui-form-preview__btn': true,
        'weui-form-preview__btn_default' : !primary,
        'weui-form-preview__btn_primary' : primary,
        [className]: className
    });

    Component = component || 'a'
    return (
        <Component className={cls} {...others}>
            {children}
        </Component>
    );
};

PreviewButton.propTypes = {
    /**
     * Primary style of button
     *
     */
    primary: PropTypes.bool,
    component: PropTypes.oneOfType([ PropTypes.node, PropTypes.func ])
}

PreviewButton.defaultProps = {
    primary: false,
    component: 'a'
}

export default PreviewButton;

