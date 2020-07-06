import React, {useState} from 'react';
import {connect} from "react-redux";

import * as actions from '../../store/actions/index';

const Join = (props) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    
    const handleChangeName = (e) => {
      setName(e.target.value);
    };
    const handleChangeRoom = (e) => {
        setRoom(e.target.value);
    };
    const handleJoin = (e) => {
        if (!name || !room ) {
            e.preventDefault();
        } else {
            props.onJoinRoom(name, room);
            props.history.push('/chat');
        }
    };

    return (
            <div className='container p-2 text-center mt-16 mb-16'>
                <div className='max-w-2xl inline-block shadow-md border p-3 h-72'>
                    <div className='pt-12'>
                        <h1 className='text-3xl font-bold text-gray-800'>Connectez-vous à un Groupe </h1>
                        <form onSubmit={handleJoin}>
                            <div className='space-y-2 my-4'>
                                <input className='w-full placeholder-gray-700 text-gray-900 bg-white rounded-md border border-gray-800 p-2 focus:border-indigo-700'
                                       placeholder='Pseudo '
                                       type='text'
                                       onChange={handleChangeName}
                                />
        
                                <input className='w-full placeholder-gray-700 text-gray-900 bg-white rounded-md border border-gray-800 p-2 focus:border-indigo-700'
                                       placeholder='Nom du Groupe'
                                       onChange={handleChangeRoom}
                                       type='text'
                                />
                            </div>
                            <button
                                className={!name|| !room ? 'font-bold transition ease-out duration-150 p-2 text-white shadow rounded-md  bg-indigo-200' :
                                    'font-bold transition ease-in-out duration-150 p-2 text-white shadow rounded-md hover:bg-indigo-800 bg-indigo-700'}
                            >
                                Joindre le Groupe
                            </button>
                        </form>
                    </div>
                </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        onJoinRoom : (name, room) => dispatch(actions.joinChat(name, room))
    }
};

export default connect(null, mapDispatchToProps)(Join);