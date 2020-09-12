import React from 'react';
import styled, { css } from 'styled-components';

const Tab = ({
  children,
  className,
  id,
  active,
  onClick,
  name,
  customStyles,
  fullWidth,
  indicatorColor,
  activeStyles,
  vertical
}) => {
  return (
    <Wrapper
      className={className}
      id={id}
      customStyles={customStyles}
      activeStyles={activeStyles}
      onClick={() => onClick(name)}
      active={active}
      fullWidth={fullWidth}
      indicatorColor={indicatorColor}
      vertical={vertical}
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
  transition: 0.1s;
  border-bottom: 2px solid transparent;
  border-radius: 3px;
  width: ${(props) => (props.fullWidth || props.vertical ? '100%' : 'fit-content')};
  :hover {
    background: ${(props) => props.theme.color.gray.one};
  }
  ${(props) =>
    props.active &&
    css`
      color: white;
      background: ${props.theme.color.primary};
      ${props.activeStyles};
      // box-shadow: ${props.theme.shadow.one};
      :hover {
        color: white;
        background: ${props.theme.color.primary};
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
