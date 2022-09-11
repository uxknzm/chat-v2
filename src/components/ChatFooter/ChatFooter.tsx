import React from 'react';
import { MdSend } from 'react-icons/md'
import { auth, db } from '../../Services/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/compat/app';
import * as C from './Styles'

const ChatFooter = ({ chatId }: any) => {

    const [user] = useAuthState(auth as any)
    const [message, setMessage] = React.useState('')

    const handleSendMessage = (e: any) => {
        setMessage('')
        e.preventDefault()
        db.collection('chats').doc(chatId).collection('messages').add({
            message: message,
            user: user?.email,
            photoURL: user?.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }

    return (
        <C.Container>
            <C.Form onSubmit={handleSendMessage}>
                <C.Input
                placeholder='Введите сообщение'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                />
                <MdSend cursor='pointer' onClick={handleSendMessage} />
            </C.Form>
        </C.Container>
    );
};

export default ChatFooter;