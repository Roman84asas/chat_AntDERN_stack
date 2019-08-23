import React from "react";
import orderBy from 'lodash/orderBy';
import {Input} from 'antd';

import "./Dialogs.scss";
import {DialogItem} from "../";

const Dialogs = ({ items, userId, onSearch }) => (
    <div className="dialogs">
        <div className="dialogs__search">
            <Input.Search
                placeholder="Найти контакт.."
                onSearch={value => console.log(value)}
            />
        </div>
        {orderBy(items, ['created_at'], ['desc']).map(item => (
            <DialogItem
                key={item._id}
                isMe={item.user._id === userId}
                {...item}
            />
            ),
        )}
    </div>
);

export default Dialogs;