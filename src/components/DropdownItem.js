import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { theme } from '../theme';

const DropdownItem = ({ children, className, id }) => (
  <Wrapper className={className} id={id}>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  padding: 12px 18px;
  border-radius: 0px;
  margin: 0;
  width: 100%;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.base};
  :hover {
    background: ${(props) => props.theme.color.gray.one};
  }
  :active {
    background: ${(props) => props.theme.color.gray.two};
    color: white;
  }
`;

export default DropdownItem;
