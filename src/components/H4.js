import React from 'react';
import styled from 'styled-components';

const H4 = ({ children, className = "" }) => {
  return <StyledH4 className={className}>{children}</StyledH4>;
};

const StyledH4 = styled.h4``;

export default H4;
