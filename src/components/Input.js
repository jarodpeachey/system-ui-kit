/* eslint-disable no-nested-ternary */
import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../theme';
import { pSBC } from '../utils/color';

const Input = ({
  className = '',
  placeholder = '',
  onChange,
  size,
  variant,
  label,
  fullWidth,
  state,
  icon,
}) => (
  <Wrapper>
    {label && (
      <Label state={state} size={size}>
        {label}
      </Label>
    )}
    {icon && (
      <>
        <Icon>{icon}</Icon>
        <StyledInput
          fullWidth={fullWidth}
          size={size}
          state={state}
          withIcon
          variant={variant}
          onChange={onChange || null}
          placeholder={placeholder}
        />
      </>
    )}
    {!icon && (
      <StyledInput
        fullWidth={fullWidth}
        size={size}
        state={state}
        variant={variant}
        onChange={onChange || null}
        placeholder={placeholder}
      />
    )}
  </Wrapper>
);

const Wrapper = styled.div`
  display: block;
  width: 100%;
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  left: 16px;
  top: calc(50% - 8px);
  font-size: 18px;
  font-weight: 400;
`;

const Label = styled.label`
  display: block;
  width: fit-content;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${(props) =>
    props.state === 'success'
      ? props.theme.color.success
      : props.state === 'error'
      ? props.theme.color.error
      : ''} !important;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
  ${(props) =>
    props.variant === 'raised'
      ? css`
          border-radius: ${props.theme.radius.one};
          border: none;
          box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
          :focus {
            box-shadow: 0 1px 4px 0 ${props.theme.color.primary.main}50;
          }
        `
      : css`
          border-radius: ${props.theme.radius.one};
          border: 1px solid
            ${props.state === 'success'
              ? props.theme.color.success
              : props.state === 'error'
              ? props.theme.color.error
              : 'rgb(195, 195, 195)'};
        `};
`;

const StyledInput = styled.input`
  padding: 14px;
  margin-right: 12px;
  transition-duration: 0.15s;
  display: inline-block;
  width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
  ${(props) =>
    props.variant === 'filled'
      ? css`
          border-radius: ${props.theme.radius.one};
          background: #f7f7f7;
          border: 1px solid
            ${props.state === 'success'
              ? props.theme.color.success
              : props.state === 'error'
              ? props.theme.color.error
              : '#f7f7f7'};
        `
      : css`
          border-radius: ${props.theme.radius.one};
          border: 1px solid
            ${props.state === 'success'
              ? props.theme.color.success
              : props.state === 'error'
              ? props.theme.color.error
              : 'rgb(195, 195, 195)'};
        `};
  :hover {
    border: 1px solid ${(props) => props.theme.color.primary.main};
  }
  :focus {
    outline: 1px ${(props) => props.theme.color.primary.main} auto;
    border: 1px solid ${(props) => props.theme.color.primary.main};
  }
  padding-left: ${(props) => (props.withIcon ? '46px' : '')};
`;

export default Input;
