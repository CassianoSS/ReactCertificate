import React, { useState, useEffect } from "react";
import LabeledInput from "./core/labeled-input";
import Button from "./core/button";
import styled from "styled-components";
import Input from "./core/input-icon";
import { CertificateModal } from "./certificateModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

import Heart from "../assets/heart.svg";
const FormBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 0;
  background-color: inherit;
`;
function Tab3({ formManagement, formData, setlockTab2, setlockTab3 }) {
  const [certificates, setCertificates] = useState("");
  const [teamName, setTeamName] = useState("");
  const [institution, setInstitution] = useState("");
  const [graduation, setGraduation] = useState("");
  const [iconClick, setIconClick] = useState(false);
  const [certificateModal, setCertificateModal] = useState(false);

  const handleClose = () => setCertificateModal(false);
  const handleOpen = () => setCertificateModal(true)

  function handleSubmit(e) {
    e.preventDefault();
    setlockTab2(false);
    setlockTab3(false);
    formManagement({ certificates, teamName, institution, graduation });
    alert(formData.certificates);
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
        {/* <LabeledInput
          inputLabel="Certificates"
          placeholder="github.com/in/foo-bar-3a0560104/"
          onChange={(e) => [setCertificates(e.target.value)]}
          value={certificates}
          required
        /> */}
        <Input
          placeholder="github.com/in/foo-bar-3a0560104/"
          onChange={(e) => [setCertificates(e.target.value)]}
          value={certificates}
          type="url"
          fontSize="16px"
          src={Heart}
          label="Certificates*"
          isClicked={iconClick}
          setClick={setIconClick}
          required
        />

        <FormBox>
          <Button
            type="button"
            onClick={handleOpen}
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
          <CertificateModal
            certificateModal={certificateModal}
            closeModal={handleClose}
            Heart={Heart}
            // iconClick={iconClick}
            // setIconClick={setIconClick}
            certificates={certificates}
            setCertificates={setCertificates}
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
