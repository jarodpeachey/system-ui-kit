import React from 'react';
import styled from 'styled-components';

const Menu = ({ children, className, customStyles }) => (
  <Wrapper id="menu" className={className} customStyles={customStyles}>
    {children}
  </Wrapper>
);

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  ${(props) => props.customStyles}
`;

const Close = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

export default Menu;
