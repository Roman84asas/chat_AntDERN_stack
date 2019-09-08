import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { filesApi } from '../utils/api';

import { ChatInput as ChatInputBase } from "../components";

import { messagesActions } from "../redux/actions";
import attachments from "../redux/reducers/attachments";

const ChatInput = ({ fetchSendMessage, currentDialogId }) => {
    if (!currentDialogId) {
        return null;
    }

    const [value, setValue] = useState("");
    const [attachments, setAttachments] = useState([]);
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
        fetchSendMessage(value, currentDialogId, attachments.map(file => file.uid));
        setValue("");
        setAttachments([]);
    };

    const handleSendMessage = e => {
        if (e.keyCode === 13) {
            sendMessage();
        }
    };

    const onSelectFiles = async files => {
        let uploaded = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const uid = Math.round( Math.random() * 1000);
            uploaded = [
                ...uploaded,
                {
                    uid,
                    file,
                    name: file.name,
                    status: 'uploading'
                }
            ];
            setAttachments(uploaded);
            await filesApi.upload(file).then(({ data }) => {
                uploaded =uploaded.map(item => {
                    if (item.uid === uid) {
                        item = {
                            uid: data.file._id,
                            name: data.file.filename,
                            status: 'done',
                            url: data.file.url
                        };
                    }
                    return item
                })}
            );
        }
        setAttachments(uploaded);
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
