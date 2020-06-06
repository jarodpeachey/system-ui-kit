/* eslint-disable no-nested-ternary */
import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../theme';

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
  font-size: ${(props) =>
    props.size === 'small' ? '12px' : props.size === 'large' ? '16px' : '14px'};
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
  padding: ${(props) =>
    props.size === 'small'
      ? '10px 12px'
      : props.size === 'large'
      ? '16px 18px'
      : '14px 14px'};
  font-size: ${(props) =>
    props.size === 'small' ? '12px' : props.size === 'large' ? '16px' : '14px'};
  margin-right: 12px;
  display: inline-block;
  width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
  ${(props) =>
    props.variant === 'raised'
      ? css`
          border-radius: ${props.theme.radius.one};
          border: none !important;
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

  :focus {
    border: 1px solid ${(props) => props.theme.color.primary.main}70;
    outline: none !important;
    box-shadow: 0px 0px 0px 3px ${(props) => props.theme.color.primary.main}30 !important;
  }
  padding-left: ${(props) => (props.withIcon ? '46px' : '')};
`;

export default Input;
