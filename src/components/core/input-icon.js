import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
const Field = styled.input`
  background-color: inherit;
  border: none;
  width: 100%;
  padding: 16px 0;
  margin-left: 10px;
  margin-top: ${(props) => props.marginTop};
  font-size: ${(props) => props.fontSize};
  /* letter-spacing: ${(props) => props.letterSpacing}; */
  color: #767676;
  &::placeholder {
    font-size: ${(props) => props.fontSize};
    /* color: #ffffff; */
  }
  &:focus {
    outline: none;
  }

  &:focus::-webkit-input-placeholder {
    color: inherit;
  }
`;

const Icon = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 4%;
`;

const Box = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  border: 2px solid #aaaaaa;
  /* border-color: ${(props) => props.borderColor}; */
  margin: 0px 0;
  overflow: hidden;
  background-color: inherit;
`;

const CustomLabel = styled.p`
  font-size: 14px;
  color: #767676;
  background-color: inherit;
  margin-top: 30px;
  margin-bottom: 3px;
`;

const Input = ({
  type,
  placeholder,
  label,
  isClicked,
  setClick,
  src,
  alt,
  margin,
  borderColor,
  fontSize,
  letterSpacing,
  onChange,
  value,
  marginTop,
  dataCy,
}) => {

  return (
    <>
      <CustomLabel>{label}</CustomLabel>
      <Box
        margin={margin}
        borderColor={borderColor}
        data-testid="test-input-component"
      >
        <Field
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          fontSize={fontSize}
          letterSpacing={letterSpacing}
          value={value}
          marginTop={marginTop}
          autocomplete="off"
          data-cy={dataCy}
        />
        <Icon>
          {/* <img src={src} alt={alt} /> */}
          <FontAwesomeIcon
            icon={isClicked ? heartSolid : faHeart}
            style={{ backgroundColor: "inherit", marginRight: 5 }}
            onClick={() => setClick(!isClicked)}
          />
        </Icon>
      </Box>
    </>
  );
};

Text.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
  borderColor: PropTypes.string,
  letterSpacing: PropTypes.string,
};

Text.defaultProps = {
  fontSize: "16px",
  letterSpacing: "0",
};

export default Input;
