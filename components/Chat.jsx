import React from 'react'
import ChatHeader from './ChatHeader';
import Messages from "./Messages";
import { useChatContext } from '@/context/chatContext';

const Chat = () => {

    const {data} = useChatContext()
  return (
    <div className='flex flex-col p-5 grow'>
        <ChatHeader />
        {data.chatId && <Messages />}
    </div>
  )
}

export default Chat;