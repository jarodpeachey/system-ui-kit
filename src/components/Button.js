/* eslint-disable no-nested-ternary */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { theme } from '../theme';
import { pSBC } from '../utils/color';

const Button = ({
  children,
  className,
  id,
  onClick,
  link,
  color,
  variant,
  size,
  customStyles,
  fullWidth,
  external,
}) => (
  <>
    {link ? (
      <StyledA
        to={link}
        className={`no-styling ${className}`}
        id={id}
        color={color}
        size={size}
        variant={variant}
        onClick={onClick || null}
        link
        customStyles={customStyles}
        fullWidth={fullWidth}
      >
        {children}
      </StyledA>
    ) : (
      <StyledButton
        className={className}
        id={id}
        color={color}
        size={size}
        variant={variant}
        onClick={onClick || null}
        customStyles={customStyles}
        fullWidth={fullWidth}
      >
        {children}
      </StyledButton>
    )}
  </>
);

const StyledButton = styled.button`
  font-family: ${(props) => props.theme.fontFamily.button};
  font-weight: ${(props) => props.theme.fontWeight.button};
  outline: none;
  padding: ${(props) => (props.size === 'sm' ? '12px 24px' : '18px 30px')};
  border: none;
  width: ${(props) => (props.fullWidth ? '100%' : null)};
  font-size: 14px;
  text-transform: uppercase;
  border-radius: ${(props) => props.theme.radius.one}px;
  cursor: pointer;
  transition: all 0.25s;
  letter-spacing: 1px;

  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.color === 'white'
      ? 'white'
      : props.color === 'dark'
      ? props.theme.color.gray.six
      : props.theme.color.gray.two};
  color: ${(props) =>
    props.color === 'white'
      ? props.theme.color.text.heading
      : props.color === 'primary' ||
        props.color === 'secondary' ||
        props.color === 'success' ||
        props.color === 'error' ||
        props.color === 'dark'
      ? 'white'
      : props.theme.color.text.heading};
  * {
    color: ${(props) =>
      props.color === 'white'
        ? props.theme.color.text.heading
        : props.color === 'primary' ||
          props.color === 'secondary' ||
          props.color === 'success' ||
          props.color === 'error' ||
          props.color === 'dark'
        ? 'white'
        : props.theme.color.text.heading};
  }
  border: 1px solid transparent;
  :hover {
    box-shadow: 1px 3px 8px -4px rgba(34, 34, 34, 0.06274509803921569),
      1px 3px 20px -10px rgba(34, 34, 34, 0.06274509803921569);

    background: ${(props) =>
      props.color === 'primary'
        ? pSBC(props.theme.color.primary, -25)
        : props.color === 'secondary'
        ? pSBC(props.theme.color.secondary, -25)
        : props.color === 'success'
        ? pSBC(props.theme.color.success, -25)
        : props.color === 'error'
        ? pSBC(props.theme.color.error, -25)
        : props.color === 'white'
        ? pSBC('#ffffff', -25)
        : props.color === 'dark'
        ? pSBC(props.theme.color.gray.six, -25)
        : pSBC(props.theme.color.gray.two, -10)};
  }

  ${(props) =>
    props.variant === 'outlined' &&
    css`
      background: transparent;
      box-shadow: none;
      color: ${props.color === 'primary'
        ? props.theme.color.primary
        : props.color === 'secondary'
        ? props.theme.color.secondary
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'error'
        ? props.theme.color.error
        : props.color === 'white'
        ? 'white'
        : props.theme.color.text.heading} !important;
      * {
        color: ${props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.color === 'white'
          ? 'white'
          : props.theme.color.text.heading} !important;
      }
      border: 1px solid
        ${props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.color === 'white'
          ? 'white'
          : props.color === 'dark'
          ? props.theme.color.gray.six
          : pSBC(props.theme.color.gray.two, -10)};
      :hover {
        box-shadow: 1px 3px 8px -4px rgba(34, 34, 34, 0.06274509803921569),
          1px 3px 20px -10px rgba(34, 34, 34, 0.06274509803921569);
        background: ${props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.color === 'white'
          ? 'white'
          : props.color === 'dark'
          ? props.theme.color.gray.six
          : props.theme.color.gray.two};
        color: ${props.color === 'white'
          ? 'initial'
          : props.color
          ? 'white'
          : props.theme.color.text.heading} !important;
        * {
          color: ${props.color === 'white'
            ? 'initial'
            : props.color
            ? 'white'
            : props.theme.color.text.heading} !important;
        }
      }
    `};

  ${(props) =>
    props.variant === 'plain' &&
    css`
      background: transparent;
      box-shadow: none;
      color: ${props.color === 'primary'
        ? props.theme.color.primary
        : props.color === 'secondary'
        ? props.theme.color.secondary
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'error'
        ? props.theme.color.error
        : props.color === 'white'
        ? 'white'
        : props.theme.color.text.heading} !important;
      * {
        color: ${props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.color === 'white'
          ? 'white'
          : props.theme.color.text.heading} !important;
      }
      border: 1px solid transparent;
      :hover {
        box-shadow: none;
        background: ${props.color === 'primary'
          ? `${props.theme.color.primary}15`
          : props.color === 'secondary'
          ? `${props.theme.color.secondary}15`
          : props.color === 'success'
          ? `${props.theme.color.success}15`
          : props.color === 'error'
          ? `${props.theme.color.error}15`
          : props.color === 'white'
          ? '#ffffff10'
          : props.theme.color.gray.one};
        // color: ${props.color === 'white' ? 'initial' : 'white'};
      }
    `};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `};
