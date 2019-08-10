import React from 'react';
import { Button as BasicButton } from 'antd';

import './Buton.scss';

const Button = ({children}) => {
    return (
        <BasicButton type="large">{children}</BasicButton>
    )
}

export default Button;