/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../theme';
import { pSBC } from '../utils/color';

const IconButton = ({
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
        <StyledIconButton
          color={color}
          size={size}
          variant={variant}
          className={className}
          onClick={onClick || null}
          link
        >
          {children}
        </StyledIconButton>
      </a>
    ) : (
      <StyledIconButton
        color={color}
        size={size}
        variant={variant}
        className={className}
        onClick={onClick || null}
      >
        {children}
      </StyledIconButton>
    )}
  </span>
);

const StyledIconButton = styled.button`
  box-shadow: ${(props) =>
    props.variant === 'secondary' ? props.theme.shadow.two : 'none'};

  outline: none;
  border: none;
  border-radius: 9999px;
  font-size: 16px;
  // font-weight: 500;
  letter-spacing: 1.1px;
  width: ${(props) =>
    props.size === 'small' ? '45px' : props.size === 'large' ? '65px' : '55px'};
  height: ${(props) =>
    props.size === 'small' ? '45px' : props.size === 'large' ? '65px' : '55px'};
  font-size: ${(props) =>
    props.size === 'small' ? '16px' : props.size === 'large' ? '22px' : '18px'};
  cursor: pointer;
  transition: all 0.25s;
  background: ${(props) =>
    props.variant === 'plain'
      ? 'transparent'
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
      props.variant === 'plain'
        ? 'transparent'
        : props.variant === 'secondary'
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
      props.variant === 'plain'
        ? `${
            props.color === 'primary'
              ? props.theme.color.primary.main
              : props.color === 'secondary'
              ? props.theme.color.secondary.main
              : props.color === 'success'
              ? props.theme.color.success
              : props.color === 'error'
              ? props.theme.color.error
              : '#000000'
          }10`
        : props.variant === 'outlined'
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
        : `${
            props.color === 'primary'
              ? pSBC(props.theme.color.primary.main, -25)
              : props.color === 'secondary'
              ? pSBC(props.theme.color.secondary.main, -25)
              : props.color === 'error'
              ? pSBC(props.theme.color.error, -25)
              : props.color === 'success'
              ? pSBC(props.theme.color.success, -25)
              : pSBC('#efefef', -10)
          }`};
    border: 2px solid
      ${(props) =>
        props.variant === 'secondary'
          ? 'transparent'
          : `${
              props.color === 'primary'
                ? props.theme.color.primary.main
                : props.color === 'secondary'
                ? props.theme.color.secondary.main
                : props.color === 'error'
                ? props.theme.color.error
                : props.color === 'success'
                ? props.theme.color.success
                : '#efefef'
            }00`} !important;
    box-shadow: ${(props) =>
      props.variant === 'secondary' ? props.theme.shadow.three : 'none'};

    // transform: translateY(-1px);
  }
  :active {
    box-shadow: none !important;
  }
`;

IconButton.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
};

export default IconButton;
