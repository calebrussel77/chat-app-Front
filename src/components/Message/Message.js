import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = ({message, name}) => {
    let isSentByCurrentUser = false;
    const trimName= name.trim().toLowerCase();

    if (message.user === trimName) {
        isSentByCurrentUser = true;
    }

    return(
        isSentByCurrentUser ? (
            <div className='text-right pr-3 mt-2'>
                <div className='inline-block bg-indigo-700 rounded-md px-2 py-1 w-auto h-auto'>
                    <p className='text-white'>{ReactEmoji.emojify(message.text)}</p>
                    <p className='text-sm text-gray-400 text-right'>{trimName}</p>
                </div>
            </div>
        ) : (
            <div className='text-left pl-3 mt-2'>
                <div className='inline-block bg-gray-400 rounded-md py-1 px-2 w-auto h-auto'>
                    <p className='text-gray-800'>{ReactEmoji.emojify(message.text)}</p>
                    <div className='text-right'>
                        <span
                            className= {message.user ==='administrateur' ? `text-sm text-indigo-800 bg-indigo-200 px-2 rounded-md font-bold inline-block` : `font-bold inline-block text-sm text-gray-600`}>
                            {message.user}
                        </span>
                    </div>

                </div>
            </div>
        )
    )
};

export default Message;