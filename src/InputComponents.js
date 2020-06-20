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
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#ffffff', fontSize: 48, margin: 0 }}>
          Input Components
        </h1>
      </div>
    </Hero>
    <Section>
      <Container>
        <H3>Button</H3>
        <p>Sizes</p>
        <Button color="primary" size="small">
          Small
        </Button>
        <Button color="primary">Default</Button>
        <Button color="primary" size="large">
          Large
        </Button>
        <p>Colors</p>
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="error">Error</Button>
        <p style={{ marginBottom: 8 }}>Variants</p>
        <Button color="primary">Filled</Button>
        <Button color="primary" variant="outlined">
          Outlined
        </Button>
        <Button variant="plain">Plain</Button>
        <br />
        <br />
        <br />
      </Container>
    </Section>
    <Section background="#f7f7f7">
      <Container>
        <H3 className="mt-none">Icon Button</H3>
        <div
          style={{
            display: 'inline-block',
            position: 'relative',
            top: 6,
          }}
        >
          <IconButton color="primary">
            <FontAwesomeIcon icon="dollar-sign" />
          </IconButton>
        </div>
      </Container>
    </Section>
    <Section>
      <Container>
        <H3>Text Fields</H3>
        <Row spacing={[12]} breakpoints={[576, 769]}>
          <div widths={[6, 3]}>
            <Input fullWidth placeholder="Default" />
          </div>
          <div widths={[6, 3]}>
            <Input fullWidth state="success" placeholder="Success" />
          </div>
          <div widths={[6, 3]}>
            <Input fullWidth state="error" placeholder="Error" />
          </div>
          <div widths={[6, 3]}>
            <Input
              fullWidth
              icon={<FontAwesomeIcon icon="user" />}
              placeholder="With icon"
            />
          </div>
        </Row>
        <p className="mb-none">Styles</p>
        <Row spacing={[12]} breakpoints={[576, 769]}>
          <div widths={[6, 3]} alignBottom>
            <Input fullWidth placeholder="Default" />
          </div>
          <div widths={[6, 3]} alignBottom>
            <Input fullWidth variant="filled" placeholder="Filled" />
          </div>
          <div widths={[6, 3]} alignBottom>
            <Input fullWidth label="With label" placeholder="With label" />
          </div>
        </Row>
        <Row breakpoints={[476, 960]} spacing={[24]}>
          <div widths={[6, 4]}>
            <h3>Checkboxes</h3>
            <Checkbox value="unchecked">Unchecked</Checkbox>
            <Checkbox
              value="checked"
              checked
              onChange={(e) => {
                console.log('Target from parent: ', e.target);
              }}
            >
              Checked
            </Checkbox>
            <Checkbox value="random">Random Checkbox</Checkbox>
            <Checkbox value="disabled" disabled>
              Disabled
            </Checkbox>
          </div>
          <div widths={[6, 4]}>
            <h3>Radio Buttons</h3>
            {/* <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              const x = document.querySelector('form.form').elements;
              console.log(x);

              Object.values(x).forEach((item) => console.log(item.checked));
            }}
          > */}
            <RadioButtons onChange={(e) => console.log(e)} name="radio-buttons">
              <RadioButton value="one">Radio button</RadioButton>
              <RadioButton value="two">Another radio button</RadioButton>
              <RadioButton disabled value="three">
                Disabled. Go ahead, try and click me 😉
              </RadioButton>
            </RadioButtons>
            {/* <button type="submit">Submit</button>
          </form> */}
          </div>
          <div widths={[6, 4]}>
            <h3 color="primary">Toggle Switches</h3>
            <p className="mb-none">Variants</p>
            <Toggle>Default</Toggle>
            <Toggle variant="filled">Filled</Toggle>
            <p className="mb-none">Sizes</p>
            <Toggle size="small">Small</Toggle>
            <Toggle>Normal</Toggle>
          </div>
          <div widths={[6, 4]}>
            <h3>Selects</h3>
            <Select>
              <Option value="one">One</Option>
              <Option value="two">Two</Option>
              <Option value="three">Three</Option>
            </Select>
          </div>
        </Row>
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
