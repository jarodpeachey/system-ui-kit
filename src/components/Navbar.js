import React from 'react';
import styled from 'styled-components';

const Navbar = ({ children }) => <Wrapper id="navbar">{children}</Wrapper>;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Close = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

export default Navbar;
