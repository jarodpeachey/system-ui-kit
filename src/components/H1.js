import React from 'react';
import styled, { css } from 'styled-components';

const H1 = ({
  children,
  className = '',
  customStyles,
  color,
  background,
  display,
}) => {
  return (
    <StyledH1
      background={background}
      color={color}
      customStyles={customStyles}
      className={className}
      display={display}
    >
      {children}
    </StyledH1>
  );
};

const StyledH1 = styled.h1`
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary.main
      : props.color === 'secondary'
      ? props.theme.color.secondary.main
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.background === 'dark'
      ? props.theme.color.text.light.one
      : props.theme.color.text.dark.one};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
  text-transform: ${(props) =>
    props.display === 'title' ? 'uppercase' : null};
  font-weight: ${(props) => (props.display === 'subtitle' ? 'normal' : null)};
`;

export default H1;
