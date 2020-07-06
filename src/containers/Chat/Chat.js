import React, {useEffect, useRef, useState} from 'react';
import {connect } from 'react-redux';
import io from 'socket.io-client';
import ChatCards from "../../components/ChatCard/ChatCard";
import * as actions from '../../store/actions/index';

const Chat = (props) => {

    const api_url = process.env.REACT_APP_API_URL;
    let socket = useRef(null);

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const onGetUsersConnected = props.onGetUsersConnected;

    useEffect( ()=> {
            socket.current = io(api_url);
            console.log("1er socket lors de l'initialisation du socket ", socket.current);
            socket.current.emit('join', {name: props.name, room : props.room }, () => {

            });
        return () => {
            socket.current.emit('disconnect');
            socket.current.off();
        }
    },[props.name, props.room,api_url]);

    useEffect( ()=> {
        socket.current.on('message', (message) => {
        setMessages([...messages, message])
        });
        console.log("second socket lors dela reception d'un message ", socket.current);
        console.log(messages);
        
    }, [messages]);

    useEffect( () => {
       socket.current.on('roomData', (data) => {
           onGetUsersConnected(data.users);
       });
        console.log("3e socket lors du display des users connected ", socket.current);
    
    },[onGetUsersConnected]);

    const handleChangeMessage =(event) => {
     setMessage(event.target.value);
    };

    //Function for sending message
    const sendMessage = (event) => {
        event.preventDefault();
    if (message) {
        socket.current.emit('sendMessage', message, () => {
            setMessage('');
        });
        console.log("4e socket lors de l'envoi d'un message" +socket.current);
    }
    };

    return (
        <div className='text-center'>
            <div className='container p-10 inline-block '>
                   <div className='flex'>

                       <ChatCards
                           message={message}
                           sendMessage={sendMessage}
                           onchange={handleChangeMessage}
                           onkeypress={event => event.key === 'Enter' ? sendMessage(event) : null}
                           room = {props.room}
                           messages={messages}
                       />
                       <div className='flex-1 bg-gray-200 py-4'>
                            <h1 className='text-lg font-bold text-gray-700'>Application de chat en temps réel faite avec
                                <span role="img" aria-label='heart'>❤️</span> Par <span className='rounded-md bg-indigo-200 text-indigo-700 px-2 text-sm'>Caleb</span>
                            </h1>
                            <div>
                                <h2 className='text-lg text-gray-900 mt-5'>Utilisateurs en ligne dans le groupe :</h2>
                                {
                                    [...new Set(props.users)].map((user, i) => {
                                        return (
                                            <div className='flex space-x-2 p-3 items-center' key={i}>
                                                <span className='bg-green-700 rounded-full h-2 w-2'/>
                                                <p className='text-green-700 font-bold '>{user.name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                       </div>
                   </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        name: state.chat.name,
        room: state.chat.room,
        users: state.chat.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetUsersConnected : (users) => dispatch(actions.getusersConnected(users))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);