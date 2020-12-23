import React from 'react';
import styled from 'styled-components';

const SubMenu = ({ children, className, id, customStyles, dark }) => (
  <Wrapper
    className={className}
    id={id}
    customStyles={customStyles}
    dark={dark}
  >
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  border-radius: ${(props) => props.theme.radius.one}px;
  background: ${(props) => (props.dark ? props.theme.color.gray.six : 'white')};
  padding: 8px 0;
  opacity: 1;
  a {
    opacity: 1;
  }
  width: 100%;
  box-shadow: ${(props) => props.theme.shadow.two};
`;

export default SubMenu;
