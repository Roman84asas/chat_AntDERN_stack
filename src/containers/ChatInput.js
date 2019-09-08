import React, {useEffect, useState} from "react";
import { connect } from "react-redux";

import { ChatInput as ChatInputBase } from "../components";

import { messagesActions } from "../redux/actions";

const ChatInput = ({ fetchSendMessage, currentDialogId, onSendMessage }) => {

    const [value, setValue] = useState("");
    const [emojiPickerVisible, setShowEmojiPicker] = useState(false);

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!emojiPickerVisible);
    };

    const handleOutsideClick = (el, e) => {
        if (el && !el.contains(e.target)) {
            setShowEmojiPicker(false);
        }
    };

    const setEmojiToInputValue = ({colons}) => {
        setValue((value + ' ' + colons).trim());
    };

    const handleSendMessage = e => {
        if (e.keyCode === 13) {
            onSendMessage(value, currentDialogId);
            setValue("");
        }
    };

    useEffect(() => {
        const  el = document.querySelector('chat-input__smile-btn');

        document.addEventListener("click", handleOutsideClick.bind(this, el));

        return() => {
            document.removeEventListener("click", handleOutsideClick.bind(this, el));
        };
    }, []);

    if (!currentDialogId) {
        return null;
    }
  return (
    <ChatInputBase
        value = {value}
        setValue = {setValue}
        emojiPickerVisible = {emojiPickerVisible}
        toggleEmojiPicker = {toggleEmojiPicker}
        handleOutsideClick = {handleOutsideClick}
        setEmojiToInputValue = {setEmojiToInputValue}
        handleSendMessage = {handleSendMessage}
        onSendMessage={fetchSendMessage}
        currentDialogId={currentDialogId}
    />
  );
};

export default connect(
  ({ dialogs }) => dialogs,
  messagesActions
)(ChatInput);
