import React from 'react';
import styled from 'styled-components';

function NavTabs({ 
  isTab1Active,  
  isTab2Active,
  isTab3Active,
  toggleTab1,
  toggleTab2,
  toggleTab3
}) {
  
  const Tabs = styled.nav`
    display: flex;
    flex-flow: row;
    align-items: center;
    height: 48px;
    width: 100%;
    margin-top: 30px;
    background-color: inherit;

`;

  const ChooseTabs = styled.div`
  

    height: 48px;
    width: 33.33%;
    display: flex;
    flex-flow: column;
    text-align: center;
    justify-content: center;
    font-size: 16px;
    font-family: Nunito;
    border-bottom: ${props => props.isActive ? 'solid 3px #074ee8;' : 'solid 2px #aaa '};
    transition: ${props => props.isActive ? 'border 0.125s, color 0.125s;' : 'none'};
    color: ${props => props.isActive ? '#074ee8;' : '#aaa'};
    cursor: pointer;
    background-color: inherit;
  
  p{
    background-color: inherit;
  }
`;

  return (
    <>
      <Tabs>
        <ChooseTabs
        id="chooseTab1"
        isActive={isTab1Active}
        onClick={toggleTab1}
        >
          <p>Basic</p>
        </ChooseTabs>
        
        <ChooseTabs 
        id="chooseTab2"
        isActive={isTab2Active}
        onClick={toggleTab2}
        >
          <p>Basic</p>
        </ChooseTabs>
        
        <ChooseTabs 
        id="chooseTab3"
        isActive={isTab3Active}
        onClick={toggleTab3}
        >
          <p>Basic</p>
        </ChooseTabs>
      </Tabs>
    </>
  );
}

export default NavTabs;

