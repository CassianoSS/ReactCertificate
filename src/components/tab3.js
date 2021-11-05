import React, { useState } from "react";
import LabeledInput from "./core/labeled-input";
import Button from "./core/button";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

const FormBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 0;
  background-color: inherit;
`;
function Tab3() {
  const [certificates, setCertificates] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    alert("SUCESSO!!!");
  }
  return (
    <>
      <form style={{ backgroundColor: "white" }} onSubmit={handleSubmit}>
        <LabeledInput
          inputLabel="Certificates"
          placeholder="github.com/in/foo-bar-3a0560104/"
          onChange={(e) => [setCertificates(e.target.value)]}
          value={certificates}
          required
        />
        <FormBox>
          <Button
            type="button"
            txt={
              <>
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{ backgroundColor: "inherit", marginRight:5 }}
                />
                More
              </>
            }
          />
        </FormBox>

        <LabeledInput
          inputLabel="Team Name*"
          placeholder="linkedin.com/in/foo-bar-3a0560104/"
        />

        <LabeledInput
          inputLabel="Institution*"
          placeholder="Universidade da Paraíba"
        />

        <LabeledInput
          inputLabel="Graduation*"
          placeholder="Ciência da Computação"
        />
        <Button
          type="submit"
          txt={
            <>
              Finish
              <FontAwesomeIcon
                icon={faCheck}
                style={{ backgroundColor: "inherit", marginLeft:5 }}
              />
            </>
          }
        />
      </form>
    </>
  );
}

export default Tab3;
