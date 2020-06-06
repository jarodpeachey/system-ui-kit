import React from 'react';
import styled from 'styled-components';

const H2 = ({ children, className = '' }) => {
  return <StyledH2 className={className}>{children}</StyledH2>;
};

const StyledH2 = styled.h2``;

export default H2;
