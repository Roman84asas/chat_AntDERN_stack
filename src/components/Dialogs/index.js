import React from "react";
//import classNames from "classnames";

import "./Dialogs.scss";
import {DialogItem} from "../";

const Dialogs = ({ items, userId }) => (
        <div className="dialogs">
            {items.map(item => (
                <DialogItem
                    key={item._id}
                    user={item.user}
                    message={item}
                    unreaded={0}
                    isMe={item.user._id === userId}
                />
            ))}
        </div>

);

export default Dialogs;