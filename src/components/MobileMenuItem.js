import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../theme';
import Collapse from './Collapse';

const MobileMenuItem = ({ children, className, id, submenu, align, icon }) => {
  const [showMobileSubMenu, setShowMobileSubMenu] = useState(false);
  return (
    <>
      {submenu ? (
        <>
          <Collapse
            customStyles={`
              border: none;
              padding: 12px 16px;

              &:hover {
                background: transparent;
              }
            `}
            titleStyles={`
              font-weight: 600;
              color: white;
              display: block;
              svg {
                height: fit-content;
                widxth: fit-content;
              }
              &:hover {
                background: transparent;
              }
            `}
            padding={16}
          >
            <div>{children[0]}</div>
            <div>{children[1]}</div>
          </Collapse>
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
  transition-duration: 0.1s;
  width: 100%;
  font-size: ${(props) => props.theme.fontSize.base};
  color: white;

  ${(props) =>
    props.submenu &&
    css`
      padding: 12px 16px;
      cursor: pointer;
      border-radius: ${props.theme.radius.one};
      transition-duration: 0.1s;
      svg {
        color: #ffffff90;
        fill: #ffffff90;
      }
    `};
  a {
    display: ${(props) => (props.submenu ? 'inline-block' : 'block')};
    width: ${(props) => (props.submenu ? 'fit-content' : '100%')};
    padding: ${(props) => (props.submenu ? 0 : '12px 16px')};
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSize.base};
    background: ${(props) =>
      props.submenu ? 'transparent' : props.open ? '#435a8e10' : 'transparent'};
    border-radius: ${(props) => props.theme.radius.one};
    transition-duration: 0.1s;
  }
`;

const MobileSubMenuWrapper = styled.div`
  -webkit-transition: all 0.1s;
  -moz-transition: all 0.1s;
  -ms-transition: all 0.1s;
  -o-transition: all 0.1s;
  transition: all 0.1s;
  overflow: hidden;
  max-height: ${(props) => (props.open ? '130px' : '0')} !important;
`;

export default MobileMenuItem;
