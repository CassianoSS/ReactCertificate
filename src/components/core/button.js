import React from 'react';
import styled from 'styled-components';


function Button(props) {
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

    return (
        <Styles>
            {props.children}
        </Styles>
    );
}

export default Button;