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
}) => (
  <StyledInput
      size={size}
      variant={variant}
      onChange={onChange || null}
      placeholder={placeholder}
  />
);

const StyledInput = styled.input`
  padding: ${(props) =>
    props.size === 'small' ?
      '10px 12px' :
      props.size === 'large' ?
        '16px 18px' :
        '14px 14px'};
  font-size: ${(props) =>
    props.size === 'small' ? '12px' : props.size === 'large' ? '16px' : '14px'};
  margin-right: 12px;
  display: inline-block;

  ${(props) =>
    props.variant === 'filled' ?
      css`
          border-radius: ${props.theme.radius.one};
          border: 1px solid #efefef;
          background: #efefef;
        ` :
      css`
          border-radius: ${props.theme.radius.one};
          border: 1px solid rgb(195, 195, 195);
        `}
`;

export default Input;
