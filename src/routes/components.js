import React, { useState } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from '../theme';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Button from '../components/Button';
import Row from '../components/Row';
import H2 from '../components/H2';
import Info from '../components/Info';
import Container from '../components/Container';
import Layout from '../Layout';

const Components = () => (
  <Layout>
    <Helmet>
      <title>Components - System UI Kit</title>
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
          Components
        </h1>
        <p style={{ color: '#ffffffaa' }}>
          Boxes, buttons, inputs, alerts and more!
        </p>
      </div>
    </Hero>
    <Section>
      <Container>
        <H2 className="mt-none">Components List</H2>
        <Row spacing={[24, 12]} breakpoints={[769, 960]}>
          <div widths={[6, 4]}>
            <Info
              variant="light"
              color="primary"
              title="Inputs"
              icon={<FontAwesomeIcon icon="user" />}
            >
              <p>
                Inputs allow users to interact with your website. This includes
                buttons, text fields, checkboxes and more.
              </p>
              <Button link="/components/inputs" color="primary">
                See All
              </Button>
            </Info>
          </div>
          <div widths={[6, 4]}>
            <Info
              variant="light"
              color="secondary"
              title="Displays"
              icon={<FontAwesomeIcon icon="user" />}
            >
              <p>
                Display elements are used to display information to users in a
                prominent fashion. This includes alerts, notifications, chips
                and more.
              </p>
              <Button link="/components/display" color="secondary">
                See All
              </Button>
            </Info>
          </div>
          <div widths={[6, 4]} />
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

export default Components;
