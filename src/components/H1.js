import React from 'react';
import styled from 'styled-components';

const H1 = ({ children, className = "" }) => {
  return <StyledH1 className={className}>{children}</StyledH1>;
};

const StyledH1 = styled.h1``;

export default H1;
