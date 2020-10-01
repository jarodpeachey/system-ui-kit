import React from 'react';
import styled, { css } from 'styled-components';

const H2 = ({
  children,
  className,
  id,
  customStyles,
  darkBackground,
  display,
  color,
}) => {
  return (
    <Wrapper
      className={className}
      id={id}
      customStyles={customStyles}
      color={color}
      darkBackground={darkBackground}
      display={display}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.h2`
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.color === 'text-one'
      ? props.theme.color.text.one
      : props.color === 'text-two'
      ? props.theme.color.text.two
      : props.color === 'text-three'
      ? props.theme.color.text.three
      : props.color === 'light-one'
      ? props.theme.color.text.light.one
      : props.color === 'light-two'
      ? props.theme.color.text.light.two
      : props.color === 'light-three'
      ? props.theme.color.text.light.three
      : props.theme.color.text.heading}};
  font-weight: ${(props) => (props.display ? '800' : '700')};

  margin-bottom: 32px;
  font-size: ${(props) =>
    props.display ? props.theme.fontSize.h2 + 6 : props.theme.fontSize.h2}px;
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

export default H2;
