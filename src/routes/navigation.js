import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import Row from '../components/Row';
import H2 from '../components/H2';
import H4 from '../components/H4';
import Alert from '../components/Alert';
import Chip from '../components/Chip';
import { Link } from '@reach/router';
import Container from '../components/Container';
import Notification from '../components/Notification';
import Layout from '../Layout';
import H5 from '../components/H5';
import { theme } from '../theme';
import Code from '../components/Code';
import Hidden from '../components/Hidden';
import Flex from '../components/Flex';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Tabs from '../components/Tabs';
import Tab from '../components/Tab';
import TabContent from '../components/TabContent';
import TabList from '../components/TabList';
import H3 from '../components/H3';

const NavigationComponents = ({}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('one');

  return (
    <Layout>
      <Helmet>
        <title>Layout Components - System UI Kit</title>
      </Helmet>
      <Hero
        background={`linear-gradient(
        to right,
        ${theme.color.primary.main},
        ${theme.color.secondary.main}
      )`}
      >
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#ffffff', fontSize: 48, margin: 0 }}>
            Layout Components
          </h1>
          <p style={{ color: '#ffffffaa' }}>
            Layout components allow you to display information to a user in a
            prominent location.
          </p>
        </div>
      </Hero>
      <Section>
        <Container>
          <H2 className="mt-none">Menu</H2>
          {/* <Menu>
            <MenuItem>Test</MenuItem>
          </Menu> */}
          <Menu align="right">
            <Button>Open Menu</Button>
            <span>
              <MenuItem>Item One</MenuItem>
              <MenuItem>Item Two</MenuItem>
            </span>
          </Menu>
        </Container>
      </Section>
      <Section>
        <Container>
          <H2 className="mt-none">Tabs</H2>
          {/* <div
            style={{
              borderRadius: 3,
              padding: 0,
              width: '100%',
              boxShadow: theme.shadow.two,
            }}
          > */}
          <div
            style={{
              boxShadow: '0px 4px 12px -7px #00000040',
              background: `${theme.color.primary.main}`,
              border: '1px solid #efefef',
              borderBottom: 'none',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingRight: 14
            }}
          >
            <Tabs
              onChange={(value) => {
                console.log('New value: ', value);
                setActiveTab(value);
              }}
              defaultValue="two"
              value={activeTab}
              indicatorColor="white"
            >
              <Tab
                customStyles={`padding: 16px 26px; font-weight: bold; color: white;`}
                name="one"
              >
                Tab One
              </Tab>
              <Tab
                customStyles={`padding: 16px 26px; font-weight: bold; color: white;`}
                name="two"
              >
                Tab Two
              </Tab>
              <Tab
                customStyles={`padding: 16px 26px; font-weight: bold; color: white;`}
                name="three"
              >
                Tab Three
              </Tab>
            </Tabs>

            <Menu align="right">
              <IconButton color="white" circle variant="plain">
                <FontAwesomeIcon icon="user" />
              </IconButton>
              <span>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Profile</MenuItem>
              </span>
            </Menu>
          </div>
          <TabContent
            value={activeTab}
            customStyles={`border-top: none; border-top-right-radius: 0; border-top-left-radius: 0; margin: 0;`}
            name="one"
          >
            <H3 className="mt-none">Content One</H3>
            <p>
              This is a content box, controlled by the tabs up there. Go ahead
              click them and see what happens!
            </p>
            <p>
              Or, you can switch to another tab using a controlled tab
              component.
            </p>
            <IconButton
              circle
              customStyles={`margin: 0;`}
              variant="plain"
              disabled
            >
              <FontAwesomeIcon icon="chevron-left" />
            </IconButton>
            <IconButton
              circle
              customStyles={`margin: 0;`}
              color="primary"
              variant="plain"
              onClick={() => {
                console.log(activeTab);
                setActiveTab('two');
              }}
            >
              <FontAwesomeIcon icon="chevron-right" />
            </IconButton>
          </TabContent>
          <TabContent
            value={activeTab}
            customStyles={`border-top: none; border-top-right-radius: 0; border-top-left-radius: 0; margin: 0;`}
            name="two"
          >
            <H3 className="mt-none">Content Two</H3>
            <p>
              This is a content box, controlled by the tabs up there. Go ahead
              click them and see what happens!
            </p>
            <p>
              Or, you can switch to another tab using a controlled tab
              component.
            </p>
            <IconButton
              circle
              customStyles={`margin: 0;`}
              color="primary"
              variant="plain"
              onClick={() => {
                console.log(activeTab);
                setActiveTab('one');
              }}
            >
              <FontAwesomeIcon icon="chevron-left" />
            </IconButton>
            <IconButton
              circle
              customStyles={`margin: 0;`}
              color="primary"
              variant="plain"
              onClick={() => {
                console.log(activeTab);
                setActiveTab('three');
              }}
            >
              <FontAwesomeIcon icon="chevron-right" />
            </IconButton>
          </TabContent>
          <TabContent
            value={activeTab}
            customStyles={`border-top: none; border-top-right-radius: 0; border-top-left-radius: 0; margin: 0;`}
            name="three"
          >
            <H3 className="mt-none">Content Three</H3>
            <p>
              This is a content box, controlled by the tabs up there. Go ahead
              click them and see what happens!
            </p>
            <p>
              Or, you can switch to another tab using a controlled tab
              component.
            </p>
            <IconButton
              circle
              customStyles={`margin: 0;`}
              color="primary"
              variant="plain"
              onClick={() => {
                console.log(activeTab);
                setActiveTab('two');
              }}
            >
              <FontAwesomeIcon icon="chevron-left" />
            </IconButton>
            <IconButton
              circle
              customStyles={`margin: 0;`}
              variant="plain"
              disabled
            >
              <FontAwesomeIcon icon="chevron-right" />
            </IconButton>
          </TabContent>

          {/* </div> */}
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
  background: ${(props) => props.theme.color.primary.main};
`;

export default NavigationComponents;