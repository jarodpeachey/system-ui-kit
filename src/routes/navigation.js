import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Button from '../components/Button';
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

const NavigationComponents = ({}) => {
  const [showMenu, setShowMenu] = useState(false);

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
          <Menu align="left">
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
          {/* <H2 className="mt-none">Tabs</H2>
          <Tabs>
            <Tab name="one">Tab One</Tab>
            <Tab name="two">Tab Two</Tab>
          </Tabs>
          <Content name="one">Content One</Content>
          <Content name="two">Content Two</Content> */}
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
