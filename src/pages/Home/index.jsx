import React from 'react';
import { Dialogs } from "../../components";

import  './Home.scss';

const Home = () => (
        <section className="home">
            <Dialogs
                items={[
                    {
                        _id: Math.random(),
                        user: {
                            fullname: "Роман В",
                            avatar: null
                        },
                        lastMessage: {
                            text:
                                "Шалом мой дорогой друг, как Вы отпраздновали Шабат??\n" +
                                "Б-г в помощь Вам на этой неделе",
                            isReaded: false,
                            created_at: "Mun Aug 12 2019 18:12:52"
                        }
                    }
                ]}
            />


            {/*  */}
            {/* <Message
              avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
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
              avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
              text="Hello, World!"
              date="Sun Apr 21 2019 21:59:29"
              isMe={true}
              isReaded={false}
            />
            <Message
              avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
              attachments={[
                {
                  filename: "image.jpg",
                  url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                }
              ]}
            />
            <Message
              avatar="https://sun9-33.userapi.com/c841324/v841324414/1e790/6LB5VrjE_Ls.jpg?ava=1"
              isTyping
            /> */}
        </section>
);

export default Home;