import React from 'react';
import PropTypes from 'prop-types';

import { Button as BasicButton } from 'antd';

import './Buton.scss';

const Button = props => {
    return (
        <BasicButton className="button" type="dashed" {...props}/>
    )
};

Button.propTypes = {
  className: PropTypes.string
};

export default Button;