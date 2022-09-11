import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Services/Firebase';
import * as C from './Styles'

const Message = ({ user, message }: any) => {

    const [userLoggedIn] = useAuthState(auth as any)

    return (
        <C.Container>
            <C.Line className={userLoggedIn?.email === user ? `me` : ''}>
                <C.Content>
                    <C.Message>{message.message}</C.Message>
                    <C.MessageDate>
                        <C.Avatar src={message.photoURL} />
                        <C.User>{user.split('@')[0]}</C.User>
                        {new Date(message?.timestamp).toLocaleString()}
                    </C.MessageDate>
                </C.Content>
            </C.Line>
        </C.Container>
    );
};

export default Message;