import React from 'react';



import  './Home.scss';
import {Message} from "../../components";


const Home = () => {
    return (
        <section className="home">
            <Message
                avatar="https://sun9-47.userapi.com/c847216/v847216083/1d367d/9TGvLbZGnSg.jpg?ava=1"
                text="Шалом друг) Как в Ашдоде??"
                data="Fri Aug 16 2019 18:56:50"
            />
        </section>
    );
};

export default Home;
