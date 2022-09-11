import React from 'react';
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../Services/Firebase";
import * as C from "./Styles";
import { MdPerson } from "react-icons/md";

const getUser = (users: any, userLogged: any) =>
    users?.filter((user: any) => user !== userLogged?.email)[0];

const SidebarChatItem = ({ id, users, user, setUserChat, active }: any) => {
    
    const [getUserItem] = useCollection(
        //@ts-ignore
        db.collection("users").where("email", "==", getUser(users, user))
      )

    const Avatar = getUserItem?.docs?.[0]?.data()
    const item = getUser(users, user)

    const handleNewChat = () => {
        const userChat = {
            chatId: id,
            name: item.split('@')[0],
            photoURL: Avatar?.photoURL,
        }
        setUserChat(userChat)
    }

    return (
        <C.Container onClick={handleNewChat} className={active}>
            {Avatar ? <C.Avatar src={Avatar?.photoURL} /> : <MdPerson />}
            <C.Name>
                {item.split('@')[0]}
            </C.Name>
        </C.Container>
    );
};

export default SidebarChatItem;