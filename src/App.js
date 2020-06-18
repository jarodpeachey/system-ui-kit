import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
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
    <Header fixed color="primary">
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
    <Section className="pb-none">
      <H2 className="m-none">Basic Components</H2>
      <p>
        System comes with hundreds of elements. Here are a few of the most
        important.
      </p>
      {/* 
      <H3>
        <FontAwesomeIcon
          icon="bars"
          style={{
            position: 'relative',
            top: 0,
            fontSize: 28,
            marginRight: 6,
          }}
        />{' '}
        Typography
      </H3>
      <H1>This is an h1</H1>
      <H2>This is an h2</H2>
      <H3>This is an h3</H3>
      <H4>This is an h4</H4>
      <H5>This is an h5</H5>
      <H6>YThis is an h6</H6> */}
      <H3>Buttons</H3>
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
      <br />
      <br />
      <br />
      <H3>Inputs</H3>
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
      <br />
      <br />
      <br />
      <H3>Alerts</H3>
      <p className="mb-none">Colors</p>
      {/* <Row spacing={[12]} breakpoints={[960]}>
        <div widths={[6]}> */}
      <Alert>This is a primary alert. It tells you something.</Alert>
      {/* </div>
        <div widths={[6]}> */}
      <Alert color="secondary">
        This is a secondary alert. It tells you something else.
      </Alert>
      {/* </div>
        <div widths={[6]}> */}
      <Alert color="success">
        This is a success alert. It means you did something right.
      </Alert>
      {/* </div>
        <div widths={[6]}> */}
      <Alert color="error">
        This is an error alert. Something went wrong if you see this.
      </Alert>
      {/* </div>
      </Row> */}
      <p className="mb-none">Variants</p>
      {/* <Row spacing={[12]} breakpoints={[960]}>
        <div widths={[6]}> */}
      {/* </div>
        <div widths={[6]}> */}
      <Alert variant="light">This is an alert. It's the default style.</Alert>
      <Alert icon={<FontAwesomeIcon icon="bell" />}>
        This one has an icon to indicate something.
      </Alert>
      {/* </div>
      </Row> */}
      <br />
      <br />
      <br />
      <h3>Badges</h3>
      <Badge>Default</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="error">Error</Badge>
      <br />
      <br />
      <br />
      <H3>Headers</H3>
    </Section>
    <Header color="primary">
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
    <Header color="secondary">
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
    <Header color="white">
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
    <br />
    <br />
    <br />
    <Section className="pt-none">
      <h3>Information Boxes</h3>
      <p className="mb-none">Variants</p>
      <Row spacing={[18]} breakpoints={[769, 960, 9999999]}>
        <div widths={[6, 4, 3]}>
          <Info
            icon={<FontAwesomeIcon style={{ fontSize: 48 }} icon="check" />}
            title="Default/White"
            color="primary"
          >
            <p>
              The info box comes in many different styles and colors. This one
              is a vertical info box with an icon. You can also make the box
              smaller and larger if you'd like.
            </p>
            <p>You've never seen anything like it. Try it out today.</p>
          </Info>
        </div>
        <div widths={[6, 4, 3]}>
          <Info
            icon={<FontAwesomeIcon style={{ fontSize: 48 }} icon="fill" />}
            color="primary"
            title="Filled"
            variant="filled"
          >
            <p>
              The info box comes in many different styles and colors. This one
              is a vertical info box with an icon. You can also make the box
              smaller and larger if you'd like.
            </p>
            <p>You've never seen anything like it. Try it out today.</p>
          </Info>
        </div>
        <div widths={[6, 4, 3]}>
          <Info
            icon={<FontAwesomeIcon style={{ fontSize: 48 }} icon="feather" />}
            color="primary"
            title="Light"
            variant="light"
          >
            <p>
              This info box is horizontal, and is a light variant. It's color is
              the secondary color.
            </p>
            <p>You've never seen anything like it. Try it out today.</p>
          </Info>
        </div>
      </Row>
      <p className="mb-none">Layouts</p>
      <Row spacing={[18]} breakpoints={[769, 960, 9999999]}>
        <div widths={[6, 4, 3]}>
          <Info
            icon={<FontAwesomeIcon style={{ fontSize: 48 }} icon="check" />}
            title="Default"
            color="primary"
            variant="light"
          >
            <p>
              The info box comes in many different styles and colors. This one
              is a vertical info box with an icon. You can also make the box
              smaller and larger if you'd like.
            </p>
            <p>You've never seen anything like it. Try it out today.</p>
          </Info>
        </div>
        <div widths={[6, 4, 3]}>
          <Info
            icon={
              <FontAwesomeIcon style={{ fontSize: 48 }} icon="arrows-alt-h" />
            }
            color="primary"
            title="Horizontal"
            layout="horizontal"
            variant="light"
          >
            <p>
              The info box comes in many different styles and colors. This one
              is a vertical info box with an icon. You can also make the box
              smaller and larger if you'd like.
            </p>
            <p>You've never seen anything like it. Try it out today.</p>
          </Info>
        </div>
        <div widths={[6, 4, 3]}>
          <Info
            icon={<FontAwesomeIcon style={{ fontSize: 48 }} icon="align-left" />}
            color="primary"
            title="Left"
            variant="light"
            align="left"
          >
            <p>
              This info box is horizontal, and is a light variant. It's color is
              the secondary color.
            </p>
            <p>You've never seen anything like it. Try it out today.</p>
          </Info>
        </div>
        <div widths={[6, 4, 3]}>
          <Info
            icon={<FontAwesomeIcon style={{ fontSize: 48 }} icon="align-right" />}
            color="primary"
            title="Right"
            variant="light"
            align="right"
          >
            <p>
              This info box is horizontal, and is a light variant. It's color is
              the secondary color.
            </p>
            <p>You've never seen anything like it. Try it out today.</p>
          </Info>
        </div>
      </Row>
    </Section>
  </ThemeProvider>
);

export default App;
