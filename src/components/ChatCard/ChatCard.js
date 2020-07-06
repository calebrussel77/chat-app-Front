import React from 'react';
import Messages from "../Messages/Messages";
import ScrollToBottom from 'react-scroll-to-bottom';



const ChatCards = ({room, message, onchange, onkeypress, sendMessage, messages}) => {
    return (
        <div className='h-auto shadow-lg w-1/2'>
            <div className=''>
                <div className='h-12 bg-indigo-700 w-full'>
                    <div className='text-left flex items-center space-x-2 pt-3'>
                        <div className='bg-green-700 h-2 w-2 rounded-full ml-4' />
                        <span className='text-sm text-green-700 font-bold bg-green-200 px-2 rounded-md'>Groupe {room} </span>
                    </div>
                </div>
                <ScrollToBottom>
                    <div className='bg-white h-72 w-full overflow-auto'>
                        <Messages messages={messages}/>
                    </div>
                </ScrollToBottom>
                <div>
                   <form className='flex mt-4'  onSubmit={sendMessage}>
                       <input className='p-2 border border-gray-400 focus:border-indigo-700 w-full'
                              placeholder='Entrer votre message...'
                              type='text'
                              onKeyPress={onkeypress}
                              value={message}
                              onChange={onchange}
                       />
                       <button className='bg-indigo-700 text-white px-5 py-1 max-w-lg'

                       >Envoyer
                       </button>
                   </form>
                </div>
            </div>
        </div>
    )
};

export default React.memo(ChatCards);

