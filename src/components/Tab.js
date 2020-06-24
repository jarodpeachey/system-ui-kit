import React from 'react';
import styled, { css } from 'styled-components';

const Tab = ({
  active,
  children,
  onClick,
  name,
  customStyles,
  fullWidth,
  indicatorColor,
}) => {
  return (
    <Wrapper
      customStyles={customStyles}
      onClick={() => onClick(name)}
      active={active}
      fullWidth={fullWidth}
      indicatorColor={indicatorColor}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 18px;
  text-align: center;
  cursor: pointer;
  transition: 0.15s;
  border-bottom: 2px solid transparent;
  width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
  ${(props) =>
    props.active &&
    css`
      border-bottom: 2px solid
        ${props.indicatorColor || props.theme.color.primary.main};
      color: ${props.theme.color.primary.main};
    `};
  ${(props) => props.customStyles}
`;

export default Tab;
