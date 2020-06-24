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
  activeStyles,
}) => {
  return (
    <Wrapper
      customStyles={customStyles}
      activeStyles={activeStyles}
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
  border-radius: 3px;
  width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
  :hover {
    background: ${(props) => props.theme.color.gray.one};
  }
  ${(props) =>
    props.active &&
    css`
      color: white;
      background: ${props.theme.color.primary.main};
      ${props.activeStyles};
      // box-shadow: ${props.theme.shadow.one};
      :hover {
        color: white;
        background: ${props.theme.color.primary.main};
        ${props.activeStyles};
        // box-shadow: ${props.theme.shadow.one};
      }
    `};
  ${(props) => props.customStyles}
  ${(props) =>
    props.activeStyles &&
    props.active &&
    css`
      ${props.activeStyles}
    `};
`;

export default Tab;
