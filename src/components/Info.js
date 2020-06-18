import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { ThemeContext } from '../theme';

const Info = ({
  children,
  title,
  icon,
  className = '',
  variant,
  color,
  layout,
  align,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledInfo
      layout={layout}
      variant={variant}
      color={color}
      align={align}
      className={className}
    >
      {icon && (
        <Icon layout={layout} align={align} color={color} variant={variant}>
          {icon}
        </Icon>
      )}
      <div>
        {title && <h3>{title}</h3>}
        {children}
      </div>
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  font-size: 18px;
  margin: 0 auto;
  border-radius: 3px;
  ${(props) =>
    props.layout === 'horizontal' &&
    css`
      display: flex;
      align-items: flex-start;
    `};
  padding: ${(props) => props.theme.spacing.five + 8}px
    ${(props) => props.theme.spacing.five}px
    ${(props) => props.theme.spacing.five}px
    ${(props) => props.theme.spacing.five}px;
  text-align: ${(props) =>
    props.align === 'left' || props.layout === 'horizontal'
      ? 'left'
      : props.align === 'right'
      ? 'right'
      : 'center'};
  p,
  div {
    font-size: 18px;
  }
  h3 {
    margin: ${(props) =>
      props.layout === 'horizontal' ? '0 0 16px 0' : '16px 0'};
  }
  ${(props) =>
    props.variant === 'filled' &&
    css`
      background: ${props.color === 'primary'
        ? props.theme.color.primary.main
        : props.color === 'secondary'
        ? props.theme.color.secondary.main
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'error'
        ? props.theme.color.error
        : 'white'};
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: ${props.color ? 'white' : null};
      }
      p {
        color: ${props.color ? '#ffffffbb' : null};
      }
    `};
  ${(props) =>
    props.variant === 'light' &&
    css`
      background: ${props.color === 'primary'
        ? props.theme.color.primary.main
        : props.color === 'secondary'
        ? props.theme.color.secondary.main
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'error'
        ? props.theme.color.error
        : 'white'}15;

      p {
        color: ${props.color ? '#000000bb' : null};
      }
    `};
`;

const Icon = styled.div`
  margin: ${(props) =>
    props.align === 'left' || props.align === 'right' ? 0 : '0 auto'};
  margin-left: ${(props) => (props.align === 'right' ? 'auto' : null)};
  width: fit-content;
  color: ${(props) => props.theme.color.primary.main};
  svg {
    font-size: 38px;
  }
  margin-right: ${(props) =>
    props.layout === 'horizontal' ? `${props.theme.spacing.five - 6}px` : null};

  color: ${(props) =>
    props.color === 'primary'
      ? props.theme.color.primary.main
      : props.color === 'secondary'
      ? props.theme.color.secondary.main
      : props.color === 'success'
      ? props.theme.color.success
      : props.color === 'error'
      ? props.theme.color.error
      : props.theme.color.text.dark.one};
  ${(props) =>
    props.variant === 'filled' &&
    css`
      color: ${props.color ? 'white' : null};
    `};
`;

export default Info;
