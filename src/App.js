import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./components/GlobalStyle.js";
import { Layout } from "./components/Layout.js";
import { Title } from "./components/Title.js";
import NavTabs from "./components/NavTabs.js";
import Tab1 from "./components/tab1.js";
import Tab2 from "./components/tab2.js";
import Tab3 from "./components/tab3.js";

function App() {
  const [isTab1Active, setIsTab1Active] = useState(true);
  const [isTab2Active, setIsTab2Active] = useState(false);
  const [isTab3Active, setIsTab3Active] = useState(false);
  const [lockTab2, setlockTab2] = useState(true);
  const [lockTab3, setlockTab3] = useState(true);
  const [formData, setformData] = useState({});

  function formManagement(data) {
    setformData({ ...formData, ...data });
  }
  console.log(formData);

  function selectTab1() {
    setIsTab1Active(true);
    setIsTab2Active(false);
    setIsTab3Active(false);
  }

  function selectTab2() {
    if (!lockTab2) {
      setIsTab2Active(true);
      setIsTab1Active(false);
      setIsTab3Active(false);
    }
  }

  function selectTab3(){
    if (!lockTab3) {
      setIsTab3Active(true);
      setIsTab1Active(false);
      setIsTab2Active(false);
    }
  }

  useEffect(() => {
    if (!lockTab2) {
      setIsTab2Active(true);
      setIsTab1Active(false);
      setIsTab3Active(false);
    }
  }, [lockTab2]);

  useEffect(() => {
    if (!lockTab3) {
      setIsTab3Active(true);
      setIsTab1Active(false);
      setIsTab2Active(false);
    }
  }, [lockTab3]);

  function handleNextTab1(){
    setlockTab2(false);
    selectTab2();
  }
  function handleNextTab2(){
    setlockTab3(false);
    selectTab3();
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Title>Team Sign Up</Title>
        <NavTabs
          isTab1Active={isTab1Active}
          isTab2Active={isTab2Active}
          isTab3Active={isTab3Active}
          toggleTab1={selectTab1}
          toggleTab2={selectTab2}
          toggleTab3={selectTab3}
        />

        {isTab1Active ? (
          <Tab1
            setlockTab2={setlockTab2}
            formManagement={formManagement}
            formData={formData}
            selectTab2={selectTab2}
            handleNextTab1={handleNextTab1}
          />
        ) : null}
        {isTab2Active ? (
          <Tab2
            setlockTab3={setlockTab3}
            selectTab3={selectTab3}
            formData={formData}
            formManagement={formManagement}
            handleNextTab2={handleNextTab2}
          />
        ) : null}
        {isTab3Active ? (
          <Tab3 formManagement={formManagement} formData={formData} setlockTab2={setlockTab2} setlockTab3={setlockTab3} />
        ) : null}
      </Layout>
    </>
  );
}

export default App;
