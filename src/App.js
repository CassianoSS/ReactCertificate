
import React, { useState } from 'react';
import { GlobalStyle } from './components/GlobalStyle.js';
import { Layout } from './components/Layout.js';
import { Title } from './components/Title.js';
import NavTabs  from './components/NavTabs.js';



function App() {
  const [isTab1Active, setIsTab1Active] = useState(false)
  const [isTab2Active, setIsTab2Active] = useState(false)
  const [isTab3Active, setIsTab3Active] = useState(false)

  function toggleTab1(){
    setIsTab1Active(!isTab1Active);
  }

  
  function toggleTab1(){
    setIsTab1Active(!isTab1Active);
  }

  function toggleTab2(){
    setIsTab2Active(!isTab2Active);
  }

  function toggleTab3(){
    setIsTab3Active(!isTab3Active);
  }


  
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Title>
          Team Sign Up
        </Title>
        <NavTabs 
          isTab1Active={isTab1Active}
          isTab2Active={isTab2Active}
          isTab3Active={isTab3Active}
          toggleTab1={toggleTab1}
          toggleTab2={toggleTab2}
          toggleTab3={toggleTab3}
        />

      </Layout>



    </>
  );
}

export default App;
