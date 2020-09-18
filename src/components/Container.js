import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

const Container = ({ className, id, children, customStyles, size }) => {
  return (
    <StyledContainer
      className={className}
      id={id}
      customStyles={customStyles}
      size={size}
    >
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  // max-width: ${(props) => (props.maxWidth ? props.maxWidth : '1024')}px;
  padding-left: 24px;
  padding-right: 24px;
  @media (min-width: 576px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 576px;
  }
  @media (min-width: 769px) {
    padding-left: ${(props) =>
      props.size === 'sm' ? '64px' : props.size === 'lg' ? '48px' : '64px'};
    padding-right: ${(props) =>
      props.size === 'sm' ? '64px' : props.size === 'lg' ? '48px' : '64px'};
    max-width: ${(props) =>
      props.size === 'sm' ? '769px' : props.size === 'lg' ? '1200px' : '960px'};
  }
  @media (min-width: 960px) {
    max-width: ${(props) =>
      props.size === 'sm'
        ? '960px'
        : props.size === 'lg'
        ? '1500px'
        : '1200px'};
  }
  ${(props) => props.customStyles}
`;

export default Container;
