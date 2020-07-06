import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { calculateColor } from '../utils/color';

const RadioButton = ({
  children,
  className,
  id,
  onChange,
  disabled,
  name,
  value,
  inline,
}) => {
  const customOnChange = (e) => {
    onChange && onChange(e);
  };

  return (
    <RadioButtonWrapper
      className={className}
      id={id}
      disabled={disabled}
      htmlFor={name}
      inline={inline}
    >
      <input
        value={value}
        onChange={customOnChange}
        disabled={disabled}
        name={name}
        type="radio"
      />
      <span className="checkmark mr-2">
        <div className="icon" />
      </span>
      {children}
    </RadioButtonWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${(props) => props.theme.spacing.two}px 0;
`;

const RadioButtonWrapper = styled.label`
  color: ${(props) => (props.disabled ? 'rgb(190, 190, 190)' : '')};
  display: block;
  position: relative;
  display: ${(props) => (props.inline ? 'inline-flex' : 'flex')};
  align-items: center;
  cursor: ${(props) => (props.disabled ? '' : 'pointer')};
  input {
    position: absolute;
    opacity: 0;
    left: 0;
    cursor: ${(props) => (props.disabled ? '' : 'pointer')};
    z-index: 999;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .checkmark {
    height: 18px;
    width: 18px;
    padding: 3px;
    display: flex;
    position: relative;
    align-items: center;
    transition: all 0.1s;
    justify-content: center;
    border-radius: 500px;
    border: 1px solid
      ${(props) =>
        props.disabled ? 'rgb(230, 230, 230)' : props.theme.color.gray.four};
    background: #ffffff;
  }
  input:checked ~ .checkmark {
    transition: all 0.1s;
    border: 1px solid
      ${(props) =>
        props.disabled
          ? 'rgb(230, 230, 230)'
          : props.theme.color.primary};
  }
  .icon {
    background: white;
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 500px;
    transition: all 0.1s;
  }
  // input:checked ~ .icon {
  //   display: block;
  // }
    input:hover ~ .checkmark {
    border: 1px solid ${(props) =>
      props.disabled ? 'rgb(230, 230, 230)' : props.theme.color.gray.four};
  }
    input:checked:hover ~ .checkmark {
    border: 1px solid ${(props) =>
      props.disabled
        ? 'rgb(230, 230, 230)'
        : `${props.theme.color.primary}`};
  }
  input:checked ~ .checkmark > .icon {
    background: ${(props) => props.theme.color.primary};
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 500px;
    transition: all 0.1s;
  }
  input:focus ~ .checkmark {
    // box-shadow: 0px 0px 0px 3px ${(props) =>
      props.theme.color.primary}30 !important;
  }
`;

RadioButton.propTypes = {
  children: PropTypes.object,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default RadioButton;
