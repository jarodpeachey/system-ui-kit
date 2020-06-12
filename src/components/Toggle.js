/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Switch from 'react-switch';
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
    <Wrapper>
      {variant === 'filled' ? (
        <Switch
          checked={inputChecked}
          onChange={customOnChange}
          uncheckedIcon={false}
          checkedIcon={false}
          height={height ? height : size === 'small' ? 18 : 22}
          width={width ? width : size === 'small' ? 35 : 43}
          handleDiameter={handleSize || size === 'small' ? 16 : 20}
          boxShadow="none"
          activeBoxShadow="none"
          id="material-switch"
          offColor={background || `${theme.color.primary.main}60`}
          onColor={activeBackground || theme.color.primary.main}
          offHandleColor={handleColor || '#ffffff'}
          onHandleColor={handleColor || '#ffffff'}
          className="mr-2 react-switch transition"
        />
      ) : (
        <Switch
          checked={inputChecked}
          onChange={customOnChange}
          handleDiameter={handleSize || size === 'small' ? 18 : 22}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow={`0px 0px 12px -5px ${theme.color.primary.main}`}
          activeBoxShadow={`0px 0px 12px -5px ${theme.color.primary.main}`}
          height={height ? height : size === 'small' ? 12 : 15}
          width={width ? width : size === 'small' ? 32 : 38}
          id="material-switch"
          offColor={background || '#bdbdbd'}
          onColor={activeBackground || `${theme.color.primary.main}60`}
          offHandleColor={handleColor || '#ffffff'}
          onHandleColor={handleColor || theme.color.primary.main}
          className="mr-2 react-switch transition"
        />
      )}

      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${(props) => props.theme.spacing.two} 0;
`;

export default Toggle;
