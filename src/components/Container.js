import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../theme';

const Container = ({
  children,
  background,
  className = '',
  maxWidth,
  style,
  size,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledContainer
      maxWidth={maxWidth}
      className={className}
      background={background}
      style={style}
      size={size}
    >
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${(props) =>
    props.maxWidth
      ? props.maxWidth
      : props.size === 'xs'
      ? '769'
      : props.size === 'sm'
      ? '960'
      : props.size === 'lg'
      ? '1500'
      : '1300'}px;
  padding-left: 16px;
  padding-right: 16px;
  padding: 0 12px;
  @media (min-width: 576px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: 769px) {
    padding-left: 48px;
    padding-right: 48px;
  }
`;

export default Container;
