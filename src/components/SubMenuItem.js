import React, { useState } from 'react';
import styled from 'styled-components';

const SubMenuItem = ({ children, className, id, customStyles }) => (
  <Wrapper className={className} id={id} customStyles={customStyles}>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  a {
    display: block;
    width: 100%;
    padding: 8px 16px;
    text-decoration: none;
    background: none;
    transition-duration: 0.1s;
    color: initial !important;
    font-weight: normal !important;
    width: 100%;
    border-radius: 0px;
    margin: 0;
    width: 100%;
    cursor: pointer;
    :active {
      background: ${(props) => props.theme.color.primary};
      color: white;
    }
    :hover {
      background: ${(props) => props.theme.color.gray.one};
    }
  }

  ${(props) => props.customStyles}
`;

export default SubMenuItem;
