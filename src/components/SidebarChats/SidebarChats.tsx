import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../Services/Firebase'
import * as C from './Styles'
import { useCollection } from 'react-firebase-hooks/firestore';
import SidebarChatItem from '../SidebarChatItem/SidebarChatItem';

const SidebarChats = ({ setUserChat, userChat }: any) => {
    const [user] = useAuthState(auth as any)

    const refChat = db.collection('chats').where('users', 'array-contains', user?.email)

    const [chatsSnapshot] = useCollection(refChat as any)

    return (
        <C.Container>
            {chatsSnapshot?.docs.map((item, index) => (
                <C.Content key={index}>
                    <SidebarChatItem
                        id={item.id}
                        users={item.data().users}
                        user={user}
                        setUserChat={setUserChat}
                        active={userChat?.chatId === item.id ? 'active' : ''}
                    />
                    <C.Divider />
                </C.Content>
            ))}
        </C.Container>
    );
};

export default SidebarChats;