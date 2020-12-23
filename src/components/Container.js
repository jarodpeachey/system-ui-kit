import { Column, Row } from '@react-tiny-grid/core';
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../theme';

const Container = ({ className, id, children, customStyles, small }) => {
  return (
    <>
      {small ? (
        <Row
          className={className}
          id={id}
          breakpoints={[theme.breakpoints.md, theme.breakpoints.xl]}
        >
          <Column widths={[10, 8]} offsets={[1, 2]}>
            {children}
          </Column>
        </Row>
      ) : (
        <StyledContainer
          className={className}
          id={id}
          customStyles={customStyles}
        >
          {children}
        </StyledContainer>
      )}
    </>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}px) {
    max-width: ${(props) => props.theme.breakpoints.sm - 32}px;
    ${(props) => props.customStyles}
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    max-width: ${(props) => props.theme.breakpoints.md - 48}px;
    ${(props) => props.customStyles}
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    max-width: ${(props) => props.theme.breakpoints.lg - 64}px;
    ${(props) => props.customStyles}
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xl}px) {
    max-width: ${(props) => props.theme.breakpoints.xl - 120}px;
    ${(props) => props.customStyles}
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xxl}px) {
    max-width: ${(props) => props.theme.breakpoints.xxl - 160}px;
    ${(props) => props.customStyles}
  }
  ${(props) => props.customStyles}
`;

export default Container;
