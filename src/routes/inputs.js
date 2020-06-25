import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Helmet } from 'react-helmet';
import { theme } from '../theme';
import Header from '../components/Header';
import Menu from '../components/Navbar';
import SubMenu from '../components/SubMenu';
import MenuItem from '../components/NavbarItem';
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
import Heading from '../components/Heading';
import { Link } from '@reach/router';
import Container from '../components/Container';
import Hidden from '../components/Hidden';
import Layout from '../Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from '../components/Slider';

const Inputs = ({}) => (
  <Layout>
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
      <title>Input Components - System UI Kit</title>
    </Helmet>
    <Hero
      background={`linear-gradient(
        to right,
        ${theme.color.primary.main},
        ${theme.color.secondary.main}
      )`}
    >
      <div style={{ textAlign: 'center' }}>
        <Heading type="h1" background="dark" className="m-none">
          Input Components
        </Heading>
      </div>
    </Hero>
    <Section>
      <Container>
        <Heading type="h2">Button</Heading>
        <Heading type="h4" className="mb-none">
          Variant
        </Heading>
        <p className="mt-2">
          The variant prop is used to change the appearance of a button.
        </p>
        <Button className="mr-2 mb-2" color="primary">
          Filled
        </Button>
        <Button className="mr-2 mb-2" color="primary" variant="outlined">
          Outlined
        </Button>
        <Button className="mr-2 mb-2" variant="plain" color="primary">
          Plain
        </Button>
        <br />
        <br />
        <Heading type="h4" className="mb-none">
          Size
        </Heading>
        <p className="mt-2">
          The size prop is used to change the size of a button.
        </p>
        <Button className="mr-2 mb-2" color="primary" size="large">
          Large
        </Button>
        <Button className="mr-2 mb-2" color="primary">
          Default
        </Button>
        <Button className="mr-2 mb-2" color="primary" size="small">
          Small
        </Button>
        <br />
        <br />
        <Heading type="h4" className="mb-none">
          Color
        </Heading>
        <p className="mt-2">
          The color prop is used to change the color of a button.
        </p>
        <Button className="mr-2 mb-2">Default</Button>
        <Button className="mr-2 mb-2" color="primary">
          Primary
        </Button>
        <Button className="mr-2 mb-2" color="secondary">
          Secondary
        </Button>
        <Button className="mr-2 mb-2" color="success">
          Success
        </Button>
        <Button className="mr-2 mb-2" color="error">
          Error
        </Button>
        <div />
        <Button className="mr-2 mb-2" variant="outlined">
          Default
        </Button>
        <Button className="mr-2 mb-2" variant="outlined" color="primary">
          Primary
        </Button>
        <Button className="mr-2 mb-2" variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button className="mr-2 mb-2" variant="outlined" color="success">
          Success
        </Button>
        <Button className="mr-2 mb-2" variant="outlined" color="error">
          Error
        </Button>
        <div />
        <Button className="mr-2 mb-2" variant="plain">
          Default
        </Button>
        <Button className="mr-2 mb-2" variant="plain" color="primary">
          Primary
        </Button>
        <Button className="mr-2 mb-2" variant="plain" color="secondary">
          Secondary
        </Button>
        <Button className="mr-2 mb-2" variant="plain" color="success">
          Success
        </Button>
        <Button className="mr-2 mb-2" variant="plain" color="error">
          Error
        </Button>
        <div
          style={{
            background: '#333',
            padding: 16,
            marginTop: 16,
            borderRadius: 3,
          }}
        >
          <Button className="mr-2 mb-2" color="white">
            White
          </Button>
          <Button className="mr-2 mb-2" color="primary">
            Primary
          </Button>
          <Button className="mr-2 mb-2" color="secondary">
            Secondary
          </Button>
          <Button className="mr-2 mb-2" color="success">
            Success
          </Button>
          <Button className="mr-2 mb-2" color="error">
            Error
          </Button>
          <div />
          <Button className="mr-2 mb-2" variant="outlined" color="white">
            White
          </Button>
          <Button className="mr-2 mb-2" variant="outlined" color="primary">
            Primary
          </Button>
          <Button className="mr-2 mb-2" variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button className="mr-2 mb-2" variant="outlined" color="success">
            Success
          </Button>
          <Button className="mr-2 mb-2" variant="outlined" color="error">
            Error
          </Button>
          <div />
          <Button className="mr-2 mb-2" variant="plain" color="white">
            White
          </Button>
          <Button className="mr-2 mb-2" variant="plain" color="primary">
            Primary
          </Button>
          <Button className="mr-2 mb-2" variant="plain" color="secondary">
            Secondary
          </Button>
          <Button className="mr-2 mb-2" variant="plain" color="success">
            Success
          </Button>
          <Button className="mr-2 mb-2" variant="plain" color="error">
            Error
          </Button>
        </div>
        <br />
        <br />
        <br />
      </Container>
    </Section>
    <Section background={theme.color.gray.one}>
      <Container>
        <Heading type="h2">
          IconButton
        </Heading>
        <p>
          The IconButton element extends all the props from the Button
          component. It also adds a new circle prop.
        </p>
        <IconButton color="primary" size="large">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <IconButton color="primary">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <IconButton color="primary" size="small">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <div />
        <IconButton color="primary" circle variant="filled">
          <FontAwesomeIcon icon="dollar-sign" />
        </IconButton>
        <IconButton color="secondary" circle variant="outlined">
          <FontAwesomeIcon icon="heart" />
        </IconButton>
      </Container>
    </Section>
    <Section>
      <Container>
        <Heading type="h2">Text Field</Heading>
        <Heading type="h4">Size</Heading>
        <Row spacing={[12]} breakpoints={[576, 769]}>
          <div widths={[6, 3]}>
            <Input className="mb-2" size="xs" fullWidth placeholder="X-Small" />
            <div />
            <Input
              className="mb-2"
              size="small"
              fullWidth
              placeholder="Small"
            />
            <div />
            <Input className="mb-2" fullWidth placeholder="Default" />
            <div />
            <Input
              className="mb-2"
              size="large"
              fullWidth
              placeholder="Large"
            />
          </div>
          <div widths={[6, 3]}>
            <Input
              className="mb-2"
              variant="filled"
              size="xs"
              fullWidth
              placeholder="X-Small"
            />
            <div />
            <Input
              className="mb-2"
              variant="filled"
              size="small"
              fullWidth
              placeholder="Small"
            />
            <div />
            <Input
              className="mb-2"
              variant="filled"
              fullWidth
              placeholder="Default"
            />
            <div />
            <Input
              className="mb-2"
              variant="filled"
              size="large"
              fullWidth
              placeholder="Large"
            />
          </div>
          <div widths={[6, 3]}>
            <Input
              className="mb-2"
              size="xs"
              fullWidth
              placeholder="X-Small"
              icon={<FontAwesomeIcon icon="heart" />}
            />
            <div />
            <Input
              className="mb-2"
              size="small"
              fullWidth
              placeholder="Small"
              icon={<FontAwesomeIcon icon="heart" />}
            />
            <div />
            <Input
              className="mb-2"
              fullWidth
              placeholder="Default"
              icon={<FontAwesomeIcon icon="heart" />}
            />
            <div />
            <Input
              className="mb-2"
              size="large"
              fullWidth
              placeholder="Large"
              icon={<FontAwesomeIcon icon="heart" />}
            />
          </div>
        </Row>
        <Heading type="h4">State</Heading>
        <Row spacing={[12]} breakpoints={[576, 769]}>
          <div widths={[6, 3]}>
            <Input className="mb-2" fullWidth placeholder="Default" />
            <div />
            <Input
              className="mb-2"
              fullWidth
              placeholder="Success"
              state="success"
            />
            <div />
            <Input
              className="mb-2"
              fullWidth
              placeholder="Error"
              state="error"
            />
          </div>
          <div widths={[6, 3]}>
            <Input
              className="mb-2"
              variant="filled"
              fullWidth
              placeholder="Default"
            />
            <div />
            <Input
              className="mb-2"
              variant="filled"
              fullWidth
              placeholder="Success"
              state="success"
            />
            <div />
            <Input
              className="mb-2"
              variant="filled"
              fullWidth
              placeholder="Error"
              state="error"
            />
          </div>
          <div widths={[6, 3]}>
            <Input
              className="mb-2"
              icon={<FontAwesomeIcon icon="heart" />}
              fullWidth
              placeholder="Default"
            />
            <div />
            <Input
              className="mb-2"
              icon={<FontAwesomeIcon icon="heart" />}
              fullWidth
              placeholder="Success"
              state="success"
            />
            <div />
            <Input
              className="mb-2"
              icon={<FontAwesomeIcon icon="heart" />}
              fullWidth
              placeholder="Error"
              state="error"
            />
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
          <div widths={[6, 4]}>
            <h3>Slider</h3>
            <Slider initial={82} max={100} />
            <Slider initial={28} color="secondary" max={100} />
            <Slider initial={63} color="success" max={100} />
            <Slider initial={47} color="error" max={100} />
          </div>
        </Row>
      </Container>
    </Section>
  </Layout>
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

export default Inputs;
