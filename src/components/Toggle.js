/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Switch from './Switch';
import { theme } from '../theme';
import { pSBC } from '../utils/color';

const Toggle = ({ children, className, id, onChange, checked, variant }) => {
  const [inputChecked, setInputChecked] = useState(checked || false);

  const customOnChange = (setChecked) => {
    setInputChecked(setChecked);

    onChange && onChange(setChecked);
  };

  useEffect(() => {
    console.log(inputChecked);
  }, [inputChecked]);

  return (
    <Wrapper
      className={className}
      id={id}
      checked={inputChecked}
      onClick={() => setInputChecked(!inputChecked)}
      filled={variant === 'filled'}
    >
      <ToggleWrapper checked={inputChecked} filled={variant === 'filled'}>
        <Indicator checked={inputChecked} filled={variant === 'filled'} />
      </ToggleWrapper>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${(props) => props.theme.spacing.two}px 0;
  transition: 0.1s;
`;

const ToggleWrapper = styled.div`
  width: 50px;
  border-radius: 999px;
  cursor: pointer;
  margin-right: 4px;
  border: 1px solid
    ${(props) =>
      props.checked || props.filled
        ? props.theme.color.primary
        : props.theme.color.gray.four};
  padding: ${(props) => (props.filled ? '1px' : '2px')};
  transition: 0.15s ease-in;
  background: ${(props) => (props.filled ? props.theme.color.primary : null)};
  :hover {
    border: 1px solid
      ${(props) =>
        props.checked || props.filled
          ? props.theme.color.primary
          : props.theme.color.gray.four};
  }
`;

const Indicator = styled.div`
  height: ${(props) => (props.filled ? '20px' : '18px')};
  transition: 0.1s;
  width: ${(props) => (props.filled ? '20px' : '18px')};
  border-radius: 999px;
  background: ${(props) =>
    props.filled
      ? 'white'
      : props.checked
      ? props.theme.color.primary
      : props.theme.color.gray.three};
  margin-left: ${(props) =>
    props.checked ? `calc(100% -  ${props.filled ? '20px' : '18px'})` : 0};
`;

export default Toggle;
