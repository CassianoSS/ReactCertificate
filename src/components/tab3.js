import React, { useState, useEffect } from "react";
import LabeledInput from "./core/labeled-input";
import Button from "./core/button";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck, faHeart } from "@fortawesome/free-solid-svg-icons";

const FormBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 0;
  background-color: inherit;
`;
function Tab3(formManagement, formData) {
  const [certificates, setCertificates] = useState("");
  const [teamName, setTeamName] = useState("");
  const [institution, setInstitution] = useState("");
  const [graduation, setGraduation] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    formManagement({ certificates, teamName, institution, graduation });
    alert("SUCESSO!!!");
  }

  useEffect(() => {
    if (formData) {
      setCertificates(formData.certificates);
      setTeamName(formData.teamName);
      setInstitution(formData.institution);
      setGraduation(formData.graduation);
    }
  }, []);
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
        {/* <FontAwesomeIcon
          icon={faHeart}
          style={{ backgroundColor: "inherit", marginRight: 5 }}
        /> */}
        <FormBox>
          <Button
            type="button"
            txt={
              <>
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{ backgroundColor: "inherit", marginRight: 5 }}
                />
                More
              </>
            }
          />
        </FormBox>

        <LabeledInput
          inputLabel="Team Name*"
          placeholder="linkedin.com/in/foo-bar-3a0560104/"
          onChange={(e) => [setTeamName(e.target.value)]}
          value={teamName}
          type="text"
          required
        />

        <LabeledInput
          inputLabel="Institution*"
          placeholder="Universidade da Paraíba"
          onChange={(e) => [setInstitution(e.target.value)]}
          value={institution}
          type="text"
          required
        />

        <LabeledInput
          inputLabel="Graduation*"
          placeholder="Ciência da Computação"
          onChange={(e) => [setGraduation(e.target.value)]}
          value={graduation}
          type="text"
          required
        />
        <FormBox>
          <Button
            type="submit"
            txt={
              <>
                Finish
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ backgroundColor: "inherit", marginLeft: 5 }}
                />
              </>
            }
          />
        </FormBox>
      </form>
    </>
  );
}

export default Tab3;
