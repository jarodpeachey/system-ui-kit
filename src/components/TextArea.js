/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../theme';
import { pSBC } from '../utils/color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Input = ({
  className,
  id,
  placeholder = '',
  onChange,
  onFocus,
  onBlur,
  variant,
  label,
  state,
  size,
  fullWidth,
  defaultValue,
  value,
}) => {
  const [inputValue, setInputValue] = useState(value || defaultValue || '');

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  console.log(variant);

  const customOnChange = (e) => {
    setInputValue(e.target.value);

    onChange(e);
  };

  const customOnFocus = (e) => {
    onFocus(e);
  };

  const customOnBlur = (e) => {
    onBlur(e);
  };

  return (
    <Wrapper fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <StyledTextArea
        className={className}
        id={id}
        size={size}
        unselectable="on"
        fullWidth={fullWidth}
        state={state}
        variant={variant}
        placeholder={placeholder}
        value={inputValue}
        onChange={customOnChange}
        onFocus={customOnFocus}
        onBlur={customOnBlur}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  position: relative;
  width: fit-content;
  width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
`;

const Label = styled.label`
  display: block;
  width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
  margin-bottom: 8px;
  font-weight: 600;
  color: ${(props) =>
    props.state === 'success'
      ? props.theme.color.success
      : props.state === 'error'
      ? props.theme.color.error
      : ''} !important;
`;

const StyledTextArea = styled.textarea`
  -webkit-user-select: initial;
  -khtml-user-select: initial;
  -moz-user-select: initial;
  -ms-user-select: initial;
  user-select: initial;
  display: inline-block;
  padding: ${(props) =>
    props.size === 'xs'
      ? '4px 8px'
      : props.size === 'small'
      ? '8px 12px'
      : props.size === 'large'
      ? '16px 18px'
      : '13px 15px'};
  font-size: ${(props) =>
    props.size === 'xs'
      ? '13px'
      : props.size === 'small'
      ? '14px'
      : props.size === 'large'
      ? '17px'
      : '15px'};
  transition: border 0.15s;
  display: inline-block;
  resize: vertical;
  width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
  ::placeholder {
    color: ${(props) => props.theme.color.text.two};
  }
  :focus {
    outline: none;
    border: 1px solid
      ${(props) =>
        props.color === 'secondary'
          ? props.theme.color.secondary
          : props.state === 'success'
          ? props.theme.color.success
          : props.state === 'error'
          ? props.theme.color.error
          : props.theme.color.primary};
  }
  ${(props) =>
    props.variant === 'filled'
      ? css`
          border-radius: ${props.theme.radius.one};
          background: ${props.theme.color.gray.one};
          color: ${props.state === 'success'
            ? props.theme.color.success
            : props.state === 'error'
            ? props.theme.color.error
            : null};
          ::placeholder {
            color: ${props.state === 'success'
              ? props.theme.color.success
              : props.state === 'error'
              ? props.theme.color.error
              : null};
          }
          :focus {
            outline: none;
            border: 1px solid
              ${props.state === 'success'
                ? props.theme.color.success
                : props.state === 'error'
                ? props.theme.color.error
                : props.theme.color.primary};
          }
          border: 1px solid ${props.theme.color.gray.one};
        `
      : css`
          border-radius: ${props.theme.radius.one};
          border: 1px solid
            ${props.state === 'success'
              ? props.theme.color.success
              : props.state === 'error'
              ? props.theme.color.error
              : props.theme.color.gray.four};
        `};

  :focus ~ div svg {
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;
  }
`;

export default Input;
