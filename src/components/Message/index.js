import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';



import waveSvg from '../../assets/img/wave.svg'
import playSvg from '../../assets/img/play.svg'
import pauseSvg from '../../assets/img/pause.svg'

import { Time, IconReaded } from "../";

import './Message.scss';

const Message = ({
                     avatar,
                     user,
                     text,
                     date,
                     audio,
                     isMe,
                     isReaded,
                     attachments,
                     isTyping
                 }) => {
    const [isPlay, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const audioRef = useRef(null);

    const togglePlay = () => {
        if (!isPlay) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    audioRef.addEventListener('playing', () => {
        setIsPlaying(true);
        }, false );

    return (
        <div
            className={classNames("message", {
                "message--isme": isMe,
                "message--is-typing": isTyping,
                "message--is-audio": audio,
                "message--image": attachments && attachments.length === 1,
            })}
        >
            <div className="message__content">
                <IconReaded isMe={isMe} isReaded={isReaded} />
                <div className="message__avatar">
                    <img src={avatar} alt={`Avatar ${user}`} />
                </div>
                <div className="message__info">
                    {(audio || text || isTyping) && (
                        <div className="message__bubble">
                            {text && <p className="message__text">{text}</p>}
                            {isTyping && (
                                <div className="message__typing">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            )}
                            {audio && <div className="message__audio">
                                <audio ref={audioRef} src={audio} preload="auto"/>
                                <div className="message__audio-progress" style={{ width: '50%' }}></div>
                                <div className="message__audio-info">
                                    <div className="message__audio-btn">
                                        <button onClick={togglePlay}>
                                            {isPlay ? <img src={pauseSvg} alt="Pause Svg"/> : <img src={playSvg} alt="Play Svg"/>}
                                        </button>
                                    </div>
                                    <div className="message__audio-wave"><img src={waveSvg} alt="Wave Svg"/></div>
                                    <span className="message__audio-duration">
                                    00:19
                                </span>
                                </div>
                            </div>}
                        </div>
                    )}
                </div>

                {attachments && (
                    <div className="message__attachments">
                        {attachments.map(item => (
                            <div className="message__attachments-item">
                                <img src={item.url} alt={item.filename}/>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
};


const Message1 = ({
                     avatar,
                     user,
                     text,
                     date,
                     isMe,
                     isReaded,
                     attachments,
                     isTyping
                 }) => (
    <div
        className={classNames("message", {
            "message--isme": isMe,
            "message--is-typing": isTyping,
            "message--image": attachments && attachments.length === 1
        })}
    >
        <div className="message__content">
            <IconReaded isMe={isMe} isReaded={isReaded} />
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.fullname}`} />
            </div>
            <div className="message__info">
                {(text || isTyping) && (
                    <div className="message__bubble">
                        {text && <p className="message__text">{text}</p>}
                        {isTyping && (
                            <div className="message__typing">
                                <span />
                                <span />
                                <span />
                            </div>
                        )}
                    </div>
                )}
                {date && (
                    <span className="message__date">
                        <Time date={date} />
                    </span>
                )}
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
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.string,
    attachments: PropTypes.array,
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
    isTyping: PropTypes.bool,
    audio:PropTypes.string,
};
export default Message;