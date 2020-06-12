import React from 'react';
import styled from 'styled-components';

const Tablet = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 769px) {
    display: block;
  }
`;

export default Tablet;
