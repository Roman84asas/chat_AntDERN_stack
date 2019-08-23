import React from "react";
import orderBy from 'lodash/orderBy';
import {Input} from 'antd';
import {DialogItem} from "../";


import "./Dialogs.scss";

const { Search } = Input;

const Dialogs = ({ items, userId, onSearch, inputValue }) => (
    <div className="dialogs">

        <div className="dialogs__search">
            <Search
                placeholder="Найти контакт.."
                onChange={e => onSearch(e.target.value)}
                value={inputValue}
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