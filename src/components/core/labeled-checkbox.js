import React from "react";
import styled from "styled-components";

const Label = styled.p`
  margin-top: 20px;
  font-size: 16px !important;
  background-color: inherit;
`;

function LabeledCheckbox({ label, required, checked, setChecked }) {
  return (
    <>
      <Label id="checkid">
        <input
          for="checkid"
          type="checkbox"
          required={required}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        {label}
      </Label>
    </>
  );
}

export default LabeledCheckbox;
