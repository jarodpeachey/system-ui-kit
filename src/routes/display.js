import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import styled, { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Helmet } from 'react-helmet';
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
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from '../theme';
import Header from '../components/Header';
import Menu from '../components/Menu';
import SubMenu from '../components/SubMenu';
import MenuItem from '../components/MenuItem';
import SubMenuItem from '../components/SubMenuItem';
import MobileMenu from '../components/MobileMenu';
import MobileSubMenu from '../components/MobileSubMenu';
import MobileMenuItem from '../components/MobileMenuItem';
import MobileSubMenuItem from '../components/MobileSubMenuItem';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Button from '../components/Button';
import OutlinedButton from '../components/OutlinedButton';
import IconButton from '../components/IconButton';
import OutlinedIconButton from '../components/OutlinedIconButton';
import Input from '../components/Input';
import OutlinedInput from '../components/OutlinedInput';
import Checkbox from '../components/Checkbox';
import Row from '../components/Row';
import RadioButtons from '../components/RadioButtons';
import RadioButton from '../components/RadioButton';
import Toggle from '../components/Toggle';
import Select from '../components/Select';
import Option from '../components/Option';
import H1 from '../components/H1';
import H2 from '../components/H2';
import H3 from '../components/H3';
import H4 from '../components/H4';
import H5 from '../components/H5';
import H6 from '../components/H6';
import Alert from '../components/Alert';
import Badge from '../components/Chip';
import Chip from '../components/Chip';
import Mobile from '../components/Mobile';
import Tablet from '../components/Tablet';
import Info from '../components/Info';
import { Link } from '@reach/router';
import Container from '../components/Container';
import Hidden from '../components/Hidden';
import Notification from '../components/Notification';

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
  faHeart,
);

const Display = ({}) => {
  const [showNotificationOne, setShowNotificationOne] = useState(false);
  const [showNotificationTwo, setShowNotificationTwo] = useState(false);
  const [showNotificationThree, setShowNotificationThree] = useState(false);
  const [showNotificationFour, setShowNotificationFour] = useState(false);
  const [showNotificationFive, setShowNotificationFive] = useState(false);

  return (
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
      <Helmet>
        <title>Display Components - System UI Kit</title>
      </Helmet>
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
                {/* <MobileSubMenuItem>
                  <Link to="/layout">Layout</Link>
                </MobileSubMenuItem> */}
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
          <Menu>
            <MenuItem>
              <a href="/">Home</a>
            </MenuItem>
            <MenuItem submenu>
              <Link to="/components">Components</Link>
              <SubMenu>
                {/* <SubMenuItem>
                  <Link to="/layout">Layout</Link>
                </SubMenuItem> */}
                <SubMenuItem>
                  <Link to="/components/inputs">Inputs</Link>
                </SubMenuItem>
                <SubMenuItem>
                  <Link to="/components/display">Display</Link>
                </SubMenuItem>
              </SubMenu>
            </MenuItem>
            <MenuItem square>
              <a href="/">
                <FontAwesomeIcon
                  icon="heart"
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
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#ffffff', fontSize: 48, margin: 0 }}>
            Display Components
          </h1>
          <p style={{ color: '#ffffffaa' }}>
            Display components allow you to display information to a user in a
            prominent location.
          </p>
        </div>
      </Hero>
      <Section spacing="small">
        <Container>
          <H2 className="m-none">Alert</H2>
          <H4 className="mb-none">Variant</H4>
          <p className="mb-6">
            The variant prop is used to change the appearance of an alert.
          </p>
          <Alert color="primary">Default</Alert>
          <Alert color="primary" variant="light">
            Light
          </Alert>
          <Alert
            icon={<FontAwesomeIcon icon="bell" />}
            color="primary"
            variant="light"
          >
            With icon
          </Alert>
          <br />
          <br />
          {/* <H4 className="mb-none">Size</H4>
        <p className="mt-2">
          The size prop is used to change the size of a button.
        </p>
        <Button
          className="mr-2" color="primary" size="large">
          Large
        </Button>
        <Button
          className="mr-2" color="primary">Default</Button>
        <Button
          className="mr-2" color="primary" size="small">
          Small
        </Button>
        <br />
        <br /> */}
          <H4 className="mb-none">Color</H4>
          <p p className="mb-6">
            The color prop is used to change the color of an alert.
          </p>
          <Row spacing={[14, 0]} breakpoints={[769]}>
            <div widths={[6]}>
              <Alert>Default</Alert>
              <Alert variant="light">Default</Alert>
            </div>
            <div widths={[6]}>
              <Alert color="primary">Primary</Alert>
              <Alert color="primary" variant="light">
                Primary
              </Alert>
            </div>
            <div widths={[6]}>
              <Alert color="secondary">Secondary</Alert>
              <Alert color="secondary" variant="light">
                Secondary
              </Alert>
            </div>
            <div widths={[6]}>
              <Alert color="success">Success</Alert>
              <Alert color="success" variant="light">
                Success
              </Alert>
            </div>
            <div widths={[6]}>
              <Alert color="error">Error</Alert>
              <Alert color="error" variant="light">
                Error
              </Alert>
            </div>
          </Row>
        </Container>
      </Section>
      <Section spacing="small">
        <Container>
          <H2 className="m-none">Notification</H2>
          <p className="mb-6">
            The Notification element allows you to display a notification that
            disappears after a certain amount of time.
          </p>
          <Button
            className="mr-2"
            onClick={() => {
              setShowNotificationOne(true);
              setTimeout(() => {
                setShowNotificationOne(false);
              }, 2500);
            }}
          >
            Open
          </Button>
          <Button
            className="mr-2"
            color="primary"
            variant="outlined"
            onClick={() => {
              setShowNotificationTwo(true);
              setTimeout(() => {
                setShowNotificationTwo(false);
              }, 2500);
            }}
          >
            Open Primary
          </Button>
          <Button
            className="mr-2"
            color="secondary"
            variant="outlined"
            onClick={() => {
              setShowNotificationThree(true);
              setTimeout(() => {
                setShowNotificationThree(false);
              }, 2500);
            }}
          >
            Open Secondary
          </Button>
          <Button
            className="mr-2"
            color="success"
            variant="outlined"
            onClick={() => {
              setShowNotificationFour(true);
              setTimeout(() => {
                setShowNotificationFour(false);
              }, 2500);
            }}
          >
            Open Success
          </Button>
          <Button
            className="mr-2"
            color="error"
            variant="outlined"
            onClick={() => {
              setShowNotificationFive(true);
              setTimeout(() => {
                setShowNotificationFive(false);
              }, 2500);
            }}
          >
            Open Error
          </Button>
          {showNotificationOne && <Notification>A notification</Notification>}
          {showNotificationTwo && (
            <Notification color="primary">
              A notification, in the primary color.
            </Notification>
          )}
          {showNotificationThree && (
            <Notification color="secondary">Some information</Notification>
          )}
          {showNotificationFour && (
            <Notification color="success">Yay! You did it!</Notification>
          )}
          {showNotificationFive && (
            <Notification color="error">Something went wrong.</Notification>
          )}
        </Container>
      </Section>
      <Section spacing="small">
        <Container>
          <H2 className="m-none">Chip</H2>
          <Chip>Default</Chip>
          <Chip color="primary">Primary</Chip>
          <Chip color="secondary">Secondary</Chip>
          <Chip color="success">Success</Chip>
          <Chip color="error">Error</Chip>
        </Container>
      </Section>
    </ThemeProvider>
  );
};

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

export default Display;
