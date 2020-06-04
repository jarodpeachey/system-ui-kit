import React from 'react';
import { ThemeProvider } from 'styled-components';
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
} from '@fortawesome/free-solid-svg-icons';
import { theme } from './theme';
import Header from './components/Header';
import FixedHeader from './components/FixedHeader';
import Menu from './components/Menu';
import SubMenu from './components/SubMenu';
import MenuItem from './components/MenuItem';
import SubMenuItem from './components/SubMenuItem';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RadioButtons from './components/RadioButtons';
import RadioButton from './components/RadioButton';

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
  faQuoteLeft
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
    <FixedHeader transparent>
      <h1 style={{ margin: '0' }}>Website</h1>
      <Menu>
        <MenuItem>
          <a href="/">Home</a>
        </MenuItem>
        <MenuItem submenu>
          <a href="/">About</a>
          <SubMenu>
            <SubMenuItem>
              <a href="/">More</a>
            </SubMenuItem>
            <SubMenuItem>
              <a href="/">Team</a>
            </SubMenuItem>
          </SubMenu>
        </MenuItem>
      </Menu>
    </FixedHeader>
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
      <Button color="white">Learn More</Button>
      <OutlinedButton color="white">Click Me</OutlinedButton>
    </Hero>
    {/* <Section center>
      <h2 className="m-none">Components</h2>
      <p>This one is a section, btw.</p>
      <h3>Buttons</h3>
      <h5>Colors</h5>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="error">Error</Button>
      <h5 style={{ marginBottom: 8 }}>Variants</h5>
      <Button color="primary">Filled</Button>
      <Button variant="rounded" color="primary">
        Rounded
      </Button>
      <OutlinedButton color="primary" variant="outlined">
        Outlined
      </OutlinedButton>
      <div
        style={{
          display: 'inline-block',
          position: 'relative',
          top: 6,
        }}
      >
        <IconButton variant="rounded" color="primary">
          <FontAwesomeIcon icon="dollar-sign" />
        </IconButton>
      </div>
      <h3>Buttons</h3>
      <h5>Colors</h5> */}
    {/* </Section> */}
    <Section>
      <h2>Basic Components</h2>
      <h3>Buttons</h3>
      <h5>Sizes</h5>
      <Button color="primary" size="small">
        Small
      </Button>
      <Button color="primary">Default</Button>
      <Button color="primary" size="large">
        Large
      </Button>
      <h5>Colors</h5>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="error">Error</Button>
      <h5 style={{ marginBottom: 8 }}>Variants</h5>
      <Button color="primary">Filled</Button>
      <Button variant="rounded" color="primary">
        Rounded
      </Button>
      <OutlinedButton color="primary">Outlined</OutlinedButton>
      <div
        style={{
          display: 'inline-block',
          position: 'relative',
          top: 6,
        }}
      >
        <IconButton variant="rounded" color="primary">
          <FontAwesomeIcon icon="dollar-sign" />
        </IconButton>
      </div>
      <h3>Inputs</h3>
      <h5>Sizes</h5>
      <Input size="small" placeholder="Small" />
      <Input placeholder="Default" />
      <Input size="large" placeholder="Large" />
      <h5>Variants</h5>
      <Input placeholder="Default" />
      <Input variant="filled" placeholder="Filled" />
      <Row breakpoints={[769]} spacing={[24]}>
        <div widths={['auto']}>
          <h3>Checkboxes</h3>
          <Checkbox>Unchecked</Checkbox>
          <Checkbox
            checked
            onChange={(e) => {
              console.log('Target from parent: ', e.target);
            }}
          >
            Checked
          </Checkbox>
          <Checkbox>Random Checkbox</Checkbox>
          <Checkbox disabled>Disabled</Checkbox>
        </div>
        <div widths={['auto']}>
          <h3>Radio Buttons</h3>
          <RadioButtons name="test">
            <RadioButton>One</RadioButton>
            <RadioButton>Two</RadioButton>
          </RadioButtons>
        </div>
      </Row>
    </Section>
  </ThemeProvider>
);

export default App;
