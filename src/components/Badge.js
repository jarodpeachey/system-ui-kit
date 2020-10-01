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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  font-size: 16px;
  margin-top: ${(props) => props.theme.spacing.three}px;
  margin-bottom: ${(props) => props.theme.spacing.three}px;
  padding: 2px 12px;
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
  border-radius: ${(props) => (props.rounded ? '999px' : props.theme.radius.one)};
  // padding-left: ${(props) => (props.icon ? '0' : '8px')};
`;

const CloseButton = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  margin-left: auto;
  padding-right: 14px;
`;
const Icon = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  margin-right: 14px;
  padding-left: 14px;
`;

export default Badge;