`;

const StyledLink = styled(Link)`
  font-weight: ${(props) => props.theme.fontWeight.button};
  outline: none;
  padding: 18px 24px;
  border: none;
  width: ${(props) => (props.fullWidth ? '100%' : null)};
  font-size: 14px;
  text-transform: uppercase;
  border-radius: ${(props) => props.theme.radius.one}px;
  cursor: pointer;
  transition: all 0.25s;
  letter-spacing: 1px;

  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.color === 'white'
      ? 'white'
      : props.color === 'dark'
      ? props.theme.color.gray.six
      : props.theme.color.gray.two};
  color: ${(props) =>
    props.color === 'white'
      ? props.theme.color.text.heading
      : props.color === 'primary' ||
        props.color === 'secondary' ||
        props.color === 'success' ||
        props.color === 'error' ||
        props.color === 'dark'
      ? 'white'
      : props.theme.color.text.heading};
  * {
    color: ${(props) =>
      props.color === 'white'
        ? props.theme.color.text.heading
        : props.color === 'primary' ||
          props.color === 'secondary' ||
          props.color === 'success' ||
          props.color === 'error' ||
          props.color === 'dark'
        ? 'white'
        : props.theme.color.text.heading};
  }
  border: 1px solid transparent;
  :hover {
    box-shadow: 1px 3px 8px -4px rgba(34, 34, 34, 0.06274509803921569),
      1px 3px 20px -10px rgba(34, 34, 34, 0.06274509803921569);

    background: ${(props) =>
      props.color === 'primary'
        ? pSBC(props.theme.color.primary, -25)
        : props.color === 'secondary'
        ? pSBC(props.theme.color.secondary, -25)
        : props.color === 'success'
        ? pSBC(props.theme.color.success, -25)
        : props.color === 'error'
        ? pSBC(props.theme.color.error, -25)
        : props.color === 'white'
        ? pSBC('#ffffff', -25)
        : props.color === 'dark'
        ? pSBC(props.theme.color.gray.six, -25)
        : pSBC(props.theme.color.gray.two, -10)};
  }

  ${(props) =>
    props.variant === 'outlined' &&
    css`
      background: transparent;
      box-shadow: none;
      color: ${props.color === 'primary'
        ? props.theme.color.primary
        : props.color === 'secondary'
        ? props.theme.color.secondary
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'error'
        ? props.theme.color.error
        : props.color === 'white'
        ? 'white'
        : props.theme.color.text.heading} !important;
      * {
        color: ${props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.color === 'white'
          ? 'white'
          : props.theme.color.text.heading} !important;
      }
      border: 1px solid
        ${props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.color === 'white'
          ? 'white'
          : props.color === 'dark'
          ? props.theme.color.gray.six
          : pSBC(props.theme.color.gray.two, -10)};
      :hover {
        box-shadow: 1px 3px 8px -4px rgba(34, 34, 34, 0.06274509803921569),
          1px 3px 20px -10px rgba(34, 34, 34, 0.06274509803921569);
        background: ${props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.color === 'white'
          ? 'white'
          : props.color === 'dark'
          ? props.theme.color.gray.six
          : props.theme.color.gray.two};
        color: ${props.color === 'white'
          ? 'initial'
          : props.color
          ? 'white'
          : props.theme.color.text.heading} !important;
        * {
          color: ${props.color === 'white'
            ? 'initial'
            : props.color
            ? 'white'
            : props.theme.color.text.heading} !important;
        }
      }
    `};

  ${(props) =>
    props.variant === 'plain' &&
    css`
      background: transparent;
      box-shadow: none;
      color: ${props.color === 'primary'
        ? props.theme.color.primary
        : props.color === 'secondary'
        ? props.theme.color.secondary
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'error'
        ? props.theme.color.error
        : props.color === 'white'
        ? 'white'
        : props.theme.color.text.heading} !important;
      * {
        color: ${props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.color === 'white'
          ? 'white'
          : props.theme.color.text.heading} !important;
      }
      border: 1px solid transparent;
      :hover {
        box-shadow: none;
        background: ${props.color === 'primary'
          ? `${props.theme.color.primary}15`
          : props.color === 'secondary'
          ? `${props.theme.color.secondary}15`
          : props.color === 'success'
          ? `${props.theme.color.success}15`
          : props.color === 'error'
          ? `${props.theme.color.error}15`
          : props.color === 'white'
          ? '#ffffff10'
          : props.theme.color.gray.one};
        // color: ${props.color === 'white' ? 'initial' : 'white'};
      }
    `};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `};
`;

