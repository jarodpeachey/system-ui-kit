import React, { useState } from 'react';
import styled from 'styled-components';

const MobileSubMenuItem = ({ children, className, id }) => (
  <Wrapper className={className} id={id}>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  a {
    display: block;
    width: 100%;
    padding: 12px 16px;
    text-decoration: none;
    cursor: pointer;
    transition-duration: 0.1s;
    font-weight: 600;
    color: white;
  }
`;

export default MobileSubMenuItem;
