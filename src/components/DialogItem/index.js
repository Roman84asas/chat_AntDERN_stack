import React from "react";
import classNames from "classnames";

import { IconReaded } from "../";

import "./DialogItem.scss";

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

const DialogItem = ({ user, message, unreaded }) => (
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
                <span>
          {/* <Time date={new Date()} /> */}
                    13:03
        </span>
            </div>
            <div className="dialogs__item-info-bottom">
                <p>
                    Шалом мой дорогой друг, как Вы отпраздновали Шабат??
                    Б-г в помощь Вам на этой неделе
                </p>
                <IconReaded isMe={true} isReaded={false} />
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