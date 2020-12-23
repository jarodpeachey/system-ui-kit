import React from 'react';
import styled, { css } from 'styled-components';

const H5 = ({
  children,
  className,
  id,
  customStyles,
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

    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.h5`
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
  line-height: ${(props) => props.theme.lineHeight.h5}px;
  font-weight: 600;
  margin-bottom: 14px;
  font-size: ${(props) => props.theme.fontSize.h5}px;
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

export default H5;
