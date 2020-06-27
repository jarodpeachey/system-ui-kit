import React from 'react';
import styled, { css } from 'styled-components';

const Text = ({
  children,
  className,
  id,
  title,
  color,
  muted,
  customStyles,
  type = 'span',
  display,
}) => {
  return (
    <>
      {type === 'strong' ? (
        <Strong
          className={className}
          id={id}
          muted={muted}
          customStyles={customStyles}
          color={color}
          title={display === 'title'}
        >
          {children}
        </Strong>
      ) : type === 'small' ? (
        <Small
          className={className}
          id={id}
          muted={muted}
          customStyles={customStyles}
          color={color}
          title={display === 'title'}
        >
          {children}
        </Small>
      ) : (
        <Span
          className={className}
          id={id}
          muted={muted}
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
        : null}
    ${(props) => (props.muted ? '90' : null)};
  text-transform: ${(props) => (props.title ? 'uppercase' : null)};

  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;
const Small = styled.small`
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
        : null}
    ${(props) => (props.muted ? '90' : null)};
  text-transform: ${(props) => (props.title ? 'uppercase' : null)};
  font-size: ${(props) => props.theme.fontSize.small}px;
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

const Strong = styled.strong`
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
        : null}
    ${(props) => (props.muted ? '90' : null)};
  text-transform: ${(props) => (props.title ? 'uppercase' : null)};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

export default Text;
