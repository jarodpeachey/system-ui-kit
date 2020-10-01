import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@reach/router';
import { theme } from '../theme';

import Section from '../components/Section';
import Button from '../components/Button';
import { Row, Column } from '@react-tiny-grid/core';

import H1 from '../components/H1';
import H2 from '../components/H2';
import H3 from '../components/H3';
import H4 from '../components/H4';
import H5 from '../components/H5';
import H6 from '../components/H6';
import Alert from '../components/Alert';
import Code from '../components/Code';
import Info from '../components/Info';
import Container from '../components/Container';
import Layout from '../Layout';
import SubTitle from '../components/SubTitle';
import Paragraph from '../components/Paragraph';
import Input from '../components/Input';
import Flex from '../components/Flex';
import Span from '../components/Span';
import Card from '../components/Card';

const Example = () => (
  <Layout example>
    <Helmet>
      <title>System - React UI Kit</title>
    </Helmet>
    <Section spacing={64} background="#ffffff">
      <H1 display>
        Speed up development <Span color="primary">without sacrificing</Span>{' '}
        your brand
      </H1>
      <Paragraph customStyles="max-width: 600px;" size="lg">
        SystemUI is a fully-customizable UI kit that doesn't box you in with
        default styling. Speed up the development process, without losing your
        brand's image and personality.
      </Paragraph>
      <br />
      <Button color="primary">Build your UI Kit</Button>
    </Section>
    <Section background={theme.color.gray.one}>
      <Container>
        <Row spacing={[16]} breakpoints={[769, 960]}>
          <Column widths={[10, 8]} offsets={[1, 2]}>
            <H2 className="center">Take control of your UI kit</H2>
            <Paragraph className="center" customStyles="margin-bottom: 16px;">
              Whether you want to customize a few things or create your own
              fully-functional UI kit, System UI has you covered. Some of
              SystemUI's features include:
            </Paragraph>
          </Column>
        </Row>
        <Row spacing={[16]} breakpoints={[576, 1100]}>
          <Column widths={[6, 4]}>
            <Card>
              <Info
                title="Prebuilt Components"
                color="primary"
                icon={<FontAwesomeIcon icon="boxes" />}
              >
                <Paragraph>
                  SystemUI comes with 100+ components out of the box, making
                  creating your MVP easier than ever.
                </Paragraph>
                <Paragraph>
                  In fact, this entire website is built using SystemUI: no
                  custom code added!
                </Paragraph>
              </Info>
            </Card>
          </Column>
          <Column widths={[6, 4]}>
            <Card>
              <Info
                title="Custom Theming"
                color="primary"
                icon={<FontAwesomeIcon icon="palette" />}
              >
                <Paragraph>
                  Unlike other UI kits, SystemUI doesn't just let you customize
                  some colors; it let's you create your own UI kit.
                </Paragraph>
                <Paragraph>
                  Change everything from shadows, text, border radius,
                  backgrounds and more to make your UI kit fit your brand.
                </Paragraph>
              </Info>
            </Card>
          </Column>
          <Column widths={[6, 4]}>
            <Card>
              <Info
                title="Instance Customization"
                color="primary"
                icon={<FontAwesomeIcon icon="cog" />}
              >
                <Paragraph>
                  Can't get something to look right? SystemUI makes it easy to
                  customize each individual element at the source, allowing you
                  to create a pixel-perfect layout, every time.
                </Paragraph>
              </Info>
            </Card>
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
          <Button className="mt-4" color="primary" link="/components">
            View Components
          </Button>
        </Flex>
      </Container>
    </Section>
    <Section>
      <Container>
        <Row spacing={[16]} breakpoints={[769, 960]}>
          <Column widths={[10, 8]} offsets={[1, 2]}>
            <H2 className="center">Ready to create your own UI kit?</H2>
            <Paragraph className="center" customStyles="margin-bottom: 16px;">
              SystemUI is still in development. Sign up to be notified when it's
              released, and recieve a discount!
            </Paragraph>
          </Column>
        </Row>
        <Row spacing={[8, 8]} breakpoints={[576, 800]}>
          <Column widths={[9, 10]}>
            <Input
              color="success"
              size="large"
              fullWidth
              placeholder="user@mail.com"
              customStyles="height: 56px;"
            />
          </Column>
          <Column widths={[3, 2]}>
            <Button
              customStyles="height: 56px; padding-top: 0; padding-bottom: 0;"
              size="large"
              fullWidth
              color="primary"
            >
              Join
            </Button>
          </Column>
        </Row>
      </Container>
    </Section>
  </Layout>
);

export default Example;
