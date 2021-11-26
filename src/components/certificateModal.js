import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "./core/button";
import Input from "./core/input-icon";

import "bootstrap/dist/css/bootstrap.min.css";

export function CertificateModal({
  certificateModal,
  closeModal,
  Heart,
  //   iconClick,
  //   setIconClick,
  //   certificates,
  //   setCertificates,
}) {
  const [input1, setinput1] = useState(false);
  const [certificate1, setCertificate1] = useState("");
  const [input2, setinput2] = useState(false);
  const [certificate2, setCertificate2] = useState("");
  const [input3, setinput3] = useState(false);
  const [certificate3, setCertificate3] = useState("");
  const [input4, setinput4] = useState(false);
  const [certificate4, setCertificate4] = useState("");
  const [input5, setinput5] = useState(false);
  const [certificate5, setCertificate5] = useState("");
  return (
    <Modal show={certificateModal} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Certificates</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input
          placeholder="github.com/in/foo-bar-3a0560104/"
          onChange={(e) => [setCertificate1(e.target.value)]}
          value={certificate1}
          type="url"
          fontSize="16px"
          src={Heart}
          label="Certificates"
          isClicked={input1}
          setClick={setinput1}
        />
        <Input
          placeholder="github.com/in/foo-bar-3a0560104/"
          onChange={(e) => [setCertificate2(e.target.value)]}
          value={certificate2}
          type="url"
          fontSize="16px"
          src={Heart}
          label="Certificates"
          isClicked={input2}
          setClick={setinput2}
        />
        <Input
          placeholder="github.com/in/foo-bar-3a0560104/"
          onChange={(e) => [setCertificate3(e.target.value)]}
          value={certificate3}
          type="url"
          fontSize="16px"
          src={Heart}
          label="Certificates"
          isClicked={input3}
          setClick={setinput3}
        />
        <Input
          placeholder="github.com/in/foo-bar-3a0560104/"
          onChange={(e) => [setCertificate4(e.target.value)]}
          value={certificate4}
          type="url"
          fontSize="16px"
          src={Heart}
          label="Certificates"
          isClicked={input4}
          setClick={setinput4}
        />
        <Input
          placeholder="github.com/in/foo-bar-3a0560104/"
          onChange={(e) => [setCertificate5(e.target.value)]}
          value={certificate5}
          type="url"
          fontSize="16px"
          src={Heart}
          label="Certificates"
          isClicked={input5}
          setClick={setinput5}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="button"
          txt="Close"
          onClick={closeModal}
          
        />
      </Modal.Footer>
    </Modal>
  );
}
