import React from 'react';
import styled, { css } from 'styled-components';

const Small = ({
  children,
  className,
  id,
  title,
  color,
  muted,
  customStyles,
}) => {
  return (
    <StyledSmall
      className={className}
      id={id}
      customStyles={customStyles}
      color={color}
      title={title}
      muted={muted}
    >
      {children}
    </StyledSmall>
  );
};

const StyledSmall = styled.small`
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
  font-size: ${(props) => props.theme.fontSize.small};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `};
`;

export default Small;
