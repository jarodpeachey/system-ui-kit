import React from 'react';
import styled, { css } from 'styled-components';

const H3 = ({ children, className = '', customStyles }) => {
  return (
    <StyledH3 customStyles={customStyles} className={className}>
      {children}
    </StyledH3>
  );
};

const StyledH3 = styled.h3`
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

export default H3;
