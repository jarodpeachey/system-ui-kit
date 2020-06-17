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
}) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledInfo
      layout={layout}
      variant={variant}
      color={color}
      className={className}
    >
      {icon && (
        <Icon layout={layout} color={color} variant={variant}>
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
  text-align: ${(props) => (props.layout !== 'horizontal' ? 'center' : 'left')};
  p,
  div {
    font-size: 18px;
  }
  h3 {
    margin: ${(props) =>
      props.layout === 'horizontal' ? '0 0 16px 0' : '16px 0'};
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
      : null}${(props) => (props.variant === 'light' ? '15' : null)};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) =>
      props.variant !== 'light' ? (props.color ? 'white' : null) : null};
  }
  p {
    color: ${(props) =>
      props.variant === 'light'
        ? '#00000090'
        : props.color
        ? '#ffffffbb'
        : null};
  }
  ${(props) =>
    props.variant === 'card' &&
    css`
      background: white;
      border: 1px solid rgb(195, 195, 195);
    `};
`;

const Icon = styled.div`
  margin: 0 auto;
  width: fit-content;
  color: ${(props) => props.theme.color.primary.main};
  svg {
    font-size: 38px;
  }
  margin-right: ${(props) =>
    props.layout === 'horizontal' ? `${props.theme.spacing.five - 6}px` : null};

  color: ${(props) =>
    props.variant === 'light'
      ? props.color === 'primary'
        ? props.theme.color.primary.main
        : props.color === 'secondary'
        ? props.theme.color.secondary.main
        : props.color === 'success'
        ? props.theme.color.success
        : props.color === 'error'
        ? props.theme.color.error
        : props.theme.color.text.dark.one
      : props.color
      ? 'white'
      : null};
`;

export default Info;
