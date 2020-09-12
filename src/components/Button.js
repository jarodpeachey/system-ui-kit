/* eslint-disable no-nested-ternary */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../theme';
import { pSBC } from '../utils/color';
import { Link } from '@reach/router';

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
        fullWidth={fullWidth}
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
        fullWidth={fullWidth}
      >
        {children}
      </StyledLink>
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
  box-shadow: ${(props) =>
    props.variant === 'secondary' ? props.theme.shadow.two : 'none'};
  outline: none;
  padding: 12px 24px;
  border: none;
  width: ${(props) => (props.fullWidth ? '100%' : null)};
  font-size: 16px;
  // font-weight: 500;
  letter-spacing: 1.1px;
  padding: ${(props) =>
    props.size === 'small'
      ? '8px 12px'
      : props.size === 'large'
      ? '16px 29px'
      : '12px 18px'};
    
  height: ${(props) => (props.size === 'large' ? '54px' : null)};
  font-size: ${(props) =>
    props.size === 'small' ? '12px' : props.size === 'large' ? '16px' : '14px'};
  border-radius: ${(props) => props.theme.radius.one};
  cursor: pointer;
  transition: all 0.25s;
  text-transform: uppercase;
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
            : props.theme.color.gray.two};   
    color: ${(props) =>
      props.color === 'white'
        ? props.theme.color.text.heading
        : props.color === 'primary' ||
          props.color === 'secondary' ||
          props.color === 'success' ||
          props.color === 'error'
        ? 'white'
        : props.theme.color.text.heading};
      * {
            color: ${(props) =>
              props.color === 'white'
                ? props.theme.color.text.heading
                : props.color === 'primary' ||
                  props.color === 'secondary' ||
                  props.color === 'success' ||
                  props.color === 'error'
                ? 'white'
                : props.theme.color.text.heading};
      }
      border: 1px solid transparent;
      :hover {
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
            : props.theme.color.gray.three};
        // color: ${(props) => (props.color === 'white' ? 'initial' : 'white')};
      }


  ${(props) =>
    props.variant === 'outlined' &&
    css`
      background: transparent;
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
          : props.theme.color.gray.three};
      :hover {
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
          : props.theme.color.gray.three};
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
      color: ${
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
          : props.theme.color.text.heading
      } !important;
    * {
            color: ${
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
                : props.theme.color.text.heading
            } !important;
    }
      border: 1px solid transparent;
      :hover {
        background: ${
          props.color === 'primary'
            ? `${props.theme.color.primary}15`
            : props.color === 'secondary'
            ? `${props.theme.color.secondary}15`
            : props.color === 'success'
            ? `${props.theme.color.success}15`
            : props.color === 'error'
            ? `${props.theme.color.error}15`
            : props.color === 'white'
            ? '#ffffff10'
            : props.theme.color.gray.one
        };
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
    props.variant === 'secondary' ? props.theme.shadow.two : 'none'};
  outline: none;
  padding: 12px 24px;
  border: none;
  width: ${(props) => (props.fullWidth ? '100%' : null)};
  font-size: 16px;
  // font-weight: 500;
  letter-spacing: 1.1px;
  padding: ${(props) =>
    props.size === 'small'
      ? '8px 12px'
      : props.size === 'large'
      ? '16px 29px'
      : '12px 18px'};
    
  height: ${(props) => (props.size === 'large' ? '54px' : null)};
  font-size: ${(props) =>
    props.size === 'small' ? '12px' : props.size === 'large' ? '16px' : '14px'};
  border-radius: ${(props) => props.theme.radius.one};
  cursor: pointer;
  transition: all 0.25s;
  text-transform: uppercase;
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
            : props.theme.color.gray.two};   
    color: ${(props) =>
      props.color === 'white'
        ? props.theme.color.text.heading
        : props.color === 'primary' ||
          props.color === 'secondary' ||
          props.color === 'success' ||
          props.color === 'error'
        ? 'white'
        : props.theme.color.text.heading} !important;
      * {
            color: ${(props) =>
              props.color === 'white'
                ? props.theme.color.text.heading
                : props.color === 'primary' ||
                  props.color === 'secondary' ||
                  props.color === 'success' ||
                  props.color === 'error'
                ? 'white'
                : props.theme.color.text.heading} !important;
      }
      border: 1px solid transparent;
      :hover {
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
            : props.theme.color.gray.three};
        // color: ${(props) => (props.color === 'white' ? 'initial' : 'white')};
      }


  ${(props) =>
    props.variant === 'outlined' &&
    css`
      background: transparent;
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
        : props.theme.color.text.heading};
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
          : props.theme.color.text.heading};
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
          : props.theme.color.gray.three};
      :hover {
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
          : props.theme.color.gray.three};
        color: ${props.color === 'white'
          ? 'initial'
          : props.color
          ? 'white'
          : props.theme.color.text.heading};
        * {
          color: ${props.color === 'white'
            ? 'initial'
            : props.color
            ? 'white'
            : props.theme.color.text.heading};
        }
      }
    `};

  ${(props) =>
    props.variant === 'plain' &&
    css`
      background: transparent;
      color: ${
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
          : props.theme.color.text.heading
      };
    * {
            color: ${
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
                : props.theme.color.text.heading
            };
    }
      border: 1px solid transparent;
      :hover {
        background: ${
          props.color === 'primary'
            ? `${props.theme.color.primary}15`
            : props.color === 'secondary'
            ? `${props.theme.color.secondary}15`
            : props.color === 'success'
            ? `${props.theme.color.success}15`
            : props.color === 'error'
            ? `${props.theme.color.error}15`
            : props.color === 'white'
            ? '#ffffff10'
            : props.theme.color.gray.one
        };
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
    props.variant === 'secondary' ? props.theme.shadow.two : 'none'};
  outline: none;
  padding: 12px 24px;
  border: none;
  width: ${(props) => (props.fullWidth ? '100%' : null)};
  font-size: 16px;
  // font-weight: 500;
  letter-spacing: 1.1px;
  z-index: -1 !important;
  padding: ${(props) =>
    props.size === 'small'
      ? '8px 12px'
      : props.size === 'large'
      ? '16px 29px'
      : '12px 18px'};
    
  height: ${(props) => (props.size === 'large' ? '54px' : null)};
  font-size: ${(props) =>
    props.size === 'small' ? '12px' : props.size === 'large' ? '16px' : '14px'};
  border-radius: ${(props) => props.theme.radius.one};
  cursor: pointer;
  transition: all 0.25s;
  text-transform: uppercase;
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
            : props.theme.color.gray.two};   
    color: ${(props) =>
      props.color === 'white'
        ? props.theme.color.text.heading
        : props.color === 'primary' ||
          props.color === 'secondary' ||
          props.color === 'success' ||
          props.color === 'error'
        ? 'white'
        : props.theme.color.text.heading} !important;
      * {
            color: ${(props) =>
              props.color === 'white'
                ? props.theme.color.text.heading
                : props.color === 'primary' ||
                  props.color === 'secondary' ||
                  props.color === 'success' ||
                  props.color === 'error'
                ? 'white'
                : props.theme.color.text.heading} !important;
      }
      border: 1px solid transparent;
      :hover {
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
            : props.theme.color.gray.three};
        // color: ${(props) => (props.color === 'white' ? 'initial' : 'white')};
      }


  ${(props) =>
    props.variant === 'outlined' &&
    css`
      background: transparent;
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
        : props.theme.color.text.heading};
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
          : props.theme.color.text.heading};
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
          : props.theme.color.gray.three};
      :hover {
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
          : props.theme.color.gray.three};
        color: ${props.color === 'white'
          ? 'initial'
          : props.color
          ? 'white'
          : props.theme.color.text.heading};
        * {
          color: ${props.color === 'white'
            ? 'initial'
            : props.color
            ? 'white'
            : props.theme.color.text.heading};
        }
      }
    `};

  ${(props) =>
    props.variant === 'plain' &&
    css`
      background: transparent;
      color: ${
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
          : props.theme.color.text.heading
      };
    * {
            color: ${
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
                : props.theme.color.text.heading
            };
    }
      border: 1px solid transparent;
      :hover {
        background: ${
          props.color === 'primary'
            ? `${props.theme.color.primary}15`
            : props.color === 'secondary'
            ? `${props.theme.color.secondary}15`
            : props.color === 'success'
            ? `${props.theme.color.success}15`
            : props.color === 'error'
            ? `${props.theme.color.error}15`
            : props.color === 'white'
            ? '#ffffff10'
            : props.theme.color.gray.one
        };
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
