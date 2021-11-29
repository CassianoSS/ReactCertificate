import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LabeledCheckbox from "./core/labeled-checkbox.js";
import LabeledInput from "./core/labeled-input.js";
import Button from "./core/button.js";
import { FaAngleRight } from "react-icons/fa";

const Contato = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: inherit;
  margin: 0px;
`;
const EmailBox = styled.div`
  width: 65%;
  background-color: inherit;
  margin: 0px;
`;

const PhoneBox = styled.div`
  width: 30%;
  background-color: inherit;
  margin: 0px;
`;

const BdayTitle = styled.p`
  font-size: 18px;
  color: #767676;
  background-color: inherit;
  margin-top: 1rem;
  margin-bottom: -0.8rem;
`;

const BdayDate = styled.div`
  width: 22%;
  background-color: inherit;
`;

const BdayBox = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin: 10px 0;
  background-color: inherit;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: inherit;
`;

function Tab1({ handleNextTab1, formManagement, formData }) {
  const [fullName, setFullName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState("");
  const [checkBox, setcheckBox] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();    
    handleNextTab1();
    formManagement({
      fullName,
      nickname,
      email,
      phone,
      day,
      month,
      year,
      age,
      checkBox,
    });
  }   

  useEffect(() => {
    if (formData) {
      setFullName(formData.fullName);
      setNickname(formData.nickname);
      setEmail(formData.email);
      setPhone(formData.phone);
      setDay(formData.day);
      setMonth(formData.month);
      setYear(formData.year);
      setAge(formData.age);
      setcheckBox(formData.checkBox);
    }
  }, [formData]);

  return (
    <>
      <form style={{ backgroundColor: "white" }} onSubmit={handleSubmit}>
        <LabeledInput
          inputLabel="Full Name*"
          placeholder="Foo Bar"
          onChange={(e) => [setFullName(e.target.value)]}
          value={fullName}
          type="text"
          required
        />

        <LabeledInput
          inputLabel="Nickname"
          placeholder="Juanito"
          onChange={(e) => [setNickname(e.target.value)]}
          value={nickname}
        />
        <Contato>
          <EmailBox>
            <LabeledInput
              type="email"
              inputLabel="Email*"
              placeholder="foo@bar.com"
              onChange={(e) => [setEmail(e.target.value)]}
              value={email}
              required
            />
          </EmailBox>
          <PhoneBox>
            <LabeledInput
              type="tel"
              inputLabel="Phone*"
              // pattern="([0-9]{2})[0-9]{5}[0-9]{4}"
              placeholder="(00) 00000-0000"
              onChange={(e) => [setPhone(e.target.value)]}
              value={phone}
            />
          </PhoneBox>
        </Contato>
        <BdayTitle>Birthday*</BdayTitle>
        <BdayBox>
          <BdayDate>
            <LabeledInput
              inputLabel="Day*"
              placeholder=" "
              type="number"
              onChange={(e) => [setDay(e.target.value)]}
              value={day}
              required
            />
          </BdayDate>
          <BdayDate>
            <LabeledInput
              inputLabel="Month*"
              placeholder=" "
              type="number"
              onChange={(e) => [setMonth(e.target.value)]}
              value={month}
              required
            />
          </BdayDate>
          <BdayDate>
            <LabeledInput
              inputLabel="Year*"
              placeholder=" "
              type="number"
              onChange={(e) => [setYear(e.target.value)]}
              value={year}
              required
            />
          </BdayDate>
          <BdayDate>
            <LabeledInput
              inputLabel="Age*"
              placeholder=" "
              type="number"
              onChange={(e) => [setAge(e.target.value)]}
              value={age}
              required
            />
          </BdayDate>
        </BdayBox>
        <LabeledCheckbox
          label=" I accept the terms and privacy."
          checked={checkBox}
          setChecked={setcheckBox}
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

export default Tab1;
