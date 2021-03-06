import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { pSBC } from '../utils/color';

const Alert = ({
  children,
  className,
  id,
  customStyles,
  color,
  variant,
  icon,
  close,
}) => {
  const [showAlert, setShowAlert] = useState(true);

  const onClick = () => {
    setShowAlert(false);
  };

  return (
    <Wrapper
      className={className}
      id={id}
      customStyles={customStyles}
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
  font-family: ${(props) => props.theme.fontFamily.body};
  width: 100%;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  align-items: center;
  padding: 16px 24px;
  font-size: ${(props) => props.theme.fontSize.base};

  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.theme.color.gray.six};
  color: white;
  ${(props) =>
    props.variant === 'light' &&
    css`
      background: ${props.color === 'primary'
        ? `${props.theme.color.primary}10`
        : props.color === 'secondary'
        ? `${props.theme.color.secondary}10`
        : props.color === 'success'
        ? `${props.theme.color.success}10`
        : props.color === 'error'
        ? `${props.theme.color.error}10`
        : props.theme.color.gray.one};
      color: ${pSBC(
        `${
          props.color === 'primary'
            ? props.theme.color.primary
            : props.color === 'secondary'
            ? props.theme.color.secondary
            : props.color === 'success'
            ? props.theme.color.success
            : props.color === 'error'
            ? props.theme.color.error
            : props.theme.color.text.heading
        }`,
        -35,
      )};
      span {
        color: ${pSBC(
          `${
            props.color === 'primary'
              ? props.theme.color.primary
              : props.color === 'secondary'
              ? props.theme.color.secondary
              : props.color === 'success'
              ? props.theme.color.success
              : props.color === 'error'
              ? props.theme.color.error
              : props.theme.color.text.heading
          }`,
          -25,
        )};
      }
    `};
  ${(props) =>
    props.variant === 'light' &&
    !props.color &&
    css`
      border: 1px solid #efefef;
    `};
  border-radius: ${(props) => props.theme.radius.one}px;
  padding-right: 0;
  padding-right: 0;
  padding-left: ${(props) => (props.icon ? '0' : '24px')};
  ${(props) => props.customStyles}
`;

const CloseButton = styled.div`
  font-family: ${(props) => props.theme.fontFamily.body};
  width: 40px;
  height: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-left: auto;
  color: ${(props) => props.theme.color.text.p};
  padding-right: 24px;
  opacity: 0.8;
  transition: 0.2s;
  :hover {
    opacity: 1;
  }
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
