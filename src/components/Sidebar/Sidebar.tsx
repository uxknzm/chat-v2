import React from 'react';
import SidebarChats from '../SidebarChats/SidebarChats';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import * as C from './Styles'

const Sidebar = ({ setUserChat, userChat }: any) => {
    return (
        <C.Container>
            <SidebarHeader setUserChat={setUserChat} />
            <SidebarChats setUserChat={setUserChat} userChat={userChat} />
        </C.Container>
    );
};

export default Sidebar;