/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Switch from 'react-switch';
import { theme } from '../theme';

const Toggle = ({
  className = '',
  children,
  onChange,
  color,
  checked,
  variant,
}) => {
  const [inputChecked, setInputChecked] = useState(checked || false);

  const customOnChange = (setChecked) => {
    setInputChecked(setChecked);

    onChange && onChange(setChecked);
  };

  useEffect(() => {
    console.log(inputChecked);
  }, [inputChecked]);

  return (
    <Wrapper>
      <Switch
        checked={inputChecked}
        onChange={customOnChange}
        handleDiameter={22}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 0px 9px -3px #666"
        activeBoxShadow="0px 0px 0px 3px #3164d530"
        height={15}
        width={36}
        id="material-switch"
        offColor="#bdbdbd"
        onColor={`#8db0fe`}
        offHandleColor="#ffffff"
        onHandleColor={theme.color.primary.main}
        className="mr-2 react-switch"
      />
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
