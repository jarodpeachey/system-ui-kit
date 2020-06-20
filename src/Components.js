import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import styled, { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBolt,
  faDesktop,
  faBars,
  faPuzzlePiece,
  faCog,
  faUser,
  faEnvelope,
  faShapes,
  faHome,
  faDollarSign,
  faTimes,
  faComment,
  faCommentAlt,
  faCheck,
  faTrash,
  faCopy,
  faSearch,
  faBinoculars,
  faPalette,
  faPaintBrush,
  faBrush,
  faChevronRight,
  faChevronLeft,
  faChevronDown,
  faQuoteLeft,
  faBell,
  faFill,
  faFeather,
  faArrowsAltH,
  faAlignLeft,
  faAlignRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from './theme';
import Header from './components/Header';
import Menu from './components/Menu';
import SubMenu from './components/SubMenu';
import MenuItem from './components/MenuItem';
import SubMenuItem from './components/SubMenuItem';
import MobileMenu from './components/MobileMenu';
import MobileSubMenu from './components/MobileSubMenu';
import MobileMenuItem from './components/MobileMenuItem';
import MobileSubMenuItem from './components/MobileSubMenuItem';
import Hero from './components/Hero';
import Section from './components/Section';
import Button from './components/Button';
import OutlinedButton from './components/OutlinedButton';
import IconButton from './components/IconButton';
import OutlinedIconButton from './components/OutlinedIconButton';
import Input from './components/Input';
import OutlinedInput from './components/OutlinedInput';
import Checkbox from './components/Checkbox';
import Row from './components/Row';
import RadioButtons from './components/RadioButtons';
import RadioButton from './components/RadioButton';
import Toggle from './components/Toggle';
import Select from './components/Select';
import Option from './components/Option';
import H1 from './components/H1';
import H2 from './components/H2';
import H3 from './components/H3';
import H4 from './components/H4';
import H5 from './components/H5';
import H6 from './components/H6';
import Alert from './components/Alert';
import Badge from './components/Badge';
import Mobile from './components/Mobile';
import Tablet from './components/Tablet';
import Info from './components/Info';
import { Link } from '@reach/router';
import Container from './components/Container';
import Hidden from './components/Hidden';

library.add(
  faBars,
  faBolt,
  faDesktop,
  faPuzzlePiece,
  faCog,
  faEnvelope,
  faUser,
  faShapes,
  faHome,
  faDollarSign,
  faTimes,
  faComment,
  faCommentAlt,
  faCheck,
  faTrash,
  faCopy,
  faSearch,
  faBinoculars,
  faPalette,
  faBrush,
  faPaintBrush,
  faChevronDown,
  faChevronRight,
  faChevronLeft,
  faQuoteLeft,
  faBars,
  faBell,
  faFill,
  faFeather,
  faArrowsAltH,
  faAlignLeft,
  faAlignRight,
);

const Components = ({}) => (
  <ThemeProvider theme={theme}>
    {/* <Header primary>
        <h1 style={{ margin: '0' }}>Primary Header</h1>
        <Menu>
          <MenuItem>
            <a href='/'>Home</a>
          </MenuItem>
          <MenuItem submenu>
            <a href='/'>About</a>
            <SubMenu>
              <SubMenuItem>
                <a href='/'>More</a>
              </SubMenuItem>
              <SubMenuItem>
                <a href='/'>Team</a>
              </SubMenuItem>
            </SubMenu>
          </MenuItem>
        </Menu>
      </Header>
      <Header secondary>
        <h1 style={{ margin: '0' }}>Secondary Header</h1>
        <Menu>
          <MenuItem>
            <a href='/'>Home</a>
          </MenuItem>
          <MenuItem submenu>
            <a href='/'>About</a>
            <SubMenu>
              <SubMenuItem>
                <a href='/'>More</a>
              </SubMenuItem>
              <SubMenuItem>
                <a href='/'>Team</a>
              </SubMenuItem>
            </SubMenu>
          </MenuItem>
        </Menu>
      </Header> */}
    <Header fixed color="transparent">
      <h1 style={{ margin: '0' }}>Website</h1>
      <Mobile>
        <MobileMenu>
          <MobileMenuItem>
            <a href="/">Home</a>
          </MobileMenuItem>
          <MobileMenuItem submenu>
            <a href="/">About</a>
            <MobileSubMenu>
              <MobileSubMenuItem>
                <a href="/">More</a>
              </MobileSubMenuItem>
              <MobileSubMenuItem>
                <a href="/">Team</a>
              </MobileSubMenuItem>
            </MobileSubMenu>
          </MobileMenuItem>
        </MobileMenu>
      </Mobile>
      <Tablet>
        <Menu>
          <MenuItem>
            <a href="/">Home</a>
          </MenuItem>
          <MenuItem submenu>
            <Link to="components">Components</Link>
            <SubMenu>
              <SubMenuItem>
                <Link to="components">Layout</Link>
              </SubMenuItem>
              <SubMenuItem>
                <Link to="components">Elements</Link>
              </SubMenuItem>
            </SubMenu>
          </MenuItem>
          <MenuItem square>
            <a href="/">
              <FontAwesomeIcon
                icon="user"
                style={{ width: 20, height: 20, fontSize: 24 }}
              />
            </a>
          </MenuItem>
        </Menu>
      </Tablet>
    </Header>
    <Hero
      background={`linear-gradient(
        to right,
        ${theme.color.primary.main},
        ${theme.color.secondary.main}
      )`}
    >
      <h1 style={{ color: '#ffffff', fontSize: 48 }}>
        The Website For The Future
      </h1>
      <h3 style={{ color: '#ffffff90' }}>
        A modern website that kicks the other websites into the street.
      </h3>
      <Button color="secondary">Learn More</Button>
      <Button variant="outlined" color="white">
        Click Me
      </Button>
    </Hero>
    <Section>
      <Container>
        <H2 className="m-none">Layout</H2>
        <p>
          Layout components make it easy to create a responsive and modern
          foundation for your site.
        </p>
        <H3>Grid</H3>
        <Row breakpoints={[769]} spacing={[8]}>
          <div widths={[1]}>
            <Demo>1</Demo>
          </div>
          <div widths={[11]}>
            <Demo>11</Demo>
          </div>
          <div widths={[2]}>
            <Demo>2</Demo>
          </div>
          <div widths={[10]}>
            <Demo>10</Demo>
          </div>
          <div widths={[3]}>
            <Demo>3</Demo>
          </div>
          <div widths={[9]}>
            <Demo>9</Demo>
          </div>
          <div widths={[4]}>
            <Demo>4</Demo>
          </div>
          <div widths={[8]}>
            <Demo>8</Demo>
          </div>
          <div widths={[5]}>
            <Demo>5</Demo>
          </div>
          <div widths={[7]}>
            <Demo>7</Demo>
          </div>
          <div widths={[6]}>
            <Demo>6</Demo>
          </div>
          <div widths={[6]}>
            <Demo>6</Demo>
          </div>
          <div widths={[7]}>
            <Demo>7</Demo>
          </div>
          <div widths={[5]}>
            <Demo>5</Demo>
          </div>
          <div widths={[8]}>
            <Demo>8</Demo>
          </div>
          <div widths={[4]}>
            <Demo>4</Demo>
          </div>
          <div widths={[9]}>
            <Demo>9</Demo>
          </div>
          <div widths={[3]}>
            <Demo>3</Demo>
          </div>
          <div widths={[10]}>
            <Demo>10</Demo>
          </div>
          <div widths={[2]}>
            <Demo>2</Demo>
          </div>
          <div widths={[11]}>
            <Demo>11</Demo>
          </div>
          <div widths={[1]}>
            <Demo>1</Demo>
          </div>
        </Row>
      </Container>
      <Container>
        <h3>Container</h3>
      </Container>
      <Container>
        <p>This is a container. It, uh, contains the content.</p>
      </Container>
      <Container>
        <H3>Hidden</H3>
        <Hidden show={769}>Hidden below 769</Hidden>
        <Hidden hide={769}>Hidden above 768</Hidden>
      </Container>
    </Section>
  </ThemeProvider>
);

const Demo = styled.div`
  width: 100%;
  padding: 16px;
  text-align: center;
  border-radius: 3px;
  color: white !important;
  * {
    color: white !important;
  }
  background: ${(props) => props.theme.color.primary.main};
`;

export default Components;
