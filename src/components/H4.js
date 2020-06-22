import React from 'react';
import styled, { css } from 'styled-components';

const H4 = ({ children, className = '', customStyles }) => {
  return (
    <StyledH4 customStyles={customStyles} className={className}>
      {children}
    </StyledH4>
  );
};

const StyledH4 = styled.h4`
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

export default H4;
