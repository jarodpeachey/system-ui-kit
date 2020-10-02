/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from '../theme';
import { pSBC } from '../utils/color';

const Input = (
  {
    className,
    id,
    customStyles,
    inputStyles,
    placeholder = '',
    onChange,
    onFocus,
    onBlur,
    size,
    variant,
    label,
    fullWidth,
    state,
    icon,
    type,
    defaultValue,
    color,
    value,
  },
  ...props
) => {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState(
    value || defaultValue || (type === 'number' ? 0 : ''),
  );

  if (type === 'number') {
    console.log(inputValue);
  }

  useEffect(() => {
    if (value) {
      setInputValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (type === 'number') {
      console.log('Input value', inputValue);
    }
  }, [inputValue]);

  const customOnChange = (e) => {
    setInputValue(e.target.value);

    if (onChange) {
      onChange(e);
    }
  };

  const customOnFocus = (e) => {
    setFocus(true);

    if (onFocus) {
      onFocus(e);
    }
  };

  const customOnBlur = (e) => {
    setFocus(false);


    if (onBlur) {
      onBlur(e);
    }
  };

  const increment = () => {
    console.log(inputValue);
    setInputValue(inputValue + 1);
  };

  const decrement = () => {
    console.log(inputValue);
    setInputValue(inputValue - 1);
  };

  return (
    <Wrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      fullWidth={fullWidth}
      customStyles={customStyles}
      className={className}
    >
      {label && (
        <Label state={state} size={size}>
          {label}
        </Label>
      )}
      {icon && (
        <>
          <StyledInput
            id={id}
            color={color}
            unselectable="on"
            fullWidth={fullWidth}
            size={size}
            state={state}
            withIcon
            variant={variant}
            placeholder={placeholder}
            type={type === 'number' ? 'tel' : type}
            hover={hover}
            value={inputValue}
            onChange={customOnChange}
            onFocus={customOnFocus}
            onBlur={customOnBlur}
            customStyles={inputStyles}
            {...props}
          />
          <Icon size={size}>{icon}</Icon>
          {type === 'number' && (
            <NumberButtons focus={focus}>
              <NumberButton focus={focus} onClick={() => increment()}>
                <FontAwesomeIcon
                  icon="chevron-down"
                  style={{
                    color: theme.color.gray.five,
                    transform: 'rotate(180deg)',
                    fontSize: 13,
                  }}
                />
              </NumberButton>
              <NumberButton focus={focus} onClick={() => decrement()}>
                <FontAwesomeIcon
                  icon="chevron-down"
                  style={{ color: theme.color.gray.five, fontSize: 13 }}
                />
              </NumberButton>
            </NumberButtons>
          )}
        </>
      )}
      {!icon && (
        <>
          <StyledInput
            id={id}
            color={color}
            unselectable="on"
            hover={hover}
            fullWidth={fullWidth}
            size={size}
            state={state}
            variant={variant}
            type={type === 'number' ? 'tel' : type}
            placeholder={placeholder}
            value={inputValue}
            onChange={customOnChange}
            onFocus={customOnFocus}
            onBlur={customOnBlur}
            customStyles={inputStyles}
            {...props}
          />
          {type === 'number' && (
            <NumberButtons focus={focus}>
              <NumberButton focus={focus} onClick={() => increment()}>
                <FontAwesomeIcon
                  icon="chevron-down"
                  style={{
                    color: theme.color.gray.five,
                    transform: 'rotate(180deg)',
                    fontSize: 13,
                  }}
                />
              </NumberButton>
              <NumberButton focus={focus} onClick={() => decrement()}>
                <FontAwesomeIcon
                  icon="chevron-down"
                  style={{ color: theme.color.gray.five, fontSize: 13 }}
                />
              </NumberButton>
            </NumberButtons>
          )}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  position: relative;
  width: fit-content;
  width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
  ${(props) => props.customStyles}
`;

const NumberButtons = styled.div`
  position: absolute;
  top: ${(props) => (props.focus ? '1px' : '1px')};
  right: ${(props) => (props.focus ? '1px' : '1px')};
  height: ${(props) => (props.focus ? 'calc(100% - 2px)' : 'calc(100% - 2px)')};
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const NumberButton = styled.div`
  padding: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;

  :hover {
    cursor: pointer;
    background: ${(props) => props.theme.color.primary}10;
  }
  right: ${(props) => (props.focus ? '0px' : null)};

  &:first-child {
    border-top-right-radius: 3px;
    top: ${(props) => (props.focus ? '1px' : '0px')};
    padding-bottom: ${(props) => (props.focus ? '1px' : '0px')};
    position: relative;
    width: ${(props) => (props.focus ? 'calc(100% - 2px)' : '100%')};
    margin-left: ${(props) => (props.focus ? '2px' : null)};
  }
  &:last-child {
    border-bottom-right-radius: 3px;
    bottom: ${(props) => (props.focus ? '1px' : '0px')};
    padding-top: ${(props) => (props.focus ? '2px' : '0px')};
    position: relative;
    width: ${(props) => (props.focus ? 'calc(100% - 2px)' : '100%')};
    margin-left: ${(props) => (props.focus ? '2px' : null)};
  }
`;

const Icon = styled.div`
  color: ${(props) => pSBC(props.theme.color.gray.four, 0)};
  position: absolute;
  left: ${(props) =>
    props.size === 'xs'
      ? '10px'
      : props.size === 'sm'
      ? '12px'
      : props.size === 'lg'
      ? '18px'
      : '16px'};
  top: ${(props) =>
    props.size === 'xs'
      ? 'calc(50% - 10px)'
      : props.size === 'sm'
      ? 'calc(50% - 12px)'
      : props.size === 'lg'
      ? 'calc(50% - 17px)'
      : 'calc(50% - 15px)'};
  font-size: ${(props) =>
    props.size === 'xs'
      ? '15px'
      : props.size === 'sm'
      ? '17px'
      : props.size === 'lg'
      ? '22px'
      : '20px'};
  font-weight: 400;
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

const StyledInput = styled.input`
  -webkit-user-select: initial;
  -khtml-user-select: initial;
  -moz-user-select: initial;
  -ms-user-select: initial;
  user-select: initial;
  display: inline-block;
  color: ${(props) => props.theme.color.text.paragraph};
  padding: ${(props) =>
    props.size === 'xs'
      ? '4px 8px'
      : props.size === 'sm'
      ? '8px 12px'
      : props.size === 'lg'
      ? '16px 18px'
      : '13px 15px'};
  font-size: ${(props) =>
    props.size === 'xs'
      ? '14px'
      : props.size === 'sm'
      ? '16px'
      : props.size === 'lg'
      ? '18px'
      : '16px'};
  transition-duration: 0.1s;
  display: inline-block;
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
    // box-shadow: ${(props) => props.theme.shadow.button};
  }
  ${(props) =>
    props.variant === 'filled'
      ? css`
          color: ${props.state === 'success'
            ? props.theme.color.success
            : props.state === 'error'
            ? props.theme.color.error
            : null};
          border-radius: ${props.theme.radius.one};
          background: ${props.theme.color.gray.one};
          :focus {
            outline: none;
            border: 1px solid
              ${props.state === 'success'
                ? props.theme.color.success
                : props.state === 'error'
                ? props.theme.color.error
                : props.theme.color.primary};
            color: ${props.theme.color.text.paragraph};
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
              : props.theme.color.gray.three};
        `};

  :focus ~ div svg {
  }
  padding-left: ${(props) =>
    props.withIcon
      ? props.size === 'xs'
        ? '30px'
        : props.size === 'sm'
        ? '37px'
        : props.size === 'lg'
        ? '50px'
        : '46px'
      : ''};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;
  }

  ${(props) => props.customStyles}
`;

export default Input;
