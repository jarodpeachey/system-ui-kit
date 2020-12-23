import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Section from '../components/Section';
import Button from '../components/Button';
import { Row, Column } from '@react-tiny-grid/core';
import Alert from '../components/Alert';
import Badge from '../components/Badge';
import { Link } from '@reach/router';
import Container from '../components/Container';
import Notification from '../components/Notification';
import Layout from '../Layout';
import { theme } from '../theme';
import Code from '../components/Code';
import Hidden from '../components/Hidden';
import Flex from '../components/Flex';
import SubTitle from '../components/SubTitle';
import Paragraph from '../components/Paragraph';
import H1 from '../components/H1';
import H2 from '../components/H2';
import H3 from '../components/H3';
import H4 from '../components/H4';
import H5 from '../components/H5';
import H6 from '../components/H6';

const LayoutComponents = ({}) => {
  const [showNotificationOne, setShowNotificationOne] = useState(false);
  const [showNotificationTwo, setShowNotificationTwo] = useState(false);
  const [showNotificationThree, setShowNotificationThree] = useState(false);
  const [showNotificationFour, setShowNotificationFour] = useState(false);
  const [showNotificationFive, setShowNotificationFive] = useState(false);

  return (
    <Layout component>
      <Helmet>
        <title>Layout Components - System UI Kit</title>
      </Helmet>
      <Section>
        <Container>
          <H2 type="h2" className="">Grid</H2>
          <Row breakpoints={[769]} spacing={[8]}>
            <div widths={[1]}>
              <Demo>1</Demo>
            </div>
            <div widths={[11]}>
              <Demo>11</Demo>
            </div>
            <div widths={[2]}>
              <Demo>2</Demo>
            </div>
            <div widths={[10]}>
              <Demo>10</Demo>
            </div>
            <div widths={[3]}>
              <Demo>3</Demo>
            </div>
            <div widths={[9]}>
              <Demo>9</Demo>
            </div>
            <div widths={[4]}>
              <Demo>4</Demo>
            </div>
            <div widths={[8]}>
              <Demo>8</Demo>
            </div>
            <div widths={[5]}>
              <Demo>5</Demo>
            </div>
            <div widths={[7]}>
              <Demo>7</Demo>
            </div>
            <div widths={[6]}>
              <Demo>6</Demo>
            </div>
            <div widths={[6]}>
              <Demo>6</Demo>
            </div>
            <div widths={[7]}>
              <Demo>7</Demo>
            </div>
            <div widths={[5]}>
              <Demo>5</Demo>
            </div>
            <div widths={[8]}>
              <Demo>8</Demo>
            </div>
            <div widths={[4]}>
              <Demo>4</Demo>
            </div>
            <div widths={[9]}>
              <Demo>9</Demo>
            </div>
            <div widths={[3]}>
              <Demo>3</Demo>
            </div>
            <div widths={[10]}>
              <Demo>10</Demo>
            </div>
            <div widths={[2]}>
              <Demo>2</Demo>
            </div>
            <div widths={[11]}>
              <Demo>11</Demo>
            </div>
            <div widths={[1]}>
              <Demo>1</Demo>
            </div>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <H2 type="h2" className="">Flex</H2>
          <Paragraph>
            The <Code>{'<Flex />'}</Code> component allows you to add a simple
            flex element. Also known as Grid Lite.
          </Paragraph>
          <Code
            style={{
              marginTop: 32,
              marginBottom: 8,
              display: 'block',
              width: 'fit-content',
            }}
          >
            {'<Flex>...</Flex>'}
          </Code>
          <Flex
            style={{ height: 200, background: theme.color.gray.one }}
            direction="horizontal"
          >
            <Button color="primary" className="">
              Test
            </Button>
            <Button color="primary" className="">
              Test
            </Button>
            <Button color="primary" className="">
              Test
            </Button>
          </Flex>
          <Code
            style={{
              marginTop: 32,
              marginBottom: 8,
              display: 'block',
              width: 'fit-content',
            }}
          >
            {'<Flex vAlign="stretch" hAlign="space-evenly">...</Flex>'}
          </Code>
          <Flex
            style={{ height: 200, background: theme.color.gray.one }}
            direction="horizontal"
            vAlign="stretch"
            hAlign="space-evenly"
          >
            <Button color="primary" className="">
              Test
            </Button>
            <Button color="primary" className="">
              Test
            </Button>
            <Button color="primary" className="">
              Test
            </Button>
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container>
          <H2 type="h2" className="">Container</H2>
          <Paragraph>
            The container element can be set to 4 preset sizes: xs, sm, md and
            lg. The max-width can also be set using a custom prop:{' '}
            <Code>{'maxWidth={900}'}</Code>
          </Paragraph>
          <div
            
            style={{
              background: 'white',
              border: '1px solid #efefef',
              borderRadius: 3,
              height: 300,
              width: '100%',
            }}
          >
            <Container
              style={{
                height: '100%',
              }}
            >
              <div
                style={{
                  background: `${theme.color.primary}10`,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <H5 type="h5" className="">Default</H5>
              </div>
            </Container>
          </div>
          <div
            style={{
              background: 'white',
              border: '1px solid #efefef',
              borderRadius: 3,
              height: 300,
              width: '100%',
            }}
          >
            <Container
              style={{
                height: '100%',
              }}
              size="sm"
            >
              <div
                style={{
                  background: `${theme.color.primary}10`,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <H5 type="h5" className="">Small</H5>
              </div>
            </Container>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <H2 type="h2" className="">Hidden</H2>
          <Paragraph>
            The <Code>{'<Hidden />'}</Code> component allows you to create
            elements that are only shown on mobile, tablet, or desktop.
          </Paragraph>
          <div
            style={{
              background: 'white',
              border: '1px solid #efefef',
              borderRadius: 3,
              height: 300,
              width: '100%',
              padding: 16,
            }}
          >
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
          </div>
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

export default LayoutComponents;
