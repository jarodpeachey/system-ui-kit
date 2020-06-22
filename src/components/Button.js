/* eslint-disable no-nested-ternary */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../theme';
import { pSBC } from '../utils/color';

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
  box-shadow: ${(props) =>
    props.variant === 'secondary' ? props.theme.shadow.two : 'none'};

  outline: none;
  margin-right: 12px;
  padding: 12px 24px;
  border: none;
  font-size: 16px;
  // font-weight: 500;
  letter-spacing: 1.1px;
  padding: ${(props) =>
    props.size === 'small'
      ? '8px 12px'
      : props.size === 'large'
      ? '14px 29px'
      : '12px 18px'};
  font-size: ${(props) =>
    props.size === 'small' ? '14px' : props.size === 'large' ? '18px' : '16px'};
  border-radius: ${(props) => props.theme.radius.one};
  cursor: pointer;
  transition: all 0.25s;
  :active {
    box-shadow: none !important;
  }

        background: ${(props) =>
          props.color === 'primary'
            ? props.theme.color.primary.main
            : props.color === 'secondary'
            ? props.theme.color.secondary.main
            : props.color === 'success'
            ? props.theme.color.success
            : props.color === 'error'
            ? props.theme.color.error
            : props.color === 'white'
            ? 'white'
            : '#efefef'};      
    color: ${(props) =>
      props.color === 'white'
        ? ''
        : props.color === 'primary' ||
          props.color === 'secondary' ||
          props.color === 'success' ||
          props.color === 'error'
        ? 'white'
        : null};
      border: 2px solid transparent;
      :hover {
        background: ${(props) =>
          pSBC(
            `${
              props.color === 'primary'
                ? props.theme.color.primary.main
                : props.color === 'secondary'
                ? props.theme.color.secondary.main
                : props.color === 'success'
                ? props.theme.color.success
                : props.color === 'error'
                ? props.theme.color.error
                : props.color === 'white'
                ? 'white'
                : '#efefef'
            }`,
            -25,
          )};
        // color: ${(props) => (props.color === 'white' ? 'initial' : 'white')};
      }


  ${(props) =>
    props.variant === 'outlined' &&
    css`
      background: transparent;
      color: ${props.color === 'primary'
        ? props.theme.color.primary.main
        : props.color === 'secondary'
        ? props.theme.color.secondary.main
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'error'
        ? props.theme.color.error
        : props.color === 'white'
        ? 'white'
        : ''};
      border: 2px solid
        ${props.color === 'primary'
          ? props.theme.color.primary.main
          : props.color === 'secondary'
          ? props.theme.color.secondary.main
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.color === 'white'
          ? 'white'
          : '#efefef'};
      :hover {
        background: ${props.color === 'primary'
          ? props.theme.color.primary.main
          : props.color === 'secondary'
          ? props.theme.color.secondary.main
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.color === 'white'
          ? 'white'
          : '#efefef'};
        color: ${props.color === 'white'
          ? 'initial'
          : props.color
          ? 'white'
          : ''};
      }
    `};

  ${(props) =>
    props.variant === 'plain' &&
    css`
      background: transparent;
      color: ${
        props.color === 'primary'
          ? props.theme.color.primary.main
          : props.color === 'secondary'
          ? props.theme.color.secondary.main
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.color === 'white'
          ? 'white'
          : ''
      };
      border: 2px solid transparent;
      :hover {
        background: ${
          props.color === 'primary'
            ? `${props.theme.color.primary.main}15`
            : props.color === 'secondary'
            ? `${props.theme.color.secondary.main}15`
            : props.color === 'success'
            ? `${props.theme.color.success}15`
            : props.color === 'error'
            ? `${props.theme.color.error}15`
            : props.color === 'white'
            ? '#ffffff10'
            : '#00000008'
        };
        // color: ${props.color === 'white' ? 'initial' : 'white'};
      }
    `};
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
