import React from 'react';
import styled, { css } from 'styled-components';

const H4 = ({ children, className = '', customStyles, light, background }) => {
  return (
    <StyledH4 light={light} background={background} customStyles={customStyles} className={className}>
      {children}
    </StyledH4>
  );
};

const StyledH4 = styled.h4`
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

export default H4;
