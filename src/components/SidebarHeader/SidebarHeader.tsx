import React from 'react';
import * as C from './Styles'
import { MdDonutLarge, MdChat, MdMoreVert } from 'react-icons/md'
import * as EmailValidator from 'email-validator'
import { auth, db } from '../../Services/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore'

const SidebarHeader = ({setUserChat}: any) => {
    const [user] = useAuthState(auth as any)
    const refChat = db.collection('chat').where('users', 'array-contains', user?.email)
    const [chatSnapshot] = useCollection(refChat as any)
    
    const handleCreateChat = () => {
        const emailInput = prompt('Кому написать...')

        if (!emailInput) return
        
        if (!EmailValidator.validate(emailInput)) {
            return alert('Неверный емеил')
        } else if (emailInput === user?.email) {
            return alert('хоп')
        } else if (chatExists(emailInput)) {
            return alert('Чат')
        }

        db.collection('chats').add({
            users: [user?.email, emailInput]
        })
    }
    const chatExists = (emailChat: any) => {
        return !!chatSnapshot?.docs.find(
            (chat) => chat.data().user.find((user: any) => user === emailChat)?.length > 0
        )
    }
    
    return (
        <C.Container>
            <C.Avatar 
            src={user?.photoURL ? user?.photoURL : ''} 
            onClick={() => [auth.signOut(), setUserChat(null)]}
            />
            <C.Options>
                <MdDonutLarge />
                <MdChat onClick={handleCreateChat} />
                <MdMoreVert />
            </C.Options>
        </C.Container>
    );
};

export default SidebarHeader;