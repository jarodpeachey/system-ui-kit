/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const Button = ({ children, className = '', onClick, link, color }) => (
  <span>
    {link ? (
      <a className="no-styling" href={link}>
        <StyledButton
            color={color}
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
          className={className}
          onClick={onClick || null}
      >
        {children}
      </StyledButton>
    )}
  </span>
);

const StyledButton = styled.button`
  padding: 12px 24px;
  border-radius: 100px;
  font-size: ${props => props.theme.fontSize.base}px;
  cursor: pointer;
  border-radius: ${(props) => props.theme.radius.one};
  transition: all 0.1s;
  :hover, :focus
 {
    box-shadow: 0px 8px 26px -14px ${(props) => (props.color === 'primary' ? props.theme.color.primary : props.color === 'secondary' ? props.theme.color.secondary : props.color === 'error' ? props.theme.color.error : props.color === 'success' ? props.theme.color.success : '#aaa')};
    transform: scale(1.02);
  }
  background: ${(props) =>
    props.color === 'primary' ?
      props.theme.color.primary :
      props.color === 'secondary' ?
        props.theme.color.secondary :
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
`;

export default Button;
