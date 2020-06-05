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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import RadioButtons from './components/RadioButtons';
import RadioButton from './components/RadioButton';
import Toggle from './components/Toggle';
import Select from './components/Select';
import Option from './components/Option';

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
      <Row spacing={[12]} breakpoints={[576, 769]}>
        <div widths={[6, 3]}>
          <Input fullWidth size="small" placeholder="Small" />
        </div>
        <div widths={[6, 3]}>
          <Input fullWidth placeholder="Default" />
        </div>
        <div widths={[6, 3]}>
          <Input fullWidth size="large" placeholder="Large" />
        </div>
      </Row>
      <h5>Variants</h5>
      <Row spacing={[12]} breakpoints={[576, 769]}>
        <div widths={[6, 3]}>
          <Input fullWidth placeholder="Default" />
        </div>
        <div widths={[6, 3]}>
          <Input fullWidth variant="filled" placeholder="Filled" />
        </div>
        <div widths={[6, 3]}>
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
          <Toggle
            onChange={(e) => {
              console.log(e);
            }}
            checked
          >
            Checked
          </Toggle>
          <Toggle>Unchecked</Toggle>
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
      asteljkbr
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Section>
  </ThemeProvider>
);

export default App;
