import React from 'react';
import { Icon, Input  } from 'antd';
import {Dialogs, Message} from "../../components";

import  './Home.scss';

const { Search } = Input;

const Home = () => (
        <section className="home">
            <div className="chat">
                <div className="chat__sidebar">

                    <div className="chat__sidebar-header">
                        <div>
                            <Icon type="team" />
                            <span >Список диалогов</span>

                        </div>
                        <Icon type="form" />
                    </div>

                    <div className="chat__sidebar-search">
                        <Search
                            placeholder="Найти контакт.."
                            onSearch={value => console.log(value)}
                        />
                    </div>
                    <div className="chat__sidebar-dialogs">
                        <Dialogs
                            userId={0}
                            items={[
                                {
                                    "_id": "21f09bfd77a0474298648a7b5599f4d3",
                                    "text": "Duis do eu culpa ad mollit sit minim quis sunt esse anim. Ex velit sint consequat ipsum fugiat irure consequat ut. Do tempor voluptate magna ipsum id pariatur.",
                                    "created_at": "Sun Nov 03 1974 18:49:32 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "21f09bfd77a0474298648a7b5599f4d3",
                                        "fullname": "Lihi R",
                                        "avatar": "https://sun9-33.userapi.com/c841324/v841324414/1e790/6LB5VrjE_Ls.jpg?ava=1"
                                    }
                                },
                                {
                                    "_id": "41b4cc8ffc01aef863dfa8afcbbd0986",
                                    "text": "Lorem aute in culpa adipisicing aute aliquip nulla quis irure ea enim ullamco sunt. Consequat deserunt ipsum officia ut officia officia ut tempor tempor qui velit voluptate aliqua. Ad aliquip tempor tempor sint commodo esse deserunt et elit aute Lorem in et.",
                                    "created_at": "Thu Apr 21 1977 23:23:36 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "41b4cc8ffc01aef863dfa8afcbbd0986",
                                        "fullname": "Roman V",
                                        "avatar": "https://sun1-89.userapi.com/c847216/v847216083/1d367d/9TGvLbZGnSg.jpg?ava=1"
                                    }
                                },
                                {
                                    "_id": "e079c8cddf392c639c7e77481717352a",
                                    "text": "Irure proident consequat ipsum dolore do Lorem mollit ad sit id. Consequat non exercitation sunt nostrud laborum consequat quis ea. Eiusmod occaecat excepteur do occaecat elit id aliqua dolore deserunt ea.",
                                    "created_at": "Wed May 15 1985 16:40:53 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "e079c8cddf392c639c7e77481717352a",
                                        "fullname": "Lihi R",
                                        "avatar": "https://sun9-33.userapi.com/c841324/v841324414/1e790/6LB5VrjE_Ls.jpg?ava=1"
                                    }
                                },
                                {
                                    "_id": "6e68d13b2678d793d340b5fb0c79297d",
                                    "text": "Ut elit enim enim cupidatat ut velit eiusmod. Duis sint labore non velit elit qui do sunt in non nisi. Consectetur deserunt irure magna mollit aute.",
                                    "created_at": "Wed Sep 19 1979 20:02:43 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "6e68d13b2678d793d340b5fb0c79297d",
                                        "fullname": "Roman V",
                                        "avatar": "https://sun1-89.userapi.com/c847216/v847216083/1d367d/9TGvLbZGnSg.jpg?ava=1"
                                    }
                                },
                                {
                                    "_id": "f31af49941293524c86c746c10e72f0d",
                                    "text": "Eiusmod commodo velit proident sint enim. Commodo cupidatat laboris anim nisi id dolor fugiat sint adipisicing. Anim exercitation enim consequat duis.",
                                    "created_at": "Sun Jun 25 2017 16:15:58 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "f31af49941293524c86c746c10e72f0d",
                                        "fullname": "Lihi R",
                                        "avatar": "https://sun9-33.userapi.com/c841324/v841324414/1e790/6LB5VrjE_Ls.jpg?ava=1"
                                    }
                                },
                                {
                                    "_id": "2f0405c6a12d20a5acbd91db41c016b8",
                                    "text": "Minim ad consectetur consectetur laborum do consequat Lorem nisi mollit ex aute anim consectetur voluptate. Nostrud Lorem velit duis ut esse cillum exercitation occaecat. Adipisicing labore aliqua in ut fugiat labore magna.",
                                    "created_at": "Wed Apr 01 1970 14:35:56 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "2f0405c6a12d20a5acbd91db41c016b8",
                                        "fullname": "Audrey Lopez",
                                        "avatar": null
                                    }
                                },
                                {
                                    "_id": "24c931d4acbec73f8d5f0265c8f1d413",
                                    "text": "Mollit officia amet commodo labore laborum exercitation irure. Excepteur reprehenderit occaecat ipsum nisi consequat duis consectetur mollit occaecat qui officia. Et consequat eiusmod duis eu eiusmod veniam cupidatat mollit laboris est.",
                                    "created_at": "Sun Jun 25 2006 06:37:23 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "24c931d4acbec73f8d5f0265c8f1d413",
                                        "fullname": "Roman V",
                                        "avatar": "https://sun1-89.userapi.com/c847216/v847216083/1d367d/9TGvLbZGnSg.jpg?ava=1"
                                    }
                                },
                                {
                                    "_id": "cb20a36a653a59a3854c00d6c61ab3c8",
                                    "text": "Quis cillum cillum pariatur Lorem excepteur proident consectetur sit elit est quis eu in. Sint qui labore quis quis cupidatat dolore laborum commodo dolore nisi dolor commodo et incididunt. Proident reprehenderit Lorem occaecat nisi laborum tempor est incididunt.",
                                    "created_at": "Wed Apr 24 2013 15:52:05 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "cb20a36a653a59a3854c00d6c61ab3c8",
                                        "fullname": "Bethany Oconnor",
                                        "avatar": null
                                    }
                                },
                                {
                                    "_id": "140ed62cb052f591a5f2999288357281",
                                    "text": "Ad proident amet minim officia consectetur aliqua minim exercitation. Quis dolor pariatur eu excepteur. Sit adipisicing laboris sit nostrud in velit enim occaecat ipsum.",
                                    "created_at": "Thu Sep 23 1982 04:11:53 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "140ed62cb052f591a5f2999288357281",
                                        "fullname": "Lihi R",
                                        "avatar": "https://sun9-33.userapi.com/c841324/v841324414/1e790/6LB5VrjE_Ls.jpg?ava=1"
                                    }
                                },
                                {
                                    "_id": "fa568cb4abc8dbb53f03432442481e22",
                                    "text": "Ipsum nulla et in cillum ea commodo cupidatat proident. Id ipsum consequat minim ullamco reprehenderit quis aliqua duis quis. Anim eu aliquip laboris velit aliquip ea.",
                                    "created_at": "Mon May 02 1983 03:30:11 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "fa568cb4abc8dbb53f03432442481e22",
                                        "fullname": "Roman V",
                                        "avatar": "https://sun1-89.userapi.com/c847216/v847216083/1d367d/9TGvLbZGnSg.jpg?ava=1"
                                    }
                                }
                            ]}
                        />
                    </div>

                </div>

                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div />
                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-username">Роман B</b>
                            <div className="chat__dialog-header-status">
                                <div className="status status--online" >online</div>
                            </div>
                        </div>
                        <Icon type="ellipsis" style={{ fontSize: '25px'}}/>
                    </div>
                    <div className="chat__dialog-messages">
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
                        />
                    </div>
                </div>
            </div>
        </section>
);

export default Home;