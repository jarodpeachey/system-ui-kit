import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Alert = ({ children, className, id, color, variant, icon, close }) => {
  const [showAlert, setShowAlert] = useState(true);

  const onClick = () => {
    setShowAlert(false);
  };

  return (
    <Wrapper
      className={className}
      id={id}
      icon={!!icon}
      show={showAlert}
      color={color}
      variant={variant}
    >
      {icon && <Icon>{icon}</Icon>}
      <div>{children}</div>
      {close && (
        <CloseButton onClick={onClick}>
          <FontAwesomeIcon icon="times" />
        </CloseButton>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  align-items: flex-start;
  margin: ${(props) => props.theme.spacing.three}px 0;
  padding: 16px 24px;
  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.theme.color.gray.two};
  * {
    color: ${(props) => (props.color ? 'white' : null)};
  }
  color: ${(props) => (props.color ? 'white' : null)};
  ${(props) =>
    props.variant === 'light' &&
    css`
      background: ${props.color === 'primary'
        ? props.theme.color.primary
        : props.color === 'secondary'
        ? props.theme.color.secondary
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'error'
        ? props.theme.color.error
        : '#ffffff'}15;
      color: ${props.color === 'primary'
        ? props.theme.color.primary
        : props.color === 'secondary'
        ? props.theme.color.secondary
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'error'
        ? props.theme.color.error
        : null};
      * {
        color: ${props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : null};
      }
    `};
  ${(props) =>
    props.variant === 'light' &&
    !props.color &&
    css`
      border: 1px solid #efefef;
    `};
  border-radius: ${(props) => props.theme.radius.one};
  padding-right: 0;
  padding-right: 0;
  padding-left: ${(props) => (props.icon ? '0' : '24px')};
`;

const CloseButton = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-left: auto;
  padding-right: 24px;
`;
const Icon = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-right: 14px;
  padding-left: 14px;
`;

export default Alert;
