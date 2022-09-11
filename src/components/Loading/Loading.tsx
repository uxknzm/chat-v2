import React from 'react';
import Spinner from 'react-spinner-material';
import * as C from './Styles'


const Loading = () => {
    return (
        <C.Container>
            <Spinner size={120} visible={true} />
        </C.Container>
    );
};

export default Loading;