import React from "react";
import PropTypes from "prop-types";
import {Icon, Input} from "antd";

import "./ChatInput.scss";


const ChatInput = (props) => {
    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                <Icon type="smile" />
            </div>
            <Input
                size="large"
                placeholder="Напишите сообщение"
            />
            <div className="chat-input__actions">
                <Icon type="camera" />
                <Icon type="audio" />
                <Icon type="check-circle" />
            </div>
        </div>
    );
};

ChatInput.propTypes = {
    className: PropTypes.string
};

export default ChatInput;
