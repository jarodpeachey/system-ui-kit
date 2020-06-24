import React from 'react';
import styled from 'styled-components';

const H5 = ({ children, className = '', title }) => {
  return (
    <StyledH5 title={title} className={className}>
      {children}
    </StyledH5>
  );
};

const StyledH5 = styled.h5`
  text-transform: ${(props) => (props.title ? 'uppercase' : null)};
`;

export default H5;
