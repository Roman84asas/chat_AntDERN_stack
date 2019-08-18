import React from "react";
import PropTypes from "prop-types";
import readSvg from "../../assets/img/read.svg";
import noReadSvg from "../../assets/img/noread.svg";

const IconReaded = ({ isMe, isReaded }) =>
    (isMe &&
        (isReaded ? (
            <img className="message__icon-readed" src={readSvg} alt="Readed icon" />
        ) : (
            <img
                className="message__icon-readed message__icon-readed--no"
                src={noReadSvg}
                alt="No readed icon"
            />
        ))) ||
    null;

IconReaded.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool
};

export default IconReaded;