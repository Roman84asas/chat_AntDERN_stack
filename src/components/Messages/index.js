import React from "react";
import PropTypes from "prop-types";
import {Empty} from 'antd';
import {Message} from '../';



const Messages = ({ items }) => {
  return items ? (<div>
      <Message
          fullname="Лихи Р"
          avatar="https://sun9-33.userapi.com/c841324/v841324414/1e790/6LB5VrjE_Ls.jpg?ava=1"
          date="Sun Apr 21 2019 21:55:29"
          audio="https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3"
      />
      <Message
      avatar="https://sun9-33.userapi.com/c841324/v841324414/1e790/6LB5VrjE_Ls.jpg?ava=1"
    text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
    date="Sun Apr 21 2019 21:55:29"
    attachments={[
            {
                filename: "image.jpg",
                url: "https://source.unsplash.com/100x100/?random=1&nature,water"
            },
    {
        filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=2&nature,water"
    },
    {
        filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=3&nature,water"
    }
]}
    />
    <Message
        avatar="https://sun1-89.userapi.com/c847216/v847216083/1d367d/9TGvLbZGnSg.jpg?ava=1"
        text=" И тебе привет)))"
        date="Sun Apr 21 2019 21:59:29"
        isMe={true}
        isReaded={false}
    />
    <Message
    avatar="https://sun9-33.userapi.com/c841324/v841324414/1e790/6LB5VrjE_Ls.jpg?ava=1"
    attachments={[
            {
                filename: "image.jpg",
                url: "https://source.unsplash.com/100x100/?random=1&nature,water"
            }
            ]}
    /></div>) : (
    <Empty
        description="Сообщений нет"
    />)
};


Messages.propTypes = {
    items: PropTypes.array,
};

export default Messages;