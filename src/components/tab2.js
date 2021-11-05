import React, { useState, useEffect } from "react";
import LabeledInput from "./core/labeled-input";
import Button from "./core/button.js";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";

const Footer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: inherit;
`;

function Tab2({ selectTab3, setlockTab3, formManagement, formData }) {
  const [linkedIn, setLinkedIn] = useState("");
  const [gitHub, setGitHub] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setlockTab3(false);
    selectTab3();
    formManagement({ linkedIn, gitHub });
  }

  useEffect(() => {
    if(formData){
      setLinkedIn(formData.linkedIn);
      setGitHub(formData.gitHub);
    }    
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "white" }}>
        <LabeledInput
          type="url"
          inputLabel="LinkedIn"
          placeholder="linkedin.com/in/foo-bar-3a0560104/"
          value={linkedIn}
          onChange={(e) => [setLinkedIn(e.target.value)]}
        />
        <LabeledInput
          type="url"
          inputLabel="Github*"
          placeholder="github.com/in/foo-bar-3a0560104/"
          value={gitHub}
          onChange={(e) => [setGitHub(e.target.value)]}
          required
        />
        <Footer>
          <Button
            type="submit"
            txt={
              <>
                Next
                <FaAngleRight style={{ backgroundColor: "inherit" }} />
              </>
            }
          />
        </Footer>
      </form>
    </>
  );
}

export default Tab2;
