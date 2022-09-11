import React from 'react';
import * as C from './Styles'
import { MdMessage } from "react-icons/md";

const Default = () => {
    return (
        <C.Container>
            <MdMessage />
            <C.Title>Привет</C.Title>
            <C.Info>
                Начни диалог:))
            </C.Info>
        </C.Container>
    );
};

export default Default;