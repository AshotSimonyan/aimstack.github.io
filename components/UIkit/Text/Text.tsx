import React from 'react';
import TextStyle from './Text.style'

const Text = ({children}) => {
    return (
        <TextStyle size={3}>
            {children}
        </TextStyle>
    );
};

export default Text;
