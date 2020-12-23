import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Badge = ({
  children,
  className,
  id,
  customStyles,
  color = '',
  rounded,
}) => {
  return (
    <Wrapper
      className={className}
      id={id}
      rounded={rounded}
      color={color}
      customStyles={customStyles}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: ${(props) => props.theme.fontFamily.body};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  font-size: ${(props) => props.theme.fontSize.base - 1}px;
  line-height: ${(props) => props.theme.fontSize.base - 1}px;
  padding: 5px 12px 6px;
  text-align: center;
  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.color === 'dark'
      ? props.theme.color.gray.six
      : props.theme.color.gray.two};
  color: ${(props) => (props.color === '' ? '' : 'white')};
  border-radius: ${(props) =>
    props.rounded ? '999px' : props.theme.radius.one}px;
  // padding-left: ${(props) => (props.icon ? '0' : '8px')};
`;

export default Badge;
