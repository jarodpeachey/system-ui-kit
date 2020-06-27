import React from 'react';
import styled, { css } from 'styled-components';

const H3 = ({
  children,
  className,
  id,
  customStyles,
  darkBackground,
  type = 'h3',
  display,
  color,
}) => {
  return (
    <Wrapper
      className={className}
      id={id}
      customStyles={customStyles}
      color={color}
      display={display}
      darkBackground={darkBackground}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.h3`
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
  text-transform: ${(props) =>
    props.display === 'title' ? 'uppercase' : null};
  font-weight: 600;
  margin-bottom: 32px;
  font-size: ${(props) => props.theme.fontSize.h3}px;
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

export default H3;
