import React, { useState } from 'react';
import styled from 'styled-components';

const SubMenuItem = ({ children, className, id, customStyles }) => (
  <Wrapper className={className} id={id} customStyles={customStyles}>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  cursor: pointer;
  :hover {
    background: ${(props) => props.theme.color.gray.one};
  }
  a {
    width: 100%;
    padding: 12px 18px;
    display: block;
    width: 100%;
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
    :hover {
      background: ${(props) => props.theme.color.gray.one};
    }
    :active {
      background: ${(props) => props.theme.color.gray.two};
      color: white;
    }
  }

  ${(props) => props.customStyles}
`;

export default SubMenuItem;
