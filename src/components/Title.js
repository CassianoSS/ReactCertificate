import React from 'react';
import styled from 'styled-components';

const Styles = styled.h4`
  
  font-size: 24px;
  font-family: Inter;
  font-weight: 600;
  background-color: inherit;


`;

export const Title = (props) => (
    <Styles>
        {props.children}
    </Styles>
)