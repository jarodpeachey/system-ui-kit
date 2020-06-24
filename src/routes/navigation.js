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
import Dropdown from '../components/Dropdown';
import DropdownItem from '../components/DropdownItem';
import Tabs from '../components/Tabs';
import Tab from '../components/Tab';
import TabContent from '../components/TabContent';
import TabList from '../components/TabList';
import H3 from '../components/H3';

const NavigationComponents = ({}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('one');
  const [activeTabTwo, setActiveTabTwo] = useState('html');
  const [activeTabThree, setActiveTabThree] = useState('design');

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
          <Dropdown align="left">
            <Button>Open</Button>
            <span>
              <DropdownItem>Item One</DropdownItem>
              <DropdownItem>Item Two</DropdownItem>
            </span>
          </Dropdown>
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

          <div>
            <Tabs
              onChange={(value) => setActiveTabThree(value)}
              // fullWidth
              value={activeTabThree}
            >
              <Tab name="design">Design</Tab>
              <Tab name="develop">Develop</Tab>
              <Tab name="launch">Launch</Tab>
            </Tabs>
            <TabContent name="design" value={activeTabThree}>
              <p className="m-none">
                Cosby sweater eu banh mi, qui irure. Amet lorem et luctus. Sed
                eget nulla ac metus porttitor tristique ac quis mauris. Praesent
                condimentum justo in sapien semper,{' '}
              </p>
              <p>
                Aliquam metus libero, pretium non posuere ut, ultrices sed
                mauris. Pellentesque ut nunc tincidunt, consequat odio nec,
                bibendum mauris. Vivamus blandit bibendum dolor, non ornare
                lectus maximus in. Etiam ac nibh vel orci commodo congue. Nullam
                pulvinar sit. Vitae varius magna fermentum. Vivamus mattis
                turpis ut nulla facilisis, sit amet sagittis eros consectetur.
                Nam viverra iaculis fermentum. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </TabContent>
            <TabContent name="develop" value={activeTabThree}>
              <p className="m-none">
                Cras ornare luctus lectus vel varius. Sed neque risus, pharetra
                vitae pellentesque vitae, scelerisque at nunc. Vestibulum
                maximus fermentum nisi nec luctus. Maecenas vitae purus
                facilisis, dapibus diam id, gravida nisi. Suspendisse tincidunt
                nisl dui, condimentum semper erat mollis sit amet. Sed
                sollicitudin lorem sit amet massa efficitur sollicitudin.
              </p>
              <p>
                Vivamus sed neque maximus, malesuada risus vitae, bibendum
                turpis. Nunc orci ligula, dignissim ac viverra et, ornare sed
                augue.
              </p>
            </TabContent>
            <TabContent name="launch" value={activeTabThree}>
              <p className="m-none">
                Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                Aliquip placeat salvia cillum iphone. Seitan aliquip quis
                cardigan american apparel, butcher voluptate nisi qui.
              </p>
              <p>
                Mustache cliche tempor, williamsburg carles vegan helvetica.
                Reprehenderit butcher retro keffiyeh dreamcatcher synth.
              </p>
            </TabContent>
          </div>
          <br />
          <br />
          <br />
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
              paddingRight: 14,
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

            <Dropdown align="right">
              <IconButton color="white" circle variant="plain">
                <FontAwesomeIcon icon="user" />
              </IconButton>
              <span>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Profile</DropdownItem>
              </span>
            </Dropdown>
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
          <br />
          <br />
          <br />
          <Tabs
            onChange={(value) => {
              console.log('New value: ', value);
              setActiveTabTwo(value);
            }}
            defaultValue="html"
            value={activeTabTwo}
            fullWidth
          >
            <Tab
              customStyles={`:hover { background: #efefef80; } border-radius: 6px;`}
              activeStyles={`:hover { color: white; background: ${theme.color.primary.main}; }color: white; border: none; border-radius: 6px; background: ${theme.color.primary.main};`}
              name="html"
            >
              HTML
            </Tab>
            <Tab
              customStyles={`:hover { background: #efefef80; } border-radius: 6px;`}
              activeStyles={`:hover { color: white; background: ${theme.color.secondary.main}; }color: white; border: none; border-radius: 6px; background: ${theme.color.secondary.main};`}
              name="css"
            >
              CSS
            </Tab>
            <Tab
              customStyles={`:hover { background: #efefef80; } border-radius: 6px;`}
              activeStyles={`:hover { color: white; background: ${theme.color.success}; }color: white; border: none; border-radius: 6px; background: ${theme.color.success};`}
              name="javascript"
            >
              Javascript
            </Tab>
          </Tabs>
          <TabContent name="html" value={activeTabTwo}>
            <H3 className="m-none">HTML</H3>
            <p>
              HTML is a modern markup language that defines the content
              structure of a website.
            </p>
            <Button color="primary">Learn More</Button>
          </TabContent>
          <TabContent name="css" value={activeTabTwo}>
            <H3 className="m-none">CSS</H3>
            <p>
              CSS is a language used to style websites. Without it, websites
              would look horrible.
            </p>
            <Button color="secondary">Learn More</Button>
          </TabContent>
          <TabContent name="javascript" value={activeTabTwo}>
            <H3 className="m-none">Javascript</H3>
            <p>
              Javascript is a language used to build websites and add user
              interaction. Without it, it would be boring.
            </p>
            <Button color="success">Learn More</Button>
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
