/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const OutlinedIconButton = ({
  children,
  className = '',
  onClick,
  link,
  color,
  variant = '',
}) => (
  <span>
    {link ? (
      <a className="no-styling" href={link}>
        <StyledOutlinedIconButton
            color={color}
            variant={variant}
            className={className}
            onClick={onClick || null}
            link
        >
          {children}
        </StyledOutlinedIconButton>
      </a>
    ) : (
      <StyledOutlinedIconButton
          color={color}
          variant={variant}
          className={className}
          onClick={onClick || null}
      >
        {children}
      </StyledOutlinedIconButton>
    )}
  </span>
);

const StyledOutlinedIconButton = styled.button`
  outline: none;
margin-right: 12px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  height: 46px;
  width: 46px;
  border: none;
  border-radius: ${(props) =>
    props.variant === 'rounded' ? '100px' : props.theme.radius.one};
  cursor: pointer;
  transition: all 0.15s;
  :hover, :focus
 {
    box-shadow: 0px 8px 26px -14px ${(props) => (props.color === 'primary' ? props.theme.color.primary.main : props.color === 'secondary' ? props.theme.color.secondary.main : props.color === 'error' ? props.theme.color.error : props.color === 'success' ? props.theme.color.success : '#aaa')};
    transform: scale(1.02);
    background: ${(props) =>
    props.color === 'primary' ?
      props.theme.color.primary.main :
      props.color === 'secondary' ?
        props.theme.color.secondary.main :
        props.color === 'error' ?
          props.theme.color.error :
          props.color === 'success' ?
            props.theme.color.success :
            props.color === 'white' ?
              '#ffffff' :
              ''};
    color: ${(props) =>
    props.color === 'primary' ||
      props.color === 'secondary' ||
      props.color === 'error' ||
      props.color === 'success' ?
      'white' :
      ''};
  }
  border: 2px solid
    ${(props) =>
    props.color === 'primary' ?
      props.theme.color.primary.main :
      props.color === 'secondary' ?
        props.theme.color.secondary.main :
        props.color === 'error' ?
          props.theme.color.error :
          props.color === 'success' ?
            props.theme.color.success :
            props.color === 'white' ?
              '#ffffff' :
              ''};
  background: transparent;
  color: ${(props) =>
    props.color === 'primary' ?
      props.theme.color.primary.main :
      props.color === 'secondary' ?
        props.theme.color.secondary.main :
        props.color === 'error' ?
          props.theme.color.error :
          props.color === 'success' ?
            props.theme.color.success :
            props.color === 'white' ?
              '#ffffff' :
              ''};
`;

export default OutlinedIconButton;
