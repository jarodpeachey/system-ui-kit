/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../theme';

const Button = ({
  children,
  className = '',
  onClick,
  link,
  color,
  variant = '',
  size,
}) => (
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
      : '12px 28px'};
  font-size: ${(props) =>
    props.size === 'small' ? '12px' : props.size === 'large' ? '16px' : '14px'};
  text-transform: uppercase;
  border-radius: ${(props) => props.theme.radius.one};
  cursor: pointer;
  transition: all 0.25s;
  :hover,
  :focus,
  :focus {
    color: ${(props) =>
      (props.color === 'primary' ||
        props.color === 'secondary' ||
        props.color === 'primary' ||
        props.color === 'error' ||
        props.color === 'success') &&
      props.variant !== 'secondary'
        ? 'white'
        : props.color === 'primary'
        ? props.theme.color.primary.main
        : props.color === 'secondary'
        ? props.theme.color.secondary.main
        : props.color === 'error'
        ? props.theme.color.error
        : props.color === 'success'
        ? props.theme.color.success
        : ''};
    background: ${(props) =>
      props.variant === 'outlined'
        ? props.color === 'primary'
          ? props.theme.color.primary.main
          : props.color === 'secondary'
          ? props.theme.color.secondary.main
          : props.color === 'error'
          ? props.theme.color.error
          : props.color === 'success'
          ? props.theme.color.success
          : '#efefef'
        : props.variant === 'secondary'

        ? 'white'
        : props.variant === 'outlined'
        ? 'transparent'
        : props.color === 'primary'
        ? props.theme.color.primary.main
        : props.color === 'secondary'
        ? props.theme.color.secondary.main
        : props.color === 'error'
        ? props.theme.color.error
        : props.color === 'success'
        ? props.theme.color.success
        : ''};
    box-shadow: ${(props) =>
      props.variant === 'secondary'

        ? '2px 5px 8px -2px rgba(0, 0, 0, 0.2)'
        : `0px 8px 26px -14px ${
            props.variant === 'secondary'

              ? 'rgba(0, 0, 0, .4)'
              : props.color === 'primary'
              ? props.theme.color.primary.main
              : props.color === 'secondary'
              ? props.theme.color.secondary.main
              : props.color === 'error'
              ? props.theme.color.error
              : props.color === 'success'
              ? props.theme.color.success
              : '#aaa'
          }`};
    transform: translateY(-1px);
  }
  background: ${(props) =>
    props.variant === 'secondary'

      ? 'white'
      : props.variant === 'outlined'
      ? 'transparent'
      : props.color === 'primary'
      ? props.theme.color.primary.main
      : props.color === 'secondary'
      ? props.theme.color.secondary.main
      : props.color === 'error'
      ? props.theme.color.error
      : props.color === 'success'
      ? props.theme.color.success
      : ''};
  color: ${(props) =>
    props.variant === 'outlined' || props.variant === 'secondary'

      ? props.color === 'primary'
        ? props.theme.color.primary.main
        : props.color === 'secondary'
        ? props.theme.color.secondary.main
        : props.color === 'error'
        ? props.theme.color.error
        : props.color === 'success'
        ? props.theme.color.success
        : ''
      : props.color === 'primary' ||
        props.color === 'secondary' ||
        props.color === 'error' ||
        props.color === 'success'
      ? 'white'
      : ''};
  border: 2px solid
    ${(props) =>
      props.variant === 'secondary'

        ? 'transparent'
        : props.color === 'primary'
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
  box-shadow: ${(props) =>
    props.variant === 'secondary'
 ? '0 1px 4px 0 rgba(0, 0, 0, 0.14)' : 'none'};
`;

Button.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
