import React from 'react';
import styled from 'styled-components';

const Mobile = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: block;
  @media (min-width: 769px) {
    display: none;
  }
`;

export default Mobile;
