import React from 'react';
import { Button as BasicButton } from 'antd';

import './Buton.scss';

const Button = ({children}) => {
    return (
        <BasicButton>{children}</BasicButton>
    )
}

export default Button;