import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import  ruLocale from 'date-fns/locale/ru';

import './Message.scss';

const Message = ({avatar, user, text, date, isMe}) => (
    <div className={className("message", {'message--isMe': isMe})}>
        <div className="message__avatar">
            <img src={avatar} alt={ `User ${user.fullname}` } className="message__img"/>
        </div>
        <div className="message__content">
            <div className="message__bubble">
                <p className="message__text">{text}</p>
            </div>
            <span className="message__date">{distanceInWordsToNow(date, {addSuffix: true, locale: ruLocale})}</span>
        </div>
    </div>
);

Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object
};
export default Message;