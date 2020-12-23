import React, { useState } from 'react';
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
import MenuItem from './components/MenuItem';
import SubMenuItem from './components/SubMenuItem';
import SubMenu from './components/SubMenu';
import Tablet from './components/Tablet';
import Mobile from './components/Mobile';
import Menu from './components/Menu';
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
import Button from './components/Button';
import { Row, Column } from '@react-tiny-grid/core';
import Collapse from './components/Collapse';
import { pathnameIncludes } from './utils/pathnameIncludes';
import { Link } from '@reach/router';
import Flex from './components/Flex';
import Paragraph from './components/Paragraph';
import Hidden from './components/Hidden';

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

const Layout = ({ children, component, example }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header fixed color="white" scrollColor="white" scrollHeight={45}>
          <H2 customStyles={'position: relative; top: -1px;'} className="">
            System
          </H2>

          <Hidden show={769}>
            <Menu>
              <MenuItem>
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem submenu>
                <Link to="/components">Components</Link>
                <SubMenu>
                  <SubMenuItem>
                    <Link to="/components/layout">Layout</Link>
                  </SubMenuItem>
                  <SubMenuItem>
                    <Link to="/components/layout">Layout</Link>
                  </SubMenuItem>
                  <SubMenuItem>
                    <Link to="/components/layout">Layout</Link>
                  </SubMenuItem>
                </SubMenu>
              </MenuItem>
              <Button>Sign Up</Button>
            </Menu>
          </Hidden>
          <Hidden hide={769}>
            <MobileMenuToggle
              open={mobileMenuOpen}
              toggleFunction={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
            <MobileMenu open={mobileMenuOpen}>
              <MobileMenuItem>
                <a href="/">Home</a>
              </MobileMenuItem>
              <MobileMenuItem submenu>
                Components
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
          </Hidden>
        </Header>

        {component ? (
          <>
            <br />
            <br />
            <Row spacing={[12]} breakpoints={[576, 850, 1200]}>
              <Column widths={[4, 3, 2]} style={{ position: 'sticky', top: 0 }}>
                <div
                  style={{
                    borderRight: `1px solid ${theme.color.gray.two}`,
                    height: '100%',
                    position: 'sticky',
                    left: 0,
                    width: '100%',
                    top: 0,
                    boxShadow: 'none',
                    padding: '32px 16px',
                  }}
                >
                  <H6 className="">Getting Started</H6>
                  <Link
                    className="no-styling"
                    customStyles={`
                      color: inherit;
                      display: block;
                      font-size: 15px;
                      padding: 12px 16px;
                      width: calc(100% + 32px);
                      left: -16px;
                      position: relative;
                      background: white;
                    `}
                    to="/components/container"
                  >
                    Quick Start
                  </Link>
                  <Link
                    className="no-styling"
                    customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          left: -16px;
                          position: relative;
                          width: calc(100% + 32px);
                          background: white;
                        :hover {
                          background: ${theme.color.primary}10;
                        }
                      `}
                    to="/components/container"
                  >
                    Theming
                  </Link>
                  <Collapse
                    startOpen={
                      pathnameIncludes('section') ||
                      pathnameIncludes('container') ||
                      pathnameIncludes('grid') ||
                      pathnameIncludes('flex') ||
                      pathnameIncludes('hidden') ||
                      pathnameIncludes('header')
                    }
                    customStyles={`
                      border: none;
                      border-top: 1px solid ${theme.color.gray.two};
                      width: calc(100% + 32px);
                      left: -16px;
                      padding: 0px 16px;
                      position: relative;
                    `}
                    titleStyles={`
                      padding: 10px 16px;
                      width: calc(100% + 32px);
                      left: -16px;
                      position: relative;
                    `}
                    bodyStyles={`
                      width: calc(100% + 32px);
                      left: -16px;
                      position: relative;
                    `}
                  >
                    <div>
                      <H6 className="">Layout</H6>
                    </div>
                    <div>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('section')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('section')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('section')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('section')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/section"
                      >
                        Section
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('container')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('container')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('container')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('container')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/container"
                      >
                        Container
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('grid')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('grid')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('grid')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('grid')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/grid"
                      >
                        Grid
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('flex')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('flex')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('flex')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('flex')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/flex"
                      >
                        Flex
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('hidden')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('hidden')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('hidden')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('hidden')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/hidden"
                      >
                        Hidden
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('header')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('header')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('header')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('header')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/header"
                      >
                        Header
                      </Link>
                    </div>
                  </Collapse>
                  <Collapse
                    startOpen={
                      pathnameIncludes('/menu') ||
                      pathnameIncludes('mobile-menu') ||
                      pathnameIncludes('dropdown') ||
                      pathnameIncludes('tabs')
                    }
                    customStyles={`
                      border: none;
                      border-top: 1px solid ${theme.color.gray.two};
                      width: calc(100% + 32px);
                      left: -16px;
                      padding: 0px 16px;
                      position: relative;
                    `}
                    titleStyles={`
                      padding: 10px 16px;
                      width: calc(100% + 32px);
                      left: -16px;
                      position: relative;
                    `}
                    bodyStyles={`
                      width: calc(100% + 32px);
                      left: -16px;
                      position: relative;
                    `}
                  >
                    <div>
                      <H6 className="">Navigation</H6>
                    </div>
                    <div>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('/menu')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('/menu')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('/menu')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('/menu')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/menu"
                      >
                        Menu
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('mobile-menu')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('mobile-menu')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('mobile-menu')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('mobile-menu')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/mobile-menu"
                      >
                        Mobile Menu
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('dropdown')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('dropdown')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('dropdown')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('dropdown')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/dropdown"
                      >
                        Dropdown
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('tabs')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('tabs')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('tabs')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('tabs')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/tabs"
                      >
                        Tabs
                      </Link>
                    </div>
                  </Collapse>
                  <Collapse
                    startOpen={
                      pathnameIncludes('alert') ||
                      pathnameIncludes('notification') ||
                      pathnameIncludes('badge') ||
                      pathnameIncludes('info') ||
                      pathnameIncludes('typography') ||
                      pathnameIncludes('modal')
                    }
                    customStyles={`
                      border: none;
                      border-top: 1px solid ${theme.color.gray.two};
                      width: calc(100% + 32px);
                      left: -16px;
                      padding: 0px 16px;
                      position: relative;
                    `}
                    titleStyles={`
                      padding: 10px 16px;
                      width: calc(100% + 32px);
                      left: -16px;
                      position: relative;
                    `}
                    bodyStyles={`
                      width: calc(100% + 32px);
                      left: -16px;
                      position: relative;
                    `}
                  >
                    <div>
                      <H6 className="">Display</H6>
                    </div>
                    <div>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('alert')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('alert')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('alert')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('alert')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/alert"
                      >
                        Alert
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('notification')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('notification')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('notification')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('notification')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/notification"
                      >
                        Notification
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('badge')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('badge')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('badge')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('badge')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/badge"
                      >
                        Badge
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('info')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('info')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('info')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('info')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/info"
                      >
                        Info
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('modal')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('modal')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('modal')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('modal')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/modal"
                      >
                        Modal
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('typography')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('typography')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('typography')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('typography')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/typography"
                      >
                        Typography
                      </Link>
                    </div>
                  </Collapse>
                  <Collapse
                    startOpen={
                      pathnameIncludes('button') ||
                      pathnameIncludes('input') ||
                      pathnameIncludes('textarea') ||
                      pathnameIncludes('select') ||
                      pathnameIncludes('checkboxes') ||
                      pathnameIncludes('radio-buttons') ||
                      pathnameIncludes('toggle') ||
                      pathnameIncludes('slider')
                    }
                    customStyles={`
                      border: none;
                      border-top: 1px solid ${theme.color.gray.two};
                      border-bottom: 1px solid ${theme.color.gray.two};
                      width: calc(100% + 32px);
                      left: -16px;
                      padding: 0px 16px;
                      position: relative;
                    `}
                    titleStyles={`
                      padding: 10px 16px;
                      width: calc(100% + 32px);
                      left: -16px;
                      position: relative;
                    `}
                    bodyStyles={`
                      width: calc(100% + 32px);
                      left: -16px;
                      position: relative;
                    `}
                  >
                    <>
                      <H6 className="">Input</H6>
                    </>
                    <>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('button')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('button')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('button')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('button')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/button"
                      >
                        Button
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('input')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('input')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('input')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('input')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/input"
                      >
                        Input
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('textarea')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('textarea')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('textarea')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('textarea')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/textarea"
                      >
                        Text Area
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('select')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('select')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('select')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('select')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/select"
                      >
                        Select
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('checkboxes')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('checkboxes')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('checkboxes')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('checkboxes')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/checkboxes"
                      >
                        Checkboxes
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('radio-buttons')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('radio-buttons')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('radio-buttons')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('radio-buttons')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/radio-buttons"
                      >
                        Radio Buttons
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('toggle')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('toggle')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('toggle')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('toggle')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/toggle"
                      >
                        Toggle
                      </Link>
                      <Link
                        className="no-styling"
                        customStyles={`
                          color: inherit;
                          display: block;
                          font-size: 15px;
                          padding: 12px 16px;
                          background: ${
                            pathnameIncludes('slider')
                              ? theme.color.primary
                              : '#ffffff'
                          }10;
                          color: ${
                            pathnameIncludes('slider')
                              ? theme.color.primary
                              : 'inherit'
                          };
                          :hover {
                            background: ${
                              pathnameIncludes('slider')
                                ? `${theme.color.primary}10`
                                : `${theme.color.primary}10`
                            };
                            color: ${
                              pathnameIncludes('slider')
                                ? theme.color.primary
                                : 'inherit'
                            };
                          }
                        `}
                        to="/components/slider"
                      >
                        Slider
                      </Link>
                    </>
                  </Collapse>
                </div>
              </Column>
              <Column widths={[8, 9, 10]}>{children}</Column>
            </Row>
          </>
        ) : (
          <>{children}</>
        )}
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  color: ${(props) => props.theme.color.text.heading};
`;

export default Layout;
