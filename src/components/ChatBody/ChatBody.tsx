import React from 'react';
import { db } from '../../Services/Firebase'
import * as C from './Styles'
import { useCollection } from 'react-firebase-hooks/firestore';
import Message from '../Message/Message'

const ChatBody = ({ chatId }: any) => {
    const [messageRes] = useCollection(
        //@ts-ignore
        db.collection('chats')
            .doc(chatId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
    )
    const refBody = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (refBody.current !== null) {
            if (refBody.current.scrollHeight > refBody.current.offsetHeight) {
                refBody.current.scrollTop =
                refBody.current.scrollHeight - refBody.current.offsetHeight
            }
        }
    }, [messageRes])

    return (
        <C.Container ref={refBody}>
            {messageRes?.docs.map((message) => (
                <Message
                    key={message.id}
                    user={message.data().user}
                    message={{
                        message: message.data().message,
                        timestamp: message.data().timestamp?.toDate().getTime(),
                    }}
                />
            ))}
        </C.Container>
    );
};

export default ChatBody;