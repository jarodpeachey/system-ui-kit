import React from 'react';
import styled, { css } from 'styled-components';

const H1 = ({ children, className = '', customStyles, light, background }) => {
  return (
    <StyledH1
      background={background}
      light={light}
      customStyles={customStyles}
      className={className}
    >
      {children}
    </StyledH1>
  );
};

const StyledH1 = styled.h1`
  color: ${(props) =>
    props.light
      ? props.theme.color.text.dark.two
      : props.theme.color.text.dark.one};
  ${(props) =>
    props.background === 'dark' &&
    css`
      color: ${props.light
        ? props.theme.color.text.light.two
        : props.theme.color.text.light.one};
    `};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

export default H1;
