import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../theme';

const MobileMenuItem = ({ children, submenu, align, icon }) => {
  const [showMobileSubMenu, setShowMobileSubMenu] = useState(false);
  return (
    <>
      {submenu ? (
        <>
          <Wrapper
            onClick={() => {
              setShowMobileSubMenu(!showMobileSubMenu);
            }}
            open={showMobileSubMenu}
            submenu
          >
            <a href={children[0].props.href}>
              {icon && icon}
              {children[0].props.children}
            </a>
            <FontAwesomeIcon
              style={{
                fontSize: 14,
                position: 'relative',
                top: 1,
                left: 6,
                transform: `${showMobileSubMenu ? 'rotate(180deg)' : 'none'}`,
                transitionDuration: '.15s',
                color: 'inherit',
              }}
              icon="chevron-down"
            />
          </Wrapper>
          <MobileSubMenuWrapper align={align} open={showMobileSubMenu}>
            {children[1]}
          </MobileSubMenuWrapper>
        </>
      ) : (
        <Wrapper>{children}</Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  transition-duration: 0.15s !important;
  width: 100%;
  svg {
    color: ${(props) => props.theme.color.text.dark.one} !important;
    fill: ${(props) => props.theme.color.text.dark.one} !important;
  }
  color: ${(props) => props.theme.color.text.dark.one};
  ${(props) =>
    props.submenu &&
    css`
      padding: 12px 16px;
      cursor: pointer;
      border-radius: ${props.theme.radius.one};
      transition-duration: 0.15s !important;
      :hover {
        background: #00000010;
      }
      svg {
        color: ${props.theme.color.text.dark.one} !important;
        fill: ${props.theme.color.text.dark.one} !important;
      }
    `};
  a {
    display: ${(props) => (props.submenu ? 'inline-block' : 'block')};
    width: ${(props) => (props.submenu ? 'fit-content' : '100%')};
    padding: ${(props) => (props.submenu ? 0 : '12px 16px')};
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => props.theme.color.text.dark.one};
    background: ${(props) =>
      props.submenu ? 'transparent' : props.open ? '#00000010' : 'transparent'};
    border-radius: ${(props) => props.theme.radius.one};
    transition-duration: 0.15s !important;
    :hover {
      background: ${(props) => (props.submenu ? 'transparent' : '#00000010')};
    }
  }
`;

const MobileSubMenuWrapper = styled.div`
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  background: ${(props) => (props.open ? 'white' : 'transparent')};
  opacity: ${(props) => (props.open ? 1 : 0)};
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.15s;
  padding: 0;
  height: ${(props) => (props.open ? 'fit-content' : 0)};
  z-index: -1;
`;

export default MobileMenuItem;
