import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SubMenu from './SubMenu';

const MenuItem = ({ children, submenu }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  if (submenu) {
    const link = (
      <a href={children[0].props.href}>
        {children[0].props.children}
        <FontAwesomeIcon
          style={{
            fontSize: 14,
            position: 'relative',
            top: 1,
            left: 6,
            transform: `${showSubMenu ? 'rotate(180deg)' : 'none'}`,
            transition: 'all .1s ease-in-out',
          }}
          icon="chevron-down"
        />
      </a>
    );
    return (
      <>
        <Wrapper
          onMouseEnter={() => {
            setShowSubMenu(true);
          }}
          onMouseLeave={() => {
            setShowSubMenu(false);
          }}
        >
          {link}

          <SubMenuWrapper open={showSubMenu}>{children[1]}</SubMenuWrapper>
        </Wrapper>
      </>
    );
  } else {
    return <Wrapper>{children}</Wrapper>;
  }
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  a {
    display: block;
    width: fit-content;
    padding: 8px 16px;
    text-decoration: none;
    cursor: pointer;
    border-radius: ${(props) => props.theme.radius.one};
    transition-duration: 0.15s;
  }
`;

const SubMenuWrapper = styled.div`
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: transform 0.1s ease-out,
    opacity 0.1s ease-out
      ${(props) => (props.open ? ', visibility 0s 0s' : ', visibility 0s .1s')};
  transform: ${(props) => (props.open ? 'scale(1)' : 'scale(.95)')};
  position: absolute;
  min-width: 200px;
  top: calc(100%);
  left: 16px;
  // padding-top: 20px;
  z-index: 999;
`;

export default MenuItem;
