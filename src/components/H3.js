import React from 'react';
import styled from 'styled-components';

const H3 = ({ children, className = "" }) => {
  return <StyledH3 className={className}>{children}</StyledH3>;
};

const StyledH3 = styled.h3``;

export default H3;
