import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { ThemeContext } from '../theme';
import H4 from './H4';

const Info = ({
  children,
  className,
  id,
  title,
  icon,
  variant,
  color,
  align,
}) => {
  return (
    <StyledInfo
      className={className}
      id={id}
      variant={variant}
      color={color}
      align={align}
    >
      {icon && (
        <Icon align={align} color={color} variant={variant}>
          {icon}
        </Icon>
      )}
      <div>
        {title && <H4>{title}</H4>}
        {children}
      </div>
    </StyledInfo>
  );
};

const StyledInfo = styled.div`

`;

const Icon = styled.div`

`;

export default Info;
