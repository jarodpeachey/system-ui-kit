import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@reach/router';
import { theme } from './theme';

import Section from './components/Section';
import Button from './components/Button';
import { Row, Column } from '@react-tiny-grid/core';

import H1 from './components/H1';
import H2 from './components/H2';
import H3 from './components/H3';
import H4 from './components/H4';
import H5 from './components/H5';
import H6 from './components/H6';
import Alert from './components/Alert';
import Code from './components/Code';
import Info from './components/Info';
import Container from './components/Container';
import Layout from './Layout';
import SubTitle from './components/SubTitle';
import Paragraph from './components/Paragraph';
import Input from './components/Input';
import Flex from './components/Flex';

const App = () => (
  <Layout>
    <Helmet>
      <title>System - React UI Kit</title>
    </Helmet>
    <Section>
      <Container>
        <H1 customStyles="max-width: 500px;" display>React Development Made Easy</H1>
        <Paragraph customStyles="max-width: 500px;" subheading>
          A modern UI Kit built to speed up your development proccess, while
          still allowing you room to customize and grow.
        </Paragraph>
      </Container>
    </Section>
    <Section>
      <Container>
        <Container small>
          <H2 type="h2" customStyles="text-align: center; max-width: 600px;
          margin-left: auto; margin-right: auto;">
            What is System?
          </H2>
          <Paragraph subheading customStyles="text-align: center; max-width: 600px;
          margin-left: auto; margin-right: auto;">
            System is a UI Kit like none other. It's dead-simple to get up and
            running, and offers advanced customization options that are easier
            than most other UI kits.
          </Paragraph>
        </Container>
        <Row spacing={[24, 32]} breakpoints={[769, 960]}>
          <Column widths={[6, 4]}>
            <Info
              title="Drop-in Components"
              color="primary"
              icon={<FontAwesomeIcon icon="boxes" />}
            >
              <Paragraph>
                System comes with a variety of components that require no custom
                setup, so you can get up and running in no time.
              </Paragraph>
              <Paragraph>
                In fact, this entire website is built using System: no custom
                code added!
              </Paragraph>
            </Info>
          </Column>
          <Column widths={[6, 4]}>
            <Info
              title="Custom Theming"
              color="primary"
              icon={<FontAwesomeIcon icon="palette" />}
            >
              <Paragraph>
                With custom theming options, you can make System your own.
              </Paragraph>
              <Paragraph>
                Customize everything from font size, colors, spacing, box
                shadow, border radius and more.
              </Paragraph>
            </Info>
          </Column>
          <Column widths={[6, 4]}>
            <Info
              title="Style Overrides"
              color="primary"
              icon={<FontAwesomeIcon icon="cog" />}
            >
              <Paragraph>
                Each System component accepts a customStyles prop, which
                overrides any other styles you've defined. This gives you more
                flexibility with your components.
              </Paragraph>
            </Info>
          </Column>

          {/* <div widths={[6, 4]}>
            <Info
              title="Native Behavior"
              color="primary"
              icon={<FontAwesomeIcon icon="mouse-pointer" />}
            >
              <Paragraph>
                System allows you to pass custom event functions to each and
                every component, just as you would with native HTML.
              </Paragraph>
              <Paragraph>
                You can also add custom classes to each component, if you've got
                custom CSS you'd like to use.
              </Paragraph>
            </Info>
          </div> */}
        </Row>
        <Flex>
          <Button className="" color="primary" link="/components">
            View Components
          </Button>
        </Flex>
      </Container>
    </Section>
    <Section background={`${theme.color.success}10`}>
      <Container>
        <H2 color="success" type="h2" className=" center">
          Join the waiting list!
        </H2>
        <SubTitle className=" center" style={{ color: theme.color.error }}>
          Sign up to be notified when System is launched, and get a nice
          discount to go with it!
        </SubTitle>
        <Row spacing={[8, 8]} breakpoints={[576, 800]}>
          <Column widths={[9, 10]}>
            <Input
              color="success"
              size="large"
              fullWidth
              placeholder="user@mail.com"
            />
          </Column>
          <Column widths={[3, 2]}>
            <Button color="success" size="large" fullWidth>
              Join
            </Button>
          </Column>
        </Row>
      </Container>
    </Section>
  </Layout>
);

export default App;
