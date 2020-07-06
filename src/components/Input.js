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
}) => {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState(
    value || defaultValue || (type === 'number' ? 0 : ''),
  );

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  console.log(variant);

  const customOnChange = (e) => {
    setInputValue(e.target.value);

    onChange(e);
  };

  const customOnFocus = (e) => {
    setFocus(true);

    onFocus(e);
  };

  const customOnBlur = (e) => {
    setFocus(false);

    onBlur(e);
  };

  const increment = () => {
    console.log('Increasing.');
    setInputValue(value + 1);
  };

  const decrement = () => {
    setInputValue(value - 1);
  };

  return (
    <Wrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      fullWidth={fullWidth}
    >
      {label && (
        <Label state={state} size={size}>
          {label}
        </Label>
      )}
      {icon && (
        <>
          <StyledInput
            className={className}
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
          />
          <Icon size={size}>{icon}</Icon>
          {type === 'number' && (
            <NumberButtons focus={focus}>
              <NumberButton focus={focus} onClick={() => increment()}>
                <FontAwesomeIcon
                  icon="chevron-down"
                  style={{ transform: 'rotate(180deg)', fontSize: 13 }}
                />
              </NumberButton>
              <NumberButton focus={focus} onClick={() => decrement()}>
                <FontAwesomeIcon icon="chevron-down" style={{ fontSize: 13 }} />
              </NumberButton>
            </NumberButtons>
          )}
        </>
      )}
      {!icon && (
        <>
          <StyledInput
            className={className}
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
          />
          {type === 'number' && (
            <NumberButtons focus={focus}>
              <NumberButton focus={focus} onClick={() => increment()}>
                <FontAwesomeIcon
                  icon="chevron-down"
                  style={{ transform: 'rotate(180deg)', fontSize: 13 }}
                />
              </NumberButton>
              <NumberButton focus={focus} onClick={() => decrement()}>
                <FontAwesomeIcon icon="chevron-down" style={{ fontSize: 13 }} />
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
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */

  /* Rules below not implemented in browsers yet */
  -o-user-select: none;
  user-select: none;
  width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
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
      : props.size === 'small'
      ? '12px'
      : props.size === 'large'
      ? '18px'
      : '16px'};
  top: ${(props) =>
    props.size === 'xs'
      ? 'calc(50% - 14px)'
      : props.size === 'small'
      ? 'calc(50% - 16px)'
      : props.size === 'large'
      ? 'calc(50% - 19px)'
      : 'calc(50% - 17px)'};
  font-size: ${(props) =>
    props.size === 'xs'
      ? '15px'
      : props.size === 'small'
      ? '17px'
      : props.size === 'large'
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
  transition-duration: 0.15s;
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
  padding-left: ${(props) =>
    props.withIcon
      ? props.size === 'xs'
        ? '30px'
        : props.size === 'small'
        ? '37px'
        : props.size === 'large'
        ? '50px'
        : '46px'
      : ''};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;
  }
`;

export default Input;
