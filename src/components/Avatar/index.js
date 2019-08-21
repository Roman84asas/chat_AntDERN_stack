import React from "react";
import PropTypes from "prop-types";


import "./Avatar.scss";

const Avatar = ({ user }) => {

    if (user.avatar) {
        return (
            <img
                className="avatar"
                src={user.avatar}
                alt={`Avatar ${user.fullname}`}
            />

        );
    } else {
        const firstChar = 'N';
        if (firstChar) {
            return (
                <div
                    className="avatar avatar--symbol"
                >
                    {firstChar}
                </div>
            );
        } else {

        }

    }
};

Avatar.propTypes = {
    className: PropTypes.string
};

export default Avatar;