import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Alert = ({ children, color, variant, icon, style }) => {
  const [showAlert, setShowAlert] = useState(true);

  const onClick = () => {
    setShowAlert(false);
  };

  return (
    <Wrapper style={style} icon={!!icon} show={showAlert} color={color} variant={variant}>
      {icon && <Icon>{icon}</Icon>}
      <div>{children}</div>
      <CloseButton onClick={onClick}>
        <FontAwesomeIcon icon="times" />
      </CloseButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  align-items: flex-start;
  margin: ${(props) => props.theme.spacing.three} 0;
  padding: ${(props) => props.theme.spacing.three};
  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary.main
      : props.color === 'secondary'
      ? props.theme.color.secondary.main
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : '#efefef'};
  * {
    color: ${(props) => (props.color ? 'white' : null)};
  }
  color: ${(props) => (props.color ? 'white' : null)};
  ${(props) =>
    props.variant === 'light' &&
    css`
      background: ${props.color === 'primary'
        ? props.theme.color.primary.main
        : props.color === 'secondary'
        ? props.theme.color.secondary.main
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'error'
        ? props.theme.color.error
        : '#ffffff'}15;
      color: ${props.color === 'primary'
        ? props.theme.color.primary.main
        : props.color === 'secondary'
        ? props.theme.color.secondary.main
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'error'
        ? props.theme.color.error
        : null};
      * {
        color: ${props.color === 'primary'
          ? props.theme.color.primary.main
          : props.color === 'secondary'
          ? props.theme.color.secondary.main
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
  padding-left: ${(props) => (props.icon ? '0' : '14px')};
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
  padding-right: 14px;
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
