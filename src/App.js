import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { ThemeProvider } from 'styled-components';
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
  faExclamationCircle,
  faStar,
  faGlobe,
  faQuestionCircle,
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
import Badge from './components/Chip';
import Code from './components/Code';
import Mobile from './components/Mobile';
import Tablet from './components/Tablet';
import Info from './components/Info';
import { Link } from '@reach/router';
import Container from './components/Container';

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
  faExclamationCircle,
  faGlobe,
  faQuestionCircle,
);

const App = ({}) => (
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
      <title>System - React UI Kit</title>
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
      <h1 style={{ color: '#ffffff', fontSize: 48, textAlign: 'center' }}>
        React Development Made Easy
      </h1>
      <h3 style={{ color: '#ffffff90', textAlign: 'center' }}>
        A modern UI Kit built to speed up your development proccess, while still
        allowing you room to customize and grow.
      </h3>
    </Hero>
    <Section spacing="small">
      <Container>
        <Alert
          color="success"
          variant="light"
          icon={<FontAwesomeIcon icon="question-circle" />}
          style={{ maxWidth: 780, margin: '0 auto' }}
        >
          <strong>Did you know?</strong> This website is built completely with
          System. Not a shred of custom CSS!
        </Alert>
      </Container>
    </Section>
    <Section className="pt-none" spacing="large">
      <Container>
        <H5 className="center mt-none">Built For You</H5>
        <H2 className="center mt-3">What is System?</H2>
        <p className="center" style={{ maxWidth: 780 }}>
          System is a UI Kit like none other. It's dead-simple to get up and
          running, and offers advanced customization that's than most other UI
          kits.
        </p>
        <p className="center" style={{ maxWidth: 780 }}>
          I'm building System because, as a developer, I sometimes get stuck
          with creating a cohesive, well designed website. With System, I'm
          solving this problem for other developers. Because System uses simple
          components with even simpler cusomization, you can focus on the
          development of your product rather than the website design.
        </p>
      </Container>
    </Section>
    <Section background={`${theme.color.error}10`}>
      <Container>
        <H3 className="mt-none" customStyles={`color: ${theme.color.error};`}>
          <FontAwesomeIcon
            icon="exclamation-circle"
            style={{ marginRight: 10 }}
          />
          Construction Notice
        </H3>
        <p className="mb-5" style={{ color: theme.color.error }}>
          System UI Kit is still in development, but feel free to browse the
          site and look at the components I've already completed!
        </p>
        <Button link="/components" color="error">
          See Components
        </Button>
      </Container>
    </Section>
    <Section spacing="large">
      <Container>
        <H5 className="mt-none">The Benefits</H5>
        <H2 className="mt-3 mb-7">Simplicity and Ease</H2>
        <Row spacing={[24, 12]} breakpoints={[769, 960]}>
          <div widths={[6, 4]}>
            <Info
              color="primary"
              title="Simple Naming"
              icon={<FontAwesomeIcon icon="feather" />}
            >
              <p>
                System uses simple naming conventions for the components and
                their props. Plus, System uses as little props as possible,
                making it easier for you to start developing.
              </p>
            </Info>
          </div>
          <div widths={[6, 4]}>
            <Info
              color="primary"
              title="Highly Customizable"
              icon={<FontAwesomeIcon icon="cog" />}
            >
              <p>
                If the props System comes with aren't enough, each and every
                component supports custom styling using{' '}
                <Code>styled-components</Code>. Simply pass in a customStyles
                prop and you can customize hover state, media queries and more.
              </p>
            </Info>
          </div>
          <div widths={[6, 4]}>
            <Info
              color="primary"
              title="Global Theming"
              icon={<FontAwesomeIcon icon="globe" />}
            >
              <p>
                System allows you to add custom styles to each component on a
                global scale, allowing you to integrate System seamlessly into
                your brand. Plus, you can override these global styles whenever
                you need 🔥
              </p>
            </Info>
          </div>
        </Row>
      </Container>
    </Section>
  </ThemeProvider>
);

export default App;
