import React from 'react';
import ChatBody from '../ChatBody/ChatBody';
import ChatFooter from '../ChatFooter/ChatFooter';
import ChatHeader from '../ChatHeader/ChatHeader';
import Default from '../Default/Default';
import * as C from './Styles'

const Chat = ({ userChat }: any) => {
    
    if (!userChat) return <Default />

    return (
        <C.Container>
            <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
            <ChatBody chatId={userChat?.chatId} />
            <ChatFooter chatId={userChat?.chatId} />
        </C.Container>
    );
};

export default Chat;