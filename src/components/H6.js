import React from 'react';
import styled from 'styled-components';

const H6 = ({ children, className = "" }) => {
  return <StyledH6 className={className}>{children}</StyledH6>;
};

const StyledH6 = styled.h6``;

export default H6;
