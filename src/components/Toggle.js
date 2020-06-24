/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Switch from './Switch';
import { theme } from '../theme';
import { pSBC } from '../utils/color';

const Toggle = ({
  className = '',
  children,
  onChange,
  color,
  checked,
  variant,
  size,
  activeBackground,
  background,
  activeHandleColor,
  handleColor,
  width,
  height,
  handleSize,
}) => {
  const [inputChecked, setInputChecked] = useState(checked || false);

  const customOnChange = (setChecked) => {
    setInputChecked(setChecked);

    onChange && onChange(setChecked);
  };

  console.log(height, width);

  useEffect(() => {
    console.log(inputChecked);
  }, [inputChecked]);

  return (
    <Wrapper
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
  transition: 0.15s;
`;

const ToggleWrapper = styled.div`
  width: 50px;
  border-radius: 999px;
  cursor: pointer;
  border: 1px solid
    ${(props) =>
      props.checked || props.filled
        ? props.theme.color.primary.main
        : props.theme.color.gray.four};
  padding: 2px;
  transition: 0.15s;
  background: ${(props) =>
    props.filled ? props.theme.color.primary.main : null};
  :hover {
    border: 1px solid
      ${(props) =>
        props.checked || props.filled
          ? props.theme.color.primary.main
          : `${props.theme.color.primary.main}60`};
  }
`;

const Indicator = styled.div`
  height: 18px;
  transition: 0.15s;
  width: 18px;
  border-radius: 999px;
  background: ${(props) =>
    props.filled
      ? 'white'
      : props.checked
      ? props.theme.color.primary.main
      : props.theme.color.gray.three};
  margin-left: ${(props) => (props.checked ? 'calc(100% - 18px)' : 0)};
`;

export default Toggle;