const StyledA = styled.a`
  font-weight: ${(props) => props.theme.fontWeight.button};
  outline: none;
  padding: 18px 24px;
  border: none;
  width: ${(props) => (props.fullWidth ? '100%' : null)};
  font-size: 14px;
  text-transform: uppercase;
  border-radius: ${(props) => props.theme.radius.one}px;
  cursor: pointer;
  transition: all 0.25s;
  letter-spacing: 1px;

  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary
      : props.color === 'secondary'
      ? props.theme.color.secondary
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.color === 'white'
      ? 'white'
      : props.color === 'dark'
      ? props.theme.color.gray.six
      : props.theme.color.gray.two};
  color: ${(props) =>
    props.color === 'white'
      ? props.theme.color.text.heading
      : props.color === 'primary' ||
        props.color === 'secondary' ||
        props.color === 'success' ||
        props.color === 'error' ||
        props.color === 'dark'
      ? 'white'
      : props.theme.color.text.heading};
  * {
    color: ${(props) =>
      props.color === 'white'
        ? props.theme.color.text.heading
        : props.color === 'primary' ||
          props.color === 'secondary' ||
          props.color === 'success' ||
          props.color === 'error' ||
          props.color === 'dark'
        ? 'white'
        : props.theme.color.text.heading};
  }
  border: 1px solid transparent;
  :hover {
    box-shadow: 1px 3px 8px -4px rgba(34, 34, 34, 0.06274509803921569),
      1px 3px 20px -10px rgba(34, 34, 34, 0.06274509803921569);

    background: ${(props) =>
      props.color === 'primary'
        ? pSBC(props.theme.color.primary, -25)
        : props.color === 'secondary'
        ? pSBC(props.theme.color.secondary, -25)
        : props.color === 'success'
        ? pSBC(props.theme.color.success, -25)
        : props.color === 'error'
        ? pSBC(props.theme.color.error, -25)
        : props.color === 'white'
        ? pSBC('#ffffff', -25)
        : props.color === 'dark'
        ? pSBC(props.theme.color.gray.six, -25)
        : pSBC(props.theme.color.gray.two, -10)};
  }

  ${(props) =>
    props.variant === 'outlined' &&
    css`
      background: transparent;
      box-shadow: none;
      color: ${props.color === 'primary'
        ? props.theme.color.primary
        : props.color === 'secondary'
        ? props.theme.color.secondary
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'error'
        ? props.theme.color.error
        : props.color === 'white'
        ? 'white'
        : props.theme.color.text.heading} !important;
      * {
        color: ${props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.color === 'white'
          ? 'white'
          : props.theme.color.text.heading} !important;
      }
      border: 1px solid
        ${props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.color === 'white'
          ? 'white'
          : props.color === 'dark'
          ? props.theme.color.gray.six
          : pSBC(props.theme.color.gray.two, -10)};
      :hover {
        box-shadow: 1px 3px 8px -4px rgba(34, 34, 34, 0.06274509803921569),
          1px 3px 20px -10px rgba(34, 34, 34, 0.06274509803921569);
        background: ${props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.color === 'white'
          ? 'white'
          : props.color === 'dark'
          ? props.theme.color.gray.six
          : props.theme.color.gray.two};
        color: ${props.color === 'white'
          ? 'initial'
          : props.color
          ? 'white'
          : props.theme.color.text.heading} !important;
        * {
          color: ${props.color === 'white'
            ? 'initial'
            : props.color
            ? 'white'
            : props.theme.color.text.heading} !important;
        }
      }
    `};

  ${(props) =>
    props.variant === 'plain' &&
    css`
      background: transparent;
      box-shadow: none;
      color: ${props.color === 'primary'
        ? props.theme.color.primary
        : props.color === 'secondary'
        ? props.theme.color.secondary
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'error'
        ? props.theme.color.error
        : props.color === 'white'
        ? 'white'
        : props.theme.color.text.heading} !important;
      * {
        color: ${props.color === 'primary'
          ? props.theme.color.primary
          : props.color === 'secondary'
          ? props.theme.color.secondary
          : props.color === 'success'
          ? props.theme.color.success
          : props.color === 'error'
          ? props.theme.color.error
          : props.color === 'white'
          ? 'white'
          : props.theme.color.text.heading} !important;
      }
      border: 1px solid transparent;
      :hover {
        box-shadow: none;
        background: ${props.color === 'primary'
          ? `${props.theme.color.primary}15`
          : props.color === 'secondary'
          ? `${props.theme.color.secondary}15`
          : props.color === 'success'
          ? `${props.theme.color.success}15`
          : props.color === 'error'
          ? `${props.theme.color.error}15`
          : props.color === 'white'
          ? '#ffffff10'
          : props.theme.color.gray.one};
        // color: ${props.color === 'white' ? 'initial' : 'white'};
      }
    `};
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
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
