import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "antd";
import { UploadField } from "@navjobs/upload";
import { Picker } from "emoji-mart";

import { UploadFiles } from "../../components";

import "./ChatInput.scss";

const { TextArea } = Input;

const ChatInput = props => {
  const [value, setValue] = useState("");
  const [emojiPickerVisible, setShowEmojiPicker] = useState(false);
  const { onSendMessage, currentDialogId } = props;

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!emojiPickerVisible);
  };

  const handleSendMessage = e => {
    if (e.keyCode === 13) {
      onSendMessage(value, currentDialogId);
      setValue("");
    }
  };

  const setEmojiToInputValue = ({colons}) => {
    setValue((value + ' ' + colons).trim());
  };

  const handleOutsideClick = (el, e) => {
      if (el && !el.contains(e.target)) {
          setShowEmojiPicker(false);
      }
  };

  useEffect(() => {
    const  el = document.querySelector('chat-input__smile-btn');

    document.addEventListener("click", handleOutsideClick.bind(this, el));

    return() => {
      document.removeEventListener("click", handleOutsideClick.bind(this, el));
    };
  }, []);


  return (
    <Fragment>
        <div className="chat-input">
            <div className="chat-input__smile-btn">

                <div className="chat-input__emoji-picker">
                    {emojiPickerVisible && (
                        <Picker  onSelect={(emojiTag) => setEmojiToInputValue(emojiTag)} set="apple" />
                    )}
                </div>

                <Button
                    onClick={toggleEmojiPicker}
                    type="link"
                    shape="circle"
                    icon="smile"
                />
            </div>

            <TextArea
                onChange={e => setValue(e.target.value)}
                onKeyUp={handleSendMessage}
                size="large"
                placeholder="Введите текст сообщения…"
                value={value}
                autosize={{ minRows: 1, maxRows: 6 }}
            />
            <div className="chat-input__actions">
                <UploadField
                    onFiles={files => console.log(files)}
                    containerProps={{
                        className: "chat-input__actions-upload-btn"
                    }}
                    uploadProps={{
                        accept: ".jpg,.jpeg,.png,.gif,.bmp",
                        multiple: "multiple"
                    }}
                >
                    <Button type="link" shape="circle" icon="camera" />
                </UploadField>
                {value ? (
                    <Button type="link" shape="circle" icon="check-circle" />
                ) : (
                    <Button type="link" shape="circle" icon="audio" />
                )}
            </div>
        </div>
        <div>
            <UploadFiles />
        </div>
    </Fragment>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string
};

export default ChatInput;
