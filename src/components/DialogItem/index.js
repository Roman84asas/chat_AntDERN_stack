import React from "react";
import classNames from "classnames";
import format from 'date-fns/format'
import isToday from 'date-fns/is_today'

import { IconReaded } from "../";

const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format (created_at, 'HH:mm')
    } else {
        return format (created_at, 'DD.MM.YY')
    }
}

const getAvatar = avatar => {
    if (avatar) {
        return (
            <img
                src="https://sun1-89.userapi.com/c847216/v847216083/1d367d/9TGvLbZGnSg.jpg?ava=1"
                alt=""
            />
        );
    } else {
        // make avatar
    }
};

const DialogItem = ({ user, message, unreaded, isMe }) => (
    <div
        className={classNames("dialogs__item", {
            "dialogs__item--online": user.isOnline
        })}
    >
        <div className="dialogs__item-avatar">
            {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
            {getAvatar(
                "https://sun1-89.userapi.com/c847216/v847216083/1d367d/9TGvLbZGnSg.jpg?ava=1"
            )}
        </div>
        <div className="dialogs__item-info">
            <div className="dialogs__item-info-top">
                <b>Роман В</b>
                <span>{ getMessageTime(message.created_at)}</span>
            </div>
            <div className="dialogs__item-info-bottom">
                <p>{message.text}</p>
                {!isMe && <IconReaded isMe={true} isReaded={false} />}
                {unreaded > 0 && (
                    <div className="dialogs__item-info-bottom-count">
                        {unreaded > 9 ? "+9" : unreaded}
                    </div>
                )}
            </div>
        </div>
    </div>
);

export default DialogItem;