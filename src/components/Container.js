import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

const Container = ({ className, id, children, customStyles, maxWidth }) => {
  return (
    <StyledContainer
      className={className}
      id={id}
      customStyles={customStyles}
      maxWidth={maxWidth}
    >
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '1200')}px;
  padding-left: 24px;
  padding-right: 24px;
  @media (min-width: 576px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 769px) {
    padding-left: 64px;
    padding-right: 64px;
  }
  ${(props) => props.customStyles}
`;

export default Container;
