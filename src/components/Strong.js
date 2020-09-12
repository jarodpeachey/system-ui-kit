import React from 'react';
import styled, { css } from 'styled-components';

const Strong = ({
  children,
  className,
  id,
  title,
  color,
  muted,
  customStyles,
}) => {
  return (
    <StyledStrong
      className={className}
      id={id}
      customStyles={customStyles}
      color={color}
      title={title}
      muted={muted}
    >
      {children}
    </StyledStrong>
  );
};

const StyledStrong = styled.strong`
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
      : props.theme.color.text.paragraph}};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

export default Strong;
