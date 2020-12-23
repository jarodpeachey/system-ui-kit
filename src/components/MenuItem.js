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
          className={`${className}`}
          id={id}
          customStyles={customStyles}
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
      <Wrapper className={`${className} menu-item`} id={id}>
        {children}
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  position: relative;
  font-family: ${(props) => props.theme.fontFamily.body};
  font-size: ${(props) => props.theme.fontSize.base}px;
  line-height: ${(props) => props.theme.lineHeight.p}px;
  color: ${(props) => props.theme.color.text.paragraph};

  a {
    font-family: ${(props) => props.theme.fontFamily.body};
    font-size: ${(props) => props.theme.fontSize.base}px;
    line-height: ${(props) => props.theme.lineHeight.p}px;
    color: ${(props) => props.theme.color.text.paragraph};
    padding: 12px;
    text-decoration: none;
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
  margin: 0 auto;
  right: ${(props) => (props.align !== 'left' ? '0' : null)};
  left: ${(props) => (props.align === 'left' ? '0' : null)};
  z-index: 999;
`;

export default MenuItem;
