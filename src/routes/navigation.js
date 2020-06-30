import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import Row from '../components/Row';
import H1 from '../components/H1';
import H2 from '../components/H2';
import H3 from '../components/H3';
import H4 from '../components/H4';
import H5 from '../components/H5';
import H6 from '../components/H6';
import Alert from '../components/Alert';
import Chip from '../components/Chip';
import { Link } from '@reach/router';
import Container from '../components/Container';
import Notification from '../components/Notification';
import Layout from '../Layout';
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
import SubTitle from '../components/SubTitle';
import Paragraph from '../components/Paragraph';

const NavigationComponents = ({}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTabOne, setActiveTabOne] = useState('design');
  const [activeTabTwo, setActiveTabTwo] = useState('design');
  const [activeTabThree, setActiveTabThree] = useState('design');

  return (
    <Layout>
      <Helmet>
        <title>Layout Components - System UI Kit</title>
      </Helmet>
      <Hero
        background={`linear-gradient(
        to right,
        ${theme.color.primary},
        ${theme.color.secondary}
      )`}
      >
        <div style={{ textAlign: 'center' }}>
          <H1 type="h1" darkBackground className="m-none">
            Layout Components
          </H1>
          <SubTitle type="h4" darkBackground>
            Layout components allow you to display information to a user in a
            prominent location.
          </SubTitle>
        </div>
      </Hero>
      <Section>
        <Container>
          <H2 type="h2" className="mt-none">
            Menu
          </H2>
          {/* <Menu>
            <MenuItem>Test</MenuItem>
          </Menu> */}
          <Dropdown align="left">
            <Button>
              <Flex hAlign="center" vAlign="center">
                Open <FontAwesomeIcon icon="chevron-down" />
              </Flex>
            </Button>
            <span>
              <DropdownItem>Item One</DropdownItem>
              <DropdownItem>Item Two</DropdownItem>
            </span>
          </Dropdown>
        </Container>
      </Section>
      <Section>
        <Container>
          <H2 type="h2" className="mt-none">
            Tabs
          </H2>
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
              onChange={(value) => setActiveTabOne(value)}
              // fullWidth
              value={activeTabOne}
              customStyles={`margin-bottom: 16px;`}
            >
              <Tab name="design">Design</Tab>
              <Tab name="develop">Develop</Tab>
              <Tab name="launch">Launch</Tab>
            </Tabs>
            <TabContent name="design" value={activeTabOne}>
              <Paragraph className="m-none">
                Cosby sweater eu banh mi, qui irure. Amet lorem et luctus. Sed
                eget nulla ac metus porttitor tristique ac quis mauris. Praesent
                condimentum justo in sapien semper,{' '}
              </Paragraph>
              <Paragraph>
                Aliquam metus libero, pretium non posuere ut, ultrices sed
                mauris. Pellentesque ut nunc tincidunt, consequat odio nec,
                bibendum mauris. Vivamus blandit bibendum dolor, non ornare
                lectus maximus in. Etiam ac nibh vel orci commodo congue. Nullam
                pulvinar sit. Vitae varius magna fermentum. Vivamus mattis
                turpis ut nulla facilisis, sit amet sagittis eros consectetur.
                Nam viverra iaculis fermentum. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
              </Paragraph>
            </TabContent>
            <TabContent name="develop" value={activeTabOne}>
              <Paragraph className="m-none">
                Cras ornare luctus lectus vel varius. Sed neque risus, pharetra
                vitae pellentesque vitae, scelerisque at nunc. Vestibulum
                maximus fermentum nisi nec luctus. Maecenas vitae purus
                facilisis, dapibus diam id, gravida nisi. Suspendisse tincidunt
                nisl dui, condimentum semper erat mollis sit amet. Sed
                sollicitudin lorem sit amet massa efficitur sollicitudin.
              </Paragraph>
              <Paragraph>
                Vivamus sed neque maximus, malesuada risus vitae, bibendum
                turpis. Nunc orci ligula, dignissim ac viverra et, ornare sed
                augue.
              </Paragraph>
            </TabContent>
            <TabContent name="launch" value={activeTabOne}>
              <Paragraph className="m-none">
                Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                Aliquip placeat salvia cillum iphone. Seitan aliquip quis
                cardigan american apparel, butcher voluptate nisi qui.
              </Paragraph>
              <Paragraph>
                Mustache cliche tempor, williamsburg carles vegan helvetica.
                Reprehenderit butcher retro keffiyeh dreamcatcher synth.
              </Paragraph>
            </TabContent>
          </div>
          <br />
          <br />
          <br />
          <Row spacing={[8]} breakpoints={[576]}>
            <div widths={['auto']}>
              <Tabs
                onChange={(value) => setActiveTabTwo(value)}
                // fullWidth
                value={activeTabTwo}
                vertical
              >
                <Tab name="design">Design</Tab>
                <Tab name="develop">Develop</Tab>
                <Tab name="launch">Launch</Tab>
              </Tabs>
            </div>
            <div widths={[9]}>
              <TabContent name="design" value={activeTabTwo}>
                <Paragraph className="m-none">
                  Cosby sweater eu banh mi, qui irure. Amet lorem et luctus. Sed
                  eget nulla ac metus porttitor tristique ac quis mauris.
                  Praesent condimentum justo in sapien semper,
                </Paragraph>
                <Paragraph>
                  Aliquam metus libero, pretium non posuere ut, ultrices sed
                  mauris. Pellentesque ut nunc tincidunt, consequat odio nec,
                  bibendum mauris. Vivamus blandit bibendum dolor, non ornare
                  lectus maximus in. Etiam ac nibh vel orci commodo congue.
                  Nullam pulvinar sit. Vitae varius magna fermentum. Vivamus
                  mattis turpis ut nulla facilisis, sit amet sagittis eros
                  consectetur. Nam viverra iaculis fermentum. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos.
                </Paragraph>
              </TabContent>
              <TabContent name="develop" value={activeTabTwo}>
                <Paragraph className="m-none">
                  Cras ornare luctus lectus vel varius. Sed neque risus,
                  pharetra vitae pellentesque vitae, scelerisque at nunc.
                  Vestibulum maximus fermentum nisi nec luctus. Maecenas vitae
                  purus facilisis, dapibus diam id, gravida nisi. Suspendisse
                  tincidunt nisl dui, condimentum semper erat mollis sit amet.
                  Sed sollicitudin lorem sit amet massa efficitur sollicitudin.
                </Paragraph>
                <Paragraph>
                  Vivamus sed neque maximus, malesuada risus vitae, bibendum
                  turpis. Nunc orci ligula, dignissim ac viverra et, ornare sed
                  augue.
                </Paragraph>
              </TabContent>
              <TabContent name="launch" value={activeTabTwo}>
                <Paragraph className="m-none">
                  Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                  Aliquip placeat salvia cillum iphone. Seitan aliquip quis
                  cardigan american apparel, butcher voluptate nisi qui.
                </Paragraph>
                <Paragraph>
                  Mustache cliche tempor, williamsburg carles vegan helvetica.
                  Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                </Paragraph>
              </TabContent>
            </div>
          </Row>
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

export default NavigationComponents;
