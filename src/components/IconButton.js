/* eslint-disable no-nested-ternary */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../theme';
import { pSBC } from '../utils/color';
import { Link } from '@reach/router';

const IconButton = ({
  children,
  className,
  id,
  onClick,
  link,
  color,
  variant,
  size,
  customStyles,
  external,
  rounded,
}) => (
  <>
    {link && external ? (
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
        rounded={rounded}
      >
        {children}
      </StyledA>
    ) : link ? (
      <StyledLink
        to={link}
        className={`no-styling ${className}`}
        id={id}
        color={color}
        size={size}
        variant={variant}
        onClick={onClick || null}
        link
        customStyles={customStyles}
        rounded={rounded}
      >
        {children}
      </StyledLink>
    ) : (
      <StyledIconButton
        className={className}
        id={id}
        color={color}
        size={size}
        variant={variant}
        onClick={onClick || null}
        customStyles={customStyles}
        rounded={rounded}
      >
        {children}
      </StyledIconButton>
    )}
  </>
);

const StyledIconButton = styled.button`
  box-shadow: ${(props) =>
    props.color === 'primary' ||
    props.color === 'secondary' ||
    props.color === 'success' ||
    props.color === 'error' ||
    props.color === 'white' ||
    props.color === 'dark'
      ? props.theme.shadow.button
      : '3px 3px 18px -6px #0000001a'};
  font-weight: ${(props) => props.theme.fontWeight.button};
  outline: none;
  border: none;
  // font-weight: 500;
  letter-spacing: 1.4px;
  width: ${(props) =>
    props.size === 'small' ? '36px' : props.size === 'large' ? '62px' : '48px'};
  height: ${(props) =>
    props.size === 'small' ? '36px' : props.size === 'large' ? '62px' : '48px'};

  font-size: ${(props) =>
    props.size === 'sm'
      ? `${props.theme.fontSize.base}`
      : props.size === 'lg'
      ? `${props.theme.fontSize.large}`
      : `${props.theme.fontSize.button}`};
  border-radius: ${(props) =>
    props.rounded ? '999px' : props.theme.radius.one}px;
  cursor: pointer;
  transition: all 0.25s;
  // text-transform: uppercase;
  :active {
    box-shadow: none !important;
  }

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
    box-shadow: ${(props) =>
      props.color === 'primary' ||
      props.color === 'secondary' ||
      props.color === 'success' ||
      props.color === 'error' ||
      props.color === 'white' ||
      props.color === 'dark'
        ? props.theme.shadow.buttonHover
        : '3px 3px 18px -6px #00000021'};
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
    // color: ${(props) => (props.color === 'white' ? 'initial' : 'white')};
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
          : pSBC(props.theme.color.gray.two, -0)};
      :hover {
        box-shadow: ${props.theme.shadow.button};
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
  box-shadow: ${(props) =>
    props.color === 'primary' ||
    props.color === 'secondary' ||
    props.color === 'success' ||
    props.color === 'error' ||
    props.color === 'white' ||
    props.color === 'dark'
      ? props.theme.shadow.button
      : '3px 3px 18px -6px #0000001a'};
  font-weight: ${(props) => props.theme.fontWeight.button};
  outline: none;
  border: none;
  // font-weight: 500;
  letter-spacing: 1.4px;
  width: ${(props) =>
    props.size === 'small' ? '36px' : props.size === 'large' ? '62px' : '48px'};
  height: ${(props) =>
    props.size === 'small' ? '36px' : props.size === 'large' ? '62px' : '48px'};

  font-size: ${(props) =>
    props.size === 'sm'
      ? `${props.theme.fontSize.base}`
      : props.size === 'lg'
      ? `${props.theme.fontSize.large}`
      : `${props.theme.fontSize.button}`};
  border-radius: ${(props) =>
    props.rounded ? '999px' : props.theme.radius.one}px;
  cursor: pointer;
  transition: all 0.25s;
  // text-transform: uppercase;
  :active {
    box-shadow: none !important;
  }

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
    box-shadow: ${(props) =>
      props.color === 'primary' ||
      props.color === 'secondary' ||
      props.color === 'success' ||
      props.color === 'error' ||
      props.color === 'white' ||
      props.color === 'dark'
        ? props.theme.shadow.buttonHover
        : '3px 3px 18px -6px #00000021'};
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
    // color: ${(props) => (props.color === 'white' ? 'initial' : 'white')};
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
        box-shadow: ${props.theme.shadow.button};
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
  box-shadow: ${(props) =>
    props.color === 'primary' ||
    props.color === 'secondary' ||
    props.color === 'success' ||
    props.color === 'error' ||
    props.color === 'white' ||
    props.color === 'dark'
      ? props.theme.shadow.button
      : '3px 3px 18px -6px #0000001a'};
  font-weight: ${(props) => props.theme.fontWeight.button};
  outline: none;
  border: none;
  // font-weight: 500;
  letter-spacing: 1.4px;
  width: ${(props) =>
    props.size === 'small' ? '36px' : props.size === 'large' ? '62px' : '48px'};
  height: ${(props) =>
    props.size === 'small' ? '36px' : props.size === 'large' ? '62px' : '48px'};

  font-size: ${(props) =>
    props.size === 'sm'
      ? `${props.theme.fontSize.base}`
      : props.size === 'lg'
      ? `${props.theme.fontSize.large}`
      : `${props.theme.fontSize.button}`};
  border-radius: ${(props) =>
    props.rounded ? '999px' : props.theme.radius.one}px;
  cursor: pointer;
  transition: all 0.25s;
  // text-transform: uppercase;
  :active {
    box-shadow: none !important;
  }

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
    box-shadow: ${(props) =>
      props.color === 'primary' ||
      props.color === 'secondary' ||
      props.color === 'success' ||
      props.color === 'error' ||
      props.color === 'white' ||
      props.color === 'dark'
        ? props.theme.shadow.buttonHover
        : '3px 3px 18px -6px #00000021'};
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
    // color: ${(props) => (props.color === 'white' ? 'initial' : 'white')};
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
        box-shadow: ${props.theme.shadow.button};
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
