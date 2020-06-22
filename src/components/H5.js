import React from 'react';
import styled from 'styled-components';

const H5 = ({ children, className = '' }) => {
  return <StyledH5 className={className}>{children}</StyledH5>;
};

const StyledH5 = styled.h5`
  color: ${(props) => props.theme.color.primary.main};
  margin-bottom: 0;
`;

export default H5;
