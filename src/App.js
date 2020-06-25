import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@reach/router';
import { theme } from './theme';
import Hero from './components/Hero';
import Section from './components/Section';
import Button from './components/Button';
import Row from './components/Row';

import Heading from './components/Heading';
import Alert from './components/Alert';
import Code from './components/Code';
import Info from './components/Info';
import Container from './components/Container';
import Layout from './Layout';
import SubTitle from './components/SubTitle';

const App = ({}) => (
  <Layout>
    <Helmet>
      <title>System - React UI Kit</title>
    </Helmet>
    <Hero
      background={`linear-gradient(
        to right,
        ${theme.color.primary.main},
        ${theme.color.secondary.main}
      )`}
    >
      <Heading type="h1" background="dark" className="center">
        React Development Made Easy
      </Heading>
      <SubTitle type="h4" className="center" background="dark">
        A modern UI Kit built to speed up your development proccess, while still
        allowing you room to customize and grow.
      </SubTitle>
    </Hero>
    <Section spacing="small">
      <Container>
        <Alert
          color="success"
          variant="light"
          icon={<FontAwesomeIcon icon="question-circle" />}
          style={{ maxWidth: 780, margin: '0 auto' }}
        >
          <strong>Did you know?</strong> This website is built completely with
          System. Not a shred of custom CSS!
        </Alert>
      </Container>
    </Section>
    <Section className="pt-none" spacing="large">
      <Container>
        <Heading type="h5" title color="primary" className="center mt-none">
          Built For You
        </Heading>
        <Heading type="h2" className="center mt-3">
          What is System?
        </Heading>
        <p className="center" style={{ maxWidth: 780 }}>
          System is a UI Kit like none other. It's dead-simple to get up and
          running, and offers advanced customization that's than most other UI
          kits.
        </p>
        <p className="center" style={{ maxWidth: 780 }}>
          I'm building System because, as a developer, I sometimes get stuck
          with creating a cohesive, well designed website. With System, I'm
          solving this problem for other developers. Because System uses simple
          components with even simpler cusomization, you can focus on the
          development of your product rather than the website design.
        </p>
      </Container>
    </Section>
    <Section background={`${theme.color.error}10`}>
      <Container>
        <Heading
          type="h3"
          className="mt-none"
          customStyles={`color: ${theme.color.error};`}
        >
          <FontAwesomeIcon
            icon="exclamation-circle"
            style={{ marginRight: 10 }}
          />
          Construction Notice
        </Heading>
        <p className="mb-5" style={{ color: theme.color.error }}>
          System UI Kit is still in development, but feel free to browse the
          site and look at the components I've already completed!
        </p>
        <Button link="/components" color="error">
          See Components
        </Button>
      </Container>
    </Section>
    <Section spacing="large">
      <Container>
        <Heading type="h5" color="primary" title className="mt-none">
          The Benefits
        </Heading>
        <Heading type="h2" className="mt-3 mb-7">
          Simplicity and Ease
        </Heading>
        <Row spacing={[24, 12]} breakpoints={[769, 960]}>
          <div widths={[6, 4]}>
            <Info
              color="primary"
              title="Simple Naming"
              icon={<FontAwesomeIcon icon="feather" />}
            >
              <p>
                System uses simple naming conventions for the components and
                their props. Plus, System uses as little props as possible,
                making it easier for you to start developing.
              </p>
            </Info>
          </div>
          <div widths={[6, 4]}>
            <Info
              color="primary"
              title="Highly Customizable"
              icon={<FontAwesomeIcon icon="cog" />}
            >
              <p>
                If the props System comes with aren't enough, each and every
                component supports custom styling using{' '}
                <Code>styled-components</Code>. Simply pass in a customStyles
                prop and you can customize hover state, media queries and more.
              </p>
            </Info>
          </div>
          <div widths={[6, 4]}>
            <Info
              color="primary"
              title="Global Theming"
              icon={<FontAwesomeIcon icon="globe" />}
            >
              <p>
                System allows you to add custom styles to each component on a
                global scale, allowing you to integrate System seamlessly into
                your brand. Plus, you can override these global styles whenever
                you need 🔥
              </p>
            </Info>
          </div>
        </Row>
        <Button
          className="center mt-5"
          link="/components"
          color="primary"
          variant="light"
        >
          View Components
        </Button>
      </Container>
    </Section>
  </Layout>
);

export default App;
