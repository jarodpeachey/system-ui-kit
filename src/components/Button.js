/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const Button = ({
  children,
  className = '',
  onClick,
  link,
  color,
  variant = '',
  size,
}) => {
  return (
    <span>
      {link ? (
        <a className="no-styling" href={link}>
          <StyledButton
            color={color}
            size={size}
            variant={variant}
            className={className}
            onClick={onClick || null}
            link
          >
            {children}
          </StyledButton>
        </a>
      ) : (
        <StyledButton
          color={color}
          size={size}
          variant={variant}
          className={className}
          onClick={onClick || null}
        >
          {children}
        </StyledButton>
      )}
    </span>
  );
};

const StyledButton = styled.button`
  outline: none;
  margin-right: 12px;
  padding: 12px 24px;
  border: none;
  font-size: 16px;

  padding: ${(props) =>
    props.size === 'small'
      ? '7px 20px'
      : props.size === 'large'
      ? '14px 29px'
      : '10px 28px'};
  font-size: ${(props) =>
    props.size === 'small' ? '12px' : props.size === 'large' ? '16px' : '14px'};
  text-transform: uppercase;

  border-radius: ${(props) =>
    props.variant === 'rounded' ? '100px' : props.theme.radius.one};
  cursor: pointer;
  transition: all 0.15s;
  :hover {
    box-shadow: 0px 8px 26px -14px ${(props) => (props.color === 'primary' ? props.theme.color.primary.main : props.color === 'secondary' ? props.theme.color.secondary.main : props.color === 'error' ? props.theme.color.error : props.color === 'success' ? props.theme.color.success : '#aaa')};
    transform: scale(1.02);
  }
  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary.main
      : props.color === 'secondary'
      ? props.theme.color.secondary.main
      : props.color === 'error'
      ? props.theme.color.error
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'white'
      ? '#ffffff'
      : ''};
  color: ${(props) =>
    props.color === 'primary' ||
    props.color === 'secondary' ||
    props.color === 'error' ||
    props.color === 'success'
      ? 'white'
      : ''};
  border: 2px solid
    ${(props) =>
      props.color === 'primary'
        ? props.theme.color.primary.main
        : props.color === 'secondary'
        ? props.theme.color.secondary.main
        : props.color === 'error'
        ? props.theme.color.error
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'white'
        ? '#ffffff'
        : '#efefef'};
`;

export default Button;
