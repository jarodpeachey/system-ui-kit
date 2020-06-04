/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const Input = ({ className = '', placeholder = '', onChange, size }) => (
  <StyledInput
      size={size}
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
  margin-right: 12px;
  display: inline-block;
  border-radius: ${(props) => props.theme.radius.one};
  border: 1px solid rgb(195, 195, 195);
  font-size: ${(props) =>
    props.size === 'small' ? '14px' : props.size === 'large' ? '18px' : '16px'};
`;

export default Input;
