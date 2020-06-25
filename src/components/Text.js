import React from 'react';
import styled, { css } from 'styled-components';

const Text = ({
  children,
  className,
  customStyles,
  background,
  light,
  type = 'h1',
  display,
  color,
  size,
}) => {
  return (
    <>
      {type === 'strong' ? (
        <Strong
          className={className}
          background={background}
          customStyles={customStyles}
          color={color}
          title={display === 'title'}
        >
          {children}
        </Strong>
      ) : type === 'small' ? (
        <Small
          className={className}
          background={background}
          customStyles={customStyles}
          color={color}
          title={display === 'title'}
        >
          {children}
        </Small>
      ) : (
        <Span
          className={className}
          background={background}
          customStyles={customStyles}
          color={color}
          title={display === 'title'}
        >
          {children}
        </Span>
      )}
    </>
  );
};

const Span = styled.span`
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary.main
      : props.color === 'secondary'
      ? props.theme.color.secondary.main
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
      : null};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
  text-transform: ${(props) => (props.title ? 'uppercase' : null)};
`;
const Small = styled.small`
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary.main
      : props.color === 'secondary'
      ? props.theme.color.secondary.main
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
      : null};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
  text-transform: ${(props) => (props.title ? 'uppercase' : null)};
  font-size: ${(props) => props.theme.fontSize.small}px;
`;

const Strong = styled.strong`
  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary.main
      : props.color === 'secondary'
      ? props.theme.color.secondary.main
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
      : null};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
  text-transform: ${(props) => (props.title ? 'uppercase' : null)};
`;

export default Text;
