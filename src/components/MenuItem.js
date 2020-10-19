import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Menu from './Menu';
import { Link } from '@reach/router';

const MenuItem = ({
  children,
  className,
  id,
  customStyles,
  submenu,
  square,
  align,
}) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  if (submenu) {
    const link = (
      <Link to={children[0].props.to} className="menu-item">
        {children[0].props.children}
        <FontAwesomeIcon
          style={{
            fontSize: 14,
            position: 'relative',
            top: 1,
            left: 6,
            transform: `${showSubMenu ? 'rotate(180deg)' : 'none'}`,
            transitionDuration: '.1s',
          }}
          icon="chevron-down"
        />
      </Link>
    );
    return (
      <>
        <Wrapper
          className={`${className} menu-item`}
          id={id}
          customStyles={customStyles}
          square={square}
          onMouseEnter={() => {
            setShowSubMenu(true);
          }}
          onMouseLeave={() => {
            setShowSubMenu(false);
          }}
          open={showSubMenu}
        >
          {link}
          <SubMenuWrapper align={align} open={showSubMenu}>
            {children[1]}
          </SubMenuWrapper>
        </Wrapper>
      </>
    );
  } else {
    return (
      <Wrapper className={`${className} menu-item`} id={id} square={square}>
        {children}
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  display: flex;
  align-items: stretch;
  font-size: ${(props) => props.theme.fontSize.base};
  a {
    opacity: 1;
  }
  :hover a {
    opacity: 0.8;
  }

  a {
    display: block;
    width: fit-content;
    color: ${(props) => props.theme.color.text.paragraph};
    padding: 12px 18px;
    border: none;
    height: 100%;
    text-decoration: none;
    transition-duration: 0.1s;
    font-size: ${(props) => props.theme.fontSize.base};
    // background: ${(props) => (props.open ? '#00000007' : 'transparent')};
    border-radius: ${(props) => props.theme.radius.one};
    :hover {
      // background: #00000009;
    }
  }
  ${(props) => props.customStyles}
`;

const SubMenuWrapper = styled.div`
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: transform 0.1s ease-out,
    opacity 0.1s ease-out
      ${(props) => (props.open ? ', visibility 0s 0s' : ', visibility 0s .1s')};
  transform: ${(props) => (props.open ? 'scale(1)' : 'scale(.95)')};
  position: absolute;
  min-width: calc(100% + 40px);
  top: calc(100%);
  // padding-top: 8px;
  margin: 0 auto;
  left: ${(props) => (props.align !== 'right' ? '18px' : null)};
  right: ${(props) => (props.align === 'right' ? '18px' : null)};
  z-index: 999;
`;

export default MenuItem;
