import React from 'react';
import styled, { css } from 'styled-components';

const H6 = ({ children, className = '', customStyles }) => {
  return (
    <StyledH6 customStyles={customStyles} className={className}>
      {children}
    </StyledH6>
  );
};

const StyledH6 = styled.h6`
  ${(props) =>
    props.customStyles &&
    css`
      ${props.customStyles}
    `}
`;

export default H6;
