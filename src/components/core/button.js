import React from 'react';
import styled from 'styled-components';

const Styles = styled.button`
display: flex;
align-items: center;
background-color: #074ee8;
font-size: 16px;
font-family: Nunito;
color: #fff;
padding: 10px 15px;
border: none;
border-radius: 4px;
cursor: pointer;
`;

function Button({ type, txt, onClick }) {

    return (
        <Styles type={type} onClick={onClick}>
            {txt}
        </Styles>
    );
}

export default Button;