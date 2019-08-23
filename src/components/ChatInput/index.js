import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input, Button} from "antd";

import "./ChatInput.scss";


const ChatInput = props => {
    const [value, setValue] = useState("");
    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                <Button type="link" shape="circle" icon="smile" />
            </div>
            <Input
                size="large"
                placeholder="Напишите сообщение"
                onChange={e => setValue(e.target.value)}
            />
            <div className="chat-input__actions">
                <Button type="link" shape="circle" icon="camera" />
                {value ? (
                    <Button type="link" shape="circle" icon="check-circle" />
                ) : (
                    <Button type="link" shape="circle" icon="audio" />
                )}
            </div>
        </div>
    );
};

ChatInput.propTypes = {
    className: PropTypes.string
};

export default ChatInput;
