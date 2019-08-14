import React from 'react';
import classNames from 'classnames';

import './InputBlock.scss';

const InputBlock = ({ children, className }) => <div className={classNames('input_block', className)}> {children}</div> ;

export default InputBlock;