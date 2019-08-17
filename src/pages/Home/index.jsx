import React from 'react';

import {Message} from "../../components";

import  './Home.scss';



const Home = () => {
    return (
        <section className="home">
            <Message
                avatar="https://sun9-47.userapi.com/c847216/v847216083/1d367d/9TGvLbZGnSg.jpg?ava=1"
                text="Шалом друг) Как в Ашдоде??  "
                date="Fri Aug 16 2019 18:56:50"

            />
            <Message
                avatar="https://sun9-18.userapi.com/c841324/v841324414/1e78f/PnTHbtdm08c.jpg?ava=1"
                text="Шалом) Все отлично, а у тебя?"
                date="Fri Aug 16 2019 18:56:50"
                isMe={true}
                isReaded={true}
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/user/erondu/100x100',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/user/erondu/100x100',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/user/erondu/100x100',
                    }
                ]}
            />
        </section>
    );
};

export default Home;
