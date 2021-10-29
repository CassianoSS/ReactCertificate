
import React, { useState } from 'react';
import { GlobalStyle } from './components/GlobalStyle.js';
import { Layout } from './components/Layout.js';
import { Title } from './components/Title.js';
import NavTabs from './components/NavTabs.js';
import Tab1 from './components/tab1.js';
import Tab2 from './components/tab2.js';
import Tab3 from './components/tab3.js'
import FooterForm from './components/footer.js';




function App() {
  const [isTab1Active, setIsTab1Active] = useState(true)
  const [isTab2Active, setIsTab2Active] = useState(false)
  const [isTab3Active, setIsTab3Active] = useState(false)

  function selectTab1(){
    setIsTab1Active(true);
    setIsTab2Active(false);
    setIsTab3Active(false);

  }
  function selectTab2(){
    setIsTab2Active(true);
    setIsTab1Active(false);
    setIsTab3Active(false);
  }

  function selectTab3(){
    setIsTab3Active(true);
    setIsTab1Active(false);
    setIsTab2Active(false);

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
          toggleTab1={selectTab1}
          toggleTab2={selectTab2}
          toggleTab3={selectTab3}
        />
        
        {isTab1Active ? <Tab1 /> : null}
        {isTab2Active ? <Tab2 /> : null}
        {isTab3Active ? <Tab3 /> : null}
        

        <FooterForm btnText='Next' isTab3Active={isTab3Active} />
      </Layout>
    </>
  );
}

export default App;
