import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "./core/button";
import Input from "./core/input-icon";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

export function CertificateModal({
  certificateModal,
  closeModal,
  Heart,
//   iconClick,
//   setIconClick,
  certificates,
  setCertificates,
}) {
  const [input1, setinput1] = useState(false);
  const [input2, setinput2] = useState(false);
  const [input3, setinput3] = useState(false);
  const [input4, setinput4] = useState(false);
  const [input5, setinput5] = useState(false);
  return (
    <Modal show={certificateModal} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Certificates</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input
          placeholder="github.com/in/foo-bar-3a0560104/"
          onChange={(e) => [setCertificates(e.target.value)]}
          value={certificates}
          type="url"
          fontSize="16px"
          src={Heart}
          label="Certificates"
          isClicked={input1}
          setClick={setinput1}
        />
        <Input
          placeholder="github.com/in/foo-bar-3a0560104/"
          onChange={(e) => [setCertificates(e.target.value)]}
          value={certificates}
          type="url"
          fontSize="16px"
          src={Heart}
          label="Certificates"
          isClicked={input2}
          setClick={setinput2}
        />
        <Input
          placeholder="github.com/in/foo-bar-3a0560104/"
          onChange={(e) => [setCertificates(e.target.value)]}
          value={certificates}
          type="url"
          fontSize="16px"
          src={Heart}
          label="Certificates"
          isClicked={input3}
          setClick={setinput3}
        />
        <Input
          placeholder="github.com/in/foo-bar-3a0560104/"
          onChange={(e) => [setCertificates(e.target.value)]}
          value={certificates}
          type="url"
          fontSize="16px"
          src={Heart}
          label="Certificates"
          isClicked={input4}
          setClick={setinput4}
        />
        <Input
          placeholder="github.com/in/foo-bar-3a0560104/"
          onChange={(e) => [setCertificates(e.target.value)]}
          value={certificates}
          type="url"
          fontSize="16px"
          src={Heart}
          label="Certificates"
          isClicked={input5}
          setClick={setinput5}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" txt="Close" onClick={closeModal} />
      </Modal.Footer>
    </Modal>
  );
}
