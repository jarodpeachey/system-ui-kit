import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../theme';

const MobileMenuItem = ({ children, className, id, submenu, align, icon }) => {
  const [showMobileSubMenu, setShowMobileSubMenu] = useState(false);
  return (
    <>
      {submenu ? (
        <>
          <Wrapper
            className={className}
            id={id}
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
        <Wrapper className={className} id={id}>
          {children}
        </Wrapper>
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
    color: ${(props) => props.theme.color.text.heading} !important;
    fill: ${(props) => props.theme.color.text.heading} !important;
  }
  color: ${(props) => props.theme.color.text.heading};
  ${(props) =>
    props.submenu &&
    css`
      padding: 12px 16px;
      cursor: pointer;
      border-radius: ${props.theme.radius.one};
      transition-duration: 0.15s !important;
      :hover {
        background: ${'#435a8e10'};
      }
      svg {
        color: ${props.theme.color.text.heading} !important;
        fill: ${props.theme.color.text.heading} !important;
      }
    `};
  a {
    display: ${(props) => (props.submenu ? 'inline-block' : 'block')};
    width: ${(props) => (props.submenu ? 'fit-content' : '100%')};
    padding: ${(props) => (props.submenu ? 0 : '12px 16px')};
    text-decoration: none;
    color: ${(props) => props.theme.color.text.heading};
    cursor: pointer;
    background: ${(props) =>
      props.submenu
        ? 'transparent'
        : props.open
        ? '#435a8e10'
        : 'transparent'};
    border-radius: ${(props) => props.theme.radius.one};
    transition-duration: 0.15s !important;
    :hover {
      background: ${(props) =>
        props.submenu ? 'transparent' : '#435a8e10'};
    }
  }
`;

const MobileSubMenuWrapper = styled.div`


    -webkit-transition: all 0.15s;
  -moz-transition: all 0.15s;
  -ms-transition: all 0.15s;
  -o-transition: all 0.15s;
  transition: all 0.15s;
  overflow: hidden;
  max-height: ${(props) => (props.open ? '130px' : '0')} !important;
`;

export default MobileMenuItem;
