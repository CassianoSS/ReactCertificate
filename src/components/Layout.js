import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  max-width: 617px;
  max-height: 800px;
  width: 100%;
  height: 100%;
  background-color: white;
  margin: auto;
  margin-top: 50px;
  border-radius: 20px;
  padding: 45px;


`;

export const Layout = (props) => (
    <Styles>
        {props.children}
    </Styles>
)
