import React, { useState } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Column } from '@react-tiny-grid/core';
import { theme } from '../theme';

import Section from '../components/Section';
import Layout from '../Layout';
import H2 from '../components/H2';
import H4 from '../components/H4';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import Toggle from '../components/Toggle';
import Info from '../components/Info';
import Container from '../components/Container';
import Paragraph from '../components/Paragraph';
import Alert from '../components/Alert';
import H5 from '../components/H5';
import H3 from '../components/H3';
import Flex from '../components/Flex';
import Checkbox from '../components/Checkbox';
import Badge from '../components/Badge';
import Code from '../components/Code';
import Collapse from '../components/Collapse';
import DatePicker from '../components/DatePicker';
import Dropdown from '../components/Dropdown';
import DropdownItem from '../components/DropdownItem';
import Hidden from '../components/Hidden';
import Input from '../components/Input';
import Header from '../components/Header';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Modal from '../components/Modal';
import Notification from '../components/Notification';
import RadioButton from '../components/RadioButton';
import RadioButtons from '../components/RadioButtons';
import Select from '../components/Select';
import Option from '../components/Option';
import Slider from '../components/Slider';
import TabContent from '../components/TabContent';
import Tab from '../components/Tab';
import Tabs from '../components/Tabs';

const Components = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [activeTab, setActiveTab] = useState('design');

  return (
    <Layout component>
      <Helmet>
        <title>Components - System UI Kit</title>
      </Helmet>
      <Section>
        <Container>
          <H2 className="">Alert</H2>
          <H5 >Color</H5>
          <Alert>This is a default alert</Alert>
          <Alert color="primary">This is a primary alert</Alert>
          <Alert color="secondary">This is a secondary alert</Alert>
          <Alert color="success">This is a success alert</Alert>
          <Alert color="error">This is an error alert</Alert>
          <br />
          <H5 >Light</H5>
          <Alert variant="light">This is a default alert</Alert>
          <Alert variant="light" color="primary">
            This is a primary alert
          </Alert>
          <Alert variant="light" color="secondary">
            This is a secondary alert
          </Alert>
          <Alert variant="light" color="success">
            This is a success alert
          </Alert>
          <Alert variant="light" color="error">
            This is an error alert
          </Alert>
          <br />
          <H5 >With Icon</H5>
          <Alert
            icon={<FontAwesomeIcon icon="exclamation-circle" />}
            color="error"
          >
            Error
          </Alert>
          <br />
          <H5 >Closable</H5>
          <Alert icon={<FontAwesomeIcon icon="bell" />} close>
            This is an alert that you can close.
          </Alert>
          <br />
          <br />
          <H2>Badge</H2>
          <H5 >Color</H5>
          <Badge>Default</Badge>
          <Badge color="dark">Dark</Badge>
          <Badge color="primary">Primary</Badge>
          <Badge color="secondary">Secondary</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="error">Error</Badge>
          <H5 >Rounded</H5>
          <Badge rounded>Default</Badge>
          <Badge rounded color="dark">
            Dark
          </Badge>
          <Badge rounded color="primary">
            Primary
          </Badge>
          <Badge rounded color="secondary">
            Secondary
          </Badge>
          <Badge rounded color="success">
            Success
          </Badge>
          <Badge rounded color="error">
            Error
          </Badge>
          <br />
          <br />
          <H2>Button</H2>
          <H5 >Color</H5>
          <Button className="">Default</Button>
          <Button className="" color="dark">
            Dark
          </Button>
          <Button className="" color="primary">
            Primary
          </Button>
          <Button className="" color="secondary">
            Secondary
          </Button>
          <Button className="" color="success">
            Success
          </Button>
          <Button className="" color="error">
            Error
          </Button>
          <br />
          <H5 >Outlined</H5>
          <Button className="" variant="outlined">
            Default
          </Button>
          <Button className="" variant="outlined" color="dark">
            Dark
          </Button>
          <Button className="" variant="outlined" color="primary">
            Primary
          </Button>
          <Button className="" variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button className="" variant="outlined" color="success">
            Success
          </Button>
          <Button className="" variant="outlined" color="error">
            Error
          </Button>
          <br />
          <H5 >Plain</H5>
          <Button className="" variant="plain">
            Default
          </Button>
          <Button className="" variant="plain" color="primary">
            Primary
          </Button>
          <Button className="" variant="plain" color="secondary">
            Secondary
          </Button>
          <Button className="" variant="plain" color="success">
            Success
          </Button>
          <Button className="" variant="plain" color="error">
            Error
          </Button>
          <br />
          <H5 >Sizes</H5>
          <Paragraph>
            You can choose between sm, default and lg button sizes.
          </Paragraph>
          <Button className="" color="primary" size="lg">
            Large
          </Button>
          <Button className="" color="primary">
            Default
          </Button>
          <Button className="" color="primary" size="sm">
            Small
          </Button>
          <br />
          <br />
          <H2>Checkbox</H2>
          <H5 >Basic Checkboxes</H5>
          <div
            style={{
              background: theme.color.gray.one,
              borderRadius: 3,
              padding: 16,
            }}
          >
            <Flex>
              <Checkbox checked className="" />
              <Checkbox checked color="primary" className="" />
              <Checkbox className="" color="secondary" />
              <Checkbox disabled className="" color="success" />
              <Checkbox disabled checked className="" color="error" />
            </Flex>
          </div>
          <H5 >With Label</H5>
          <div
            style={{
              background: theme.color.gray.one,
              borderRadius: 3,
              padding: 16,
            }}
          >
            <Checkbox
              onChange={(checked) => console.log(checked)}
              checked
              className=""
            >
              Default
            </Checkbox>
            <br />
            <Checkbox
              onChange={(checked) => console.log(checked)}
              checked
              color="primary"
              className=""
            >
              Primary
            </Checkbox>
            <br />
            <Checkbox
              onChange={(checked) => console.log(checked)}
              checked
              className=""
              color="secondary"
            >
              Secondary
            </Checkbox>
            <br />
            <Checkbox
              onChange={(checked) => console.log(checked)}
              checked
              className=""
              color="success"
            >
              Success
            </Checkbox>
            <br />
            <Checkbox
              onChange={(checked) => console.log(checked)}
              checked
              className=""
              color="error"
            >
              Error
            </Checkbox>
            <br />
          </div>
          <br />
          <br />
          <H2>Collapse</H2>
          <Collapse padding={12}>
            <div>
              <H5 className="" customStyles="padding: 16px;">
                This is the title
              </H5>
            </div>
            <div>
              <Paragraph customStyles="padding: 16px;" className="">
                This is the content
              </Paragraph>
            </div>
          </Collapse>
          <br />
          <br />
          <H2>Date Picker</H2>
          <DatePicker
            showTodayButton={false}
            timePicker={false}
            variant="filled"
          />
          <br />
          <br />
          <H2>Dropdown</H2>
          <Dropdown align="left">
            <Button color="primary">
              <Flex hAlign="center" vAlign="center">
                Open Dropdown
              </Flex>
            </Button>
            <span>
              <DropdownItem>Item One</DropdownItem>
              <DropdownItem>Item Two</DropdownItem>
            </span>
          </Dropdown>
          <br />
          <br />
          <H2>Flex</H2>
          <Flex justifyContent="center">
            <div style={{ padding: 16, marginRight: 8, background: 'orange' }}>
              Test
            </div>
            <div style={{ padding: 16, marginRight: 8, background: 'orange' }}>
              Test
            </div>
            <div style={{ padding: 16, marginRight: 8, background: 'orange' }}>
              Test
            </div>
            <div style={{ padding: 16, marginRight: 8, background: 'orange' }}>
              Test
            </div>
          </Flex>
          <br />
          <br />
          <H2>Hidden</H2>
          <Hidden show={769}>
            <div
              style={{
                padding: 16,
                background: `${theme.color.primary}10`,
                marginBottom: 14,
                textAlign: 'center',
                border: '2px dashed transparent',
              }}
            >
              {'show={769}'}
            </div>
          </Hidden>
          <Hidden hide={769}>
            <div
              style={{
                padding: 16,
                border: '2px dashed #efefef',
                marginBottom: 14,
                textAlign: 'center',
                color: '#ddd',
              }}
            >
              {'show={769}'}
            </div>
          </Hidden>
          <Hidden hide={769}>
            <div
              style={{
                padding: 16,
                background: `${theme.color.primary}10`,
                marginBottom: 14,
                textAlign: 'center',
                border: '2px dashed transparent',
              }}
            >
              {'hide={769}'}
            </div>
          </Hidden>
          <Hidden show={769}>
            <div
              style={{
                padding: 16,
                border: '2px dashed #efefef',
                marginBottom: 14,
                textAlign: 'center',
                color: '#ddd',
              }}
            >
              {'hide={769}'}
            </div>
          </Hidden>
          <Hidden show={576} hide={960}>
            <div
              style={{
                padding: 16,
                background: `${theme.color.primary}10`,
                marginBottom: 14,
                textAlign: 'center',
                border: '2px dashed transparent',
              }}
            >
              {'show={576} hide={960}'}
            </div>
          </Hidden>
          <Hidden hide={576} show={960}>
            <div
              style={{
                padding: 16,
                border: '2px dashed #efefef',
                marginBottom: 14,
                textAlign: 'center',
                color: '#ddd',
              }}
            >
              {'show={576} hide={960}'}
            </div>
          </Hidden>
          <br />
          <br />
          <H2>IconButton</H2>
          <H5 >Color</H5>
          <IconButton className="">
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <IconButton rounded className="" color="dark">
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <IconButton className="" color="primary">
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <IconButton rounded className="" color="secondary">
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <IconButton className="" color="success">
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <IconButton className="" color="error">
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <br />
          <H5 >Outlined</H5>
          <IconButton rounded className="" variant="outlined">
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <IconButton className="" variant="outlined" color="dark">
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <IconButton className="" variant="outlined" color="primary">
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <IconButton
            rounded
            className=""
            variant="outlined"
            color="secondary"
          >
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <IconButton className="" variant="outlined" color="success">
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <IconButton rounded className="" variant="outlined" color="error">
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <br />
          <H5 >Plain</H5>
          <IconButton className="" variant="plain">
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <IconButton className="" variant="plain" color="primary">
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <IconButton
            rounded
            className=""
            variant="plain"
            color="secondary"
          >
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <IconButton className="" variant="plain" color="success">
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <IconButton className="" variant="plain" color="error">
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <br />
          <H5 >Sizes</H5>
          <Paragraph>
            You can choose between sm, default and lg button sizes.
          </Paragraph>
          <IconButton className="" color="primary" size="lg">
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <IconButton className="" color="primary">
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <IconButton className="" color="primary" size="sm">
            <FontAwesomeIcon icon="check" />
          </IconButton>
          <br />
          <br />
          <H2>Info</H2>
          <Row spacing={[12]} breakpoints={[960, 1200]}>
            <Column widths={[6, 4]}>
              <Info
                color="primary"
                icon={<FontAwesomeIcon icon="globe" />}
                title="Info One"
                content="This is an information box. Look at it."
                align="center"
              />
            </Column>
            <Column widths={[6, 4]}>
              <Info
                color="primary"
                icon={<FontAwesomeIcon icon="globe" />}
                title="Info One"
                content="This is an information box. Look at it."
                align="center"
              />
            </Column>
            <Column widths={[6, 4]}>
              <Info
                color="primary"
                icon={<FontAwesomeIcon icon="globe" />}
                title="Info One"
                content="This is an information box. Look at it."
                align="center"
              />
            </Column>
            <Column widths={[6, 4]}>
              <Info
                color="primary"
                icon={<FontAwesomeIcon icon="globe" />}
                title="Info One"
                content="This is an information box. Look at it."
                align="center"
              />
            </Column>
            <Column widths={[6, 4]}>
              <Info
                color="primary"
                icon={<FontAwesomeIcon icon="globe" />}
                title="Info One"
                content="This is an information box. Look at it."
                align="center"
              />
            </Column>
            <Column widths={[6, 4]}>
              <Info
                color="primary"
                icon={<FontAwesomeIcon icon="globe" />}
                title="Info One"
                content="This is an information box. Look at it."
                align="center"
              />
            </Column>
          </Row>
          <br />
          <br />
          <H2>Input</H2>
          <H5>Size</H5>
          <Row spacing={[12]} breakpoints={[576, 769]}>
            <Column widths={[6, 4]}>
              <Input
                className=""
                size="xs"
                fullWidth
                placeholder="X-Small"
              />
              <div />
              <Input className="" size="sm" fullWidth placeholder="Small" />
              <div />
              <Input className="" fullWidth placeholder="Default" />
              <div />
              <Input className="" size="lg" fullWidth placeholder="Large" />
            </Column>
            <Column widths={[6, 4]}>
              <Input
                className=""
                variant="filled"
                size="xs"
                fullWidth
                placeholder="X-Small"
              />
              <div />
              <Input
                className=""
                variant="filled"
                size="sm"
                fullWidth
                placeholder="Small"
              />
              <div />
              <Input
                className=""
                variant="filled"
                fullWidth
                placeholder="Default"
              />
              <div />
              <Input
                className=""
                variant="filled"
                size="lg"
                fullWidth
                placeholder="Large"
              />
            </Column>
            <Column widths={[6, 4]}>
              <Input
                className=""
                size="xs"
                fullWidth
                placeholder="X-Small"
                icon={<FontAwesomeIcon icon="heart" />}
              />
              <div />
              <Input
                className=""
                size="sm"
                fullWidth
                placeholder="Small"
                icon={<FontAwesomeIcon icon="heart" />}
              />
              <div />
              <Input
                className=""
                fullWidth
                placeholder="Default"
                icon={<FontAwesomeIcon icon="heart" />}
              />
              <div />
              <Input
                className=""
                size="lg"
                fullWidth
                placeholder="Large"
                icon={<FontAwesomeIcon icon="heart" />}
              />
            </Column>
          </Row>
          <H5>State</H5>
          <Row spacing={[12]} breakpoints={[576, 769]}>
            <Column widths={[6, 4]}>
              <Input className="" fullWidth placeholder="Default" />
              <div />
              <Input
                className=""
                fullWidth
                placeholder="Success"
                state="success"
              />
              <div />
              <Input
                className=""
                fullWidth
                placeholder="Error"
                state="error"
              />
            </Column>
            <Column widths={[6, 4]}>
              <Input
                className=""
                variant="filled"
                fullWidth
                placeholder="Default"
              />
              <div />
              <Input
                className=""
                variant="filled"
                fullWidth
                placeholder="Success"
                state="success"
              />
              <div />
              <Input
                className=""
                variant="filled"
                fullWidth
                placeholder="Error"
                state="error"
              />
            </Column>
            <Column widths={[6, 4]}>
              <Input
                className=""
                icon={<FontAwesomeIcon icon="heart" />}
                fullWidth
                placeholder="Default"
              />
              <div />
              <Input
                className=""
                icon={<FontAwesomeIcon icon="heart" />}
                fullWidth
                placeholder="Success"
                state="success"
              />
              <div />
              <Input
                className=""
                icon={<FontAwesomeIcon icon="heart" />}
                fullWidth
                placeholder="Error"
                state="error"
              />
            </Column>
          </Row>
          <H5>Type</H5>
          <Input
            type="number"
            color="primary"
            className=""
            defaultValue={3}
          />
          <br />
          <br />
          <H2>Menu</H2>
          <H5>Colors</H5>
          <Header
            customStyles="div {width: 100%;} margin: 0 0 12px 0; border-radius: 5px;"
            height={60}
            fullWidth
            color="primary"
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              customStyles="width: 100%;"
            >
              <H4 className="">SystemUI</H4>
              <Menu>
                <MenuItem>
                  <a href="/">Home</a>
                </MenuItem>
                <MenuItem>
                  <a href="/">About</a>
                </MenuItem>
                <MenuItem>
                  <IconButton link="/" color="white" variant="plain">
                    <FontAwesomeIcon icon="check" />
                  </IconButton>
                </MenuItem>
              </Menu>
            </Flex>
          </Header>
          <Header
            customStyles="div {width: 100%;} margin: 0 0 12px 0; border-radius: 5px;"
            height={60}
            fullWidth
            color="secondary"
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              customStyles="width: 100%;"
            >
              <H4 className="">SystemUI</H4>
              <Menu>
                <MenuItem>
                  <a href="/">Home</a>
                </MenuItem>
                <MenuItem>
                  <a href="/">About</a>
                </MenuItem>
                <MenuItem>
                  <IconButton link="/" color="white" variant="plain">
                    <FontAwesomeIcon icon="check" />
                  </IconButton>
                </MenuItem>
              </Menu>
            </Flex>
          </Header>
          <Header
            customStyles="div {width: 100%;} margin: 0 0 12px 0; border-radius: 5px;"
            height={60}
            fullWidth
            color="white"
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              customStyles="width: 100%;"
            >
              <H4 className="">SystemUI</H4>
              <Menu>
                <MenuItem>
                  <a href="/">Home</a>
                </MenuItem>
                <MenuItem>
                  <a href="/">About</a>
                </MenuItem>
                <MenuItem>
                  <IconButton link="/" variant="plain">
                    <FontAwesomeIcon icon="check" />
                  </IconButton>
                </MenuItem>
              </Menu>
            </Flex>
          </Header>
          <br />
          <br />
          <H2>Modal</H2>
          <Button onClick={() => setModalOpen(!modalOpen)} color="primary">
            Open Modal
          </Button>
          {modalOpen && (
            <Modal
              toggleFunction={() => setModalOpen(!modalOpen)}
              title="Test Modal"
            >
              <Paragraph>This is a modal. It's really pretty sweet.</Paragraph>
              <Paragraph>
                You can do cool stuff with it, and add buttons to it at the
                bottom.
              </Paragraph>
              {/* <Line /> */}
              <Flex
                justifyContent="space-between"
                customStyles="margin-top: 36px;"
              >
                <Button color="primary" size="sm">
                  Save
                </Button>
                <Button
                  onClick={() => setModalOpen(!modalOpen)}
                  color="primary"
                  variant="plain"
                  size="sm"
                >
                  Cancel
                </Button>
              </Flex>
            </Modal>
          )}
          <br />
          <br />
          <H2>Notification</H2>
          <Button
            onClick={() => {
              setShowNotification(true);
              setTimeout(() => {
                setShowNotification(false);
              }, 2500);
            }}
          >
            Open
          </Button>
          {showNotification && (
            <Notification color="primary">A notification</Notification>
          )}
          <br />
          <br />
          <H2>Radio Buttons</H2>
          <RadioButtons name="radio-buttons">
            <RadioButton value="one">Radio button</RadioButton>
            <RadioButton value="two">Another radio button</RadioButton>
            <RadioButton disabled value="three">
              Disabled. Go ahead, try and click me 😉
            </RadioButton>
          </RadioButtons>
          <br />
          <br />
          <H2>Select</H2>
          <Select value="one">
            <Option value="one">One</Option>
            <Option value="two">Two</Option>
            <Option value="three">Three</Option>
          </Select>
          <Select variant="filled" value="one">
            <Option value="one">One</Option>
            <Option value="two">Two</Option>
            <Option value="three">Three</Option>
          </Select>
          <br />
          <br />
          <H2>Slider</H2>
          <Slider initial={82} max={100} />
          <Slider initial={28} color="secondary" max={100} />
          <Slider initial={63} color="success" max={100} />
          <Slider initial={47} color="error" max={100} />
          <br />
          <br />
          <H2>Switch</H2>
          <Toggle onChange={(checked) => console.log(checked)} />
          <br/><br/>
          <H2>Tabs</H2>
            <Tabs
              onChange={(value) => setActiveTab(value)}
              value={activeTab}
              customStyles='margin-bottom: 16px;'
            >
              <Tab activeStyles={`box-shadow: ${theme.shadow.two}`} name="design">Design</Tab>
              <Tab activeStyles={`box-shadow: ${theme.shadow.two}`} name="develop">Develop</Tab>
              <Tab activeStyles={`box-shadow: ${theme.shadow.two}`} name="launch">Launch</Tab>
            </Tabs>
            <TabContent name="design" value={activeTab}>
              <Paragraph className="">
                Mustache cliche tempor, williamsburg carles vegan helvetica.
                Reprehenderit butcher retro keffiyeh dreamcatcher synth.
              </Paragraph>
              <Paragraph>
                Mustache cliche tempor, williamsburg carles vegan helvetica.
                Reprehenderit butcher retro keffiyeh dreamcatcher synth.
              </Paragraph>
            </TabContent>
            <TabContent name="develop" value={activeTab}>
              <Paragraph className="">
                Duisf sidfu ao fdl sidf dif df asdflkdj alsfksfs klsjfs lskfjs flksjlksjdf. Flkjasdf jkdl lsa kd fkkjj fkdj. Kufdkn jk.
              </Paragraph>
              <Paragraph>
                Duisf sidfu ao fdl sidf dif df asdflkdj alsfksfs klsjfs lskfjs flksjlksjdf. Flkjasdf jkdl lsa kd fkkjj fkdj. Kufdkn jk.
              </Paragraph>
            </TabContent>
            <TabContent name="launch" value={activeTab}>
              <Paragraph className="">
                Mustache cliche tempor, williamsburg carles vegan helvetica.
                Reprehenderit butcher retro keffiyeh dreamcatcher synth.
              </Paragraph>
              <Paragraph>
                Mustache cliche tempor, williamsburg carles vegan helvetica.
                Reprehenderit butcher retro keffiyeh dreamcatcher synth.
              </Paragraph>
            </TabContent>
        </Container>
      </Section>
    </Layout>
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
  background: ${(props) => props.theme.color.primary};
`;

export default Components;
