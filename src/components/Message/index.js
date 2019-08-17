import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import readSvg from '../../assets/img/read.svg';
import noreadSvg from '../../assets/img/noread.svg';

import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import  ruLocale from 'date-fns/locale/ru';

import './Message.scss';

const Message = ({avatar, user, text, date, isMe, isReaded, attachments}) => (
    <div className={className("message", { 'message--isme': isMe })}>
        <div className="message__content">
            {isMe && isReaded ? (
                <img
                    className="message__icon-read"
                    src={readSvg}
                    alt="Read icon"
                />) : (
                <img
                    className="message__icon-read"
                    src={noreadSvg}
                    alt="No read icon"
                />)}


                <div className="message__avatar">
                    <img src={avatar} alt={ `Avatar ${user.fullname}` } />
                </div>
                <div className="message__info">
                    <div className="message__bubble">
                        <p className="message__text">{text}</p>
                    </div>
                    <span className="message__date">
                    {distanceInWordsToNow(date, {addSuffix: true, locale: ruLocale})}
                </span>
                </div>

            <div className="message__attachments">
                {attachments && attachments.map(item => (
                    <div className="message__attachments-item">
                        <img src={item.url} alt={item.filename}/>
                    </div>

                ))}
            </div>
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
    user: PropTypes.object,
    attachments: PropTypes.array,
};
export default Message;