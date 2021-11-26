import React from "react";
import Button from "./core/button";
import { Modal } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function SuccessModal({ successModal, onHide, formData }) {
  return (
    <Modal show={successModal} onHide={onHide} dialogClassName="modal-30w">
      <Modal.Header>
        <Modal.Title>Success!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Full Name: {formData.fullName}</p>
        <p>Nickname: {formData.nickname}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>
          Birthday: {formData.day}/{formData.month}/{formData.year}
        </p>
        <p>Github: {formData.gitHub}</p>
        <p>LinkedIn: {formData.linkedIn}</p>
        <p>Certificate: {formData.certificates}</p>
        <p>Team Name: {formData.teamName}</p>
        <p>Institution: {formData.institution}</p>
        <p>Gradutation: {formData.graduation}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" txt="Close" onClick={onHide} outlined />
      </Modal.Footer>
    </Modal>
  );
}

export default SuccessModal;
