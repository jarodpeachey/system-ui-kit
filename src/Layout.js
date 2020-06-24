import React from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeProvider } from 'styled-components';
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
import Header from './components/Header';
import { theme } from './theme';

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
);

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Header fixed color="transparent">
      <h1 style={{ margin: '0' }}>System</h1>
      <Mobile>
        <MobileMenu>
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
    {children}
  </ThemeProvider>
);

export default Layout;
