import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

const Container = ({
  children,
  background,
  className = '',
  maxWidth,
  style,
  customStyles,
  align,
}) => {
  return (
    <StyledContainer
      maxWidth={maxWidth}
      className={className}
      background={background}
      style={style}
      align={align}
      customStyles={customStyles}
    >
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  margin: ${(props) =>
    props.align === 'left'
      ? '0px'
      : props.align === 'right'
      ? '0px auto 0px 0px'
      : '0 auto'};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '1024')}px;
  padding-left: 24px;
  padding-right: 24px;
  @media (min-width: 576px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 769px) {
    padding-left: 60px;
    padding-right: 60px;
  }
  ${(props) =>
    (props.align === 'left' || props.align === 'right') &&
    css`
      padding-left: 0px !important;
      padding-right: 0px !important;
    `};
  ${(props) => props.customStyles}
`;

export default Container;
