import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { filesApi } from '../utils/api';

import { ChatInput as ChatInputBase } from "../components";

import { messagesActions } from "../redux/actions";

const ChatInput = ({ fetchSendMessage, currentDialogId }) => {
    if (!currentDialogId) {
        return null;
    }

    const [value, setValue] = useState("");
    const [attachments, setattAchments] = useState([]);
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

    const sendMessage = () => {
        fetchSendMessage(value, currentDialogId);
        setValue("");
    };

    const handleSendMessage = e => {
        if (e.keyCode === 13) {
            sendMessage();
        }
    };

    const onSelectFiles = files => {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            filesApi.upload(file);
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
    <ChatInputBase
        value = {value}
        setValue = {setValue}
        emojiPickerVisible = {emojiPickerVisible}
        toggleEmojiPicker = {toggleEmojiPicker}
        setEmojiToInputValue = {setEmojiToInputValue}
        handleSendMessage = {handleSendMessage}
        sendMessage = {sendMessage}
        attachments = {attachments}
        onSelectFiles = {onSelectFiles}
    />
  );
};

export default connect(
  ({ dialogs }) => dialogs,
  messagesActions
)(ChatInput);
