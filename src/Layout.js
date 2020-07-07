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
import Row from './components/Row';
import Button from './components/Button';

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

const Layout = ({ children, component }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header fixed color={component ? 'primary' : 'transparent'}>
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
        <br />
        <br />
        <Row spacing={[12]} breakpoints={[576, 850, 1200]}>
          <div widths={[4, 3, 2]} style={{ position: 'sticky', top: 0 }}>
            <div
              style={{
                background: theme.color.gray.one,
                height: '100%',
                position: 'sticky',
                left: 0,
                width: '100%',
                top: 0,
                boxShadow: theme.shadow.one,
                padding: '32px 16px',
              }}
            >
              <H6 className="mb-2">Getting Started</H6>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/container"
              >
                Quick Start
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/container"
              >
                Theming
              </Link>
              <H6 className="mb-2">Layout</H6>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/section"
              >
                Section
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/container"
              >
                Container
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/grid"
              >
                Grid
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/flex"
              >
                Flex
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/hidden"
              >
                Hidden
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/header"
              >
                Header
              </Link>
              <H6 className="mb-2">Navigation</H6>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/container"
              >
                Menu
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/container"
              >
                Mobile Menu
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/container"
              >
                Dropdown
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/container"
              >
                Tabs
              </Link>
              <H6 className="mb-2">Display</H6>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/alert"
              >
                Alert
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/notification"
              >
                Notification
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/badge"
              >
                Badge
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/info"
              >
                Info
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/info"
              >
                Typography
              </Link>
              <H6 className="mb-2">Input</H6>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/button"
              >
                Button
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/input"
              >
                Input
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/textarea"
              >
                Text Area
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/select"
              >
                Select
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/checkboxes"
              >
                Checkboxes
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/radio-buttons"
              >
                Radio Buttons
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/toggle"
              >
                Toggle
              </Link>
              <Link
                className="no-styling"
                style={{
                  color: 'inherit',
                  display: 'block',
                  fontSize: 15,
                  padding: '4px 0',
                }}
                to="/components/toggle"
              >
                Slider
              </Link>
            </div>
          </div>
          <div widths={[8, 9, 10]}>{children}</div>
        </Row>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  color: ${(props) => props.theme.color.heading};
`;

export default Layout;
