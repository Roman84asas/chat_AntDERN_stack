import React from 'react';
import PropTypes from 'prop-types';
import { Button as BasicButton } from 'antd';
import className from 'classnames';

import './Buton.scss';

const Button = props => {
    return (
        <BasicButton {...props} className={className("button", props.className, {
            "button--large": props.size === "large"
        })}/>
    )
};

Button.propTypes = {
    className: PropTypes.string
}

export default Button;