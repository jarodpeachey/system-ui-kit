import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Container from './Container';

const MobileMenu = ({ children, className, customStyles, open }) => (
  <>
    <Wrapper
      className={className}
      id="mobile-menu"
      customStyles={customStyles}
      open={open}
    >
      {children}
    </Wrapper>
  </>
);

const Wrapper = styled.div`
  position: absolute;
  top: 100%;
  z-index: 999;
  width: 100%;
  height: fit-content;
  left: 0;
  border-radius: ${(props) => props.theme.radius.two};
  margin: 1.6em auto 0;
  visibility: hidden;
  background: ${(props) => props.theme.color.gray.six};
  box-shadow: ${(props) => props.theme.shadow.four};
  opacity: 0;
  transition: transform 0.1s, opacity 0.1s, visibility 0s 0.1s;
  transform: scale(0.95);
  padding: 1.5em;

  ${(props) =>
    props.open &&
    css`
      transition: transform 0.1s, opacity 0.1s, visibility 0s 0s;
      transform: scale(1);
      visibility: visible;
      opacity: 1;
    `}
`;

// max-height: calc(
//   400px -
//     ${(props) =>
//       props.scrolled ? 'calc(75px + 8px)' : 'calc(107px + 8px)'}
// );
// height: calc(
//   400px -
//     ${(props) =>
//       props.scrolled ? 'calc(75px + 8px)' : 'calc(107px + 8px)'}
// );

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 12px;
  width: 100%;
  display: block;
  background: orange;
  box-shadow: 0px -4px 20px -12px #00000080;
  z-index: 99999999;
`;

export default MobileMenu;
