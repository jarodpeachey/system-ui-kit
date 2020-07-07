import React from 'react';
import styled, { css } from 'styled-components';

const H6 = ({
  children,
  className,
  id,
  customStyles,
  display,
  color,
  uppercase,
}) => {
  return (
    <Wrapper
      className={className}
      id={id}
      customStyles={customStyles}
      color={color}
      display={display}
      uppercase={uppercase}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.h6`
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.darkBackground
      ? '#ffffff'
      : props.theme.color.heading};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : null)};
  font-weight: 600;
  margin-bottom: 32px;
  font-size: ${(props) =>
    props.uppercase ? props.theme.fontSize.h6 - 1 : props.theme.fontSize.h6}px;
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

export default H6;
