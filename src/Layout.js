import React, { useState } from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBolt,
  faQuestionCircle,
  faFeather,
  faCog,
  faGlobe,
  faTimes,
  faChevronDown,
  faUser,
  faDollarSign,
  faBell,
  faCheck,
  faHeart,
  faExclamationCircle,
  faChevronRight,
  faChevronLeft,
  faBoxes,
  faPalette,
  faMousePointer,
} from '@fortawesome/free-solid-svg-icons';
import NavbarItem from './components/NavbarItem';
import SubMenuItem from './components/SubMenuItem';
import SubMenu from './components/SubMenu';
import Tablet from './components/Tablet';
import Mobile from './components/Mobile';
import Navbar from './components/Navbar';
import MobileSubMenuItem from './components/MobileSubMenuItem';
import MobileMenuItem from './components/MobileMenuItem';
import MobileMenu from './components/MobileMenu';
import MobileSubMenu from './components/MobileSubMenu';
import MobileMenuToggle from './components/MobileMenuToggle';
import Header from './components/Header';
import { theme } from './theme';
import H1 from './components/H1';
import H2 from './components/H2';
import H3 from './components/H3';
import H4 from './components/H4';
import H5 from './components/H5';
import H6 from './components/H6';

library.add(
  faQuestionCircle,
  faFeather,
  faCog,
  faGlobe,
  faTimes,
  faCheck,
  faChevronDown,
  faUser,
  faBell,
  faDollarSign,
  faHeart,
  faExclamationCircle,
  faChevronRight,
  faChevronLeft,
  faBoxes,
  faPalette,
  faMousePointer,
);

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header fixed color="transparent">
          <H1 type="h1" className="m-none">
            System
          </H1>
          <Mobile>
            <MobileMenuToggle
              open={mobileMenuOpen}
              toggleFunction={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </Mobile>
          <Tablet>
            <Navbar>
              <NavbarItem>
                <a href="/">Home</a>
              </NavbarItem>
              <NavbarItem submenu>
                <Link to="/components">Components</Link>
                <SubMenu>
                  <SubMenuItem>
                    <Link to="/components/layout">Layout</Link>
                  </SubMenuItem>
                  <SubMenuItem>
                    <Link to="/components/inputs">Inputs</Link>
                  </SubMenuItem>
                  <SubMenuItem>
                    <Link to="/components/display">Display</Link>
                  </SubMenuItem>
                </SubMenu>
              </NavbarItem>
              <NavbarItem square>
                <a href="/">
                  <FontAwesomeIcon
                    icon="heart"
                    style={{ width: 20, height: 20, fontSize: 24 }}
                  />
                </a>
              </NavbarItem>
            </Navbar>
          </Tablet>
        </Header>
        <Mobile>
          <MobileMenu open={mobileMenuOpen}>
            <MobileMenuItem>
              <a href="/">Home</a>
            </MobileMenuItem>
            <MobileMenuItem submenu>
              <Link to="/components">Components</Link>
              <MobileSubMenu>
                <MobileSubMenuItem>
                  <Link to="/components/layout">Layout</Link>
                </MobileSubMenuItem>
                <MobileSubMenuItem>
                  <Link to="/components/inputs">Inputs</Link>
                </MobileSubMenuItem>
                <MobileSubMenuItem>
                  <Link to="/components/display">Display</Link>
                </MobileSubMenuItem>
              </MobileSubMenu>
            </MobileMenuItem>
          </MobileMenu>
        </Mobile>
        {children}
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  color: ${(props) => props.theme.color.heading};
`;

export default Layout;
