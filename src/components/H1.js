import React from 'react';
import styled, { css } from 'styled-components';

const H1 = ({ children, className = '', customStyles }) => {
  return (
    <StyledH1 customStyles={customStyles} className={className}>
      {children}
    </StyledH1>
  );
};

const StyledH1 = styled.h1`
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

export default H1;
