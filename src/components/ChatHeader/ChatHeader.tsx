import React from 'react';
import * as C from './Style'
import { MdPerson, MdMoreVert, MdSearch } from 'react-icons/md'

const ChatHeader = ({ photoURL, name }: any) => {
    return (
        <C.Container>
            <C.UserInfo>
                {photoURL ? <C.Avatar src={photoURL} alt='Avatar' /> : <MdPerson />}
                <C.NameContent>
                    <C.Name>{name}</C.Name>
                </C.NameContent>
            </C.UserInfo>
            <C.Options>
                <MdSearch />
                <MdMoreVert />
            </C.Options>
        </C.Container>
    );
};

export default ChatHeader;