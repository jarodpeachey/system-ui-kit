import React from 'react';
import styled, { css } from 'styled-components';

const H2 = ({ children, className = '', customStyles }) => {
  return (
    <StyledH2 customStyles={customStyles} className={className}>
      {children}
    </StyledH2>
  );
};

const StyledH2 = styled.h2`
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

export default H2;
