import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
import Badge from '../components/Badge';
import { Link } from '@reach/router';
import Container from '../components/Container';
import Notification from '../components/Notification';
import Layout from '../Layout';
import { theme } from '../theme';
import SubTitle from '../components/SubTitle';
import Paragraph from '../components/Paragraph';

const Display = ({}) => {
  const [showNotificationOne, setShowNotificationOne] = useState(false);
  const [showNotificationTwo, setShowNotificationTwo] = useState(false);
  const [showNotificationThree, setShowNotificationThree] = useState(false);
  const [showNotificationFour, setShowNotificationFour] = useState(false);
  const [showNotificationFive, setShowNotificationFive] = useState(false);

  return (
    <Layout component>
      <Helmet>
        <title>Display Components - System UI Kit</title>
      </Helmet>
      <Section>
        <Container>
          <H2 type="h2" className="m-none">
            Alert
          </H2>
          <Alert color="primary">Default</Alert>
          <Alert color="primary" variant="light">
            Light
          </Alert>
          <Alert
            icon={<FontAwesomeIcon icon="bell" />}
            color="primary"
            variant="light"
          >
            With icon
          </Alert>
          <Alert close color="primary">
            With close button
          </Alert>
          <br />
          {/* <Heading type="h4" className="mb-none">Size</Heading>
        <Paragraph className="mt-2">
          The size prop is used to change the size of a button.
        </Paragraph>
        <Button
          className="mr-2" color="primary" size="large">
          Large
        </Button>
        <Button
          className="mr-2" color="primary">Default</Button>
        <Button
          className="mr-2" color="primary" size="small">
          Small
        </Button>
        <br />
        <br /> */}
          <H4 type="h4" className="mb-none">
            Color
          </H4>
          <Paragraph p>
            The color prop is used to change the color of an alert.
          </Paragraph>
          <Row spacing={[14, 0]} breakpoints={[769]}>
            <Column widths={[6]}>
              <Alert icon={<FontAwesomeIcon icon="bell" />}>Default</Alert>
              <Alert icon={<FontAwesomeIcon icon="bell" />} variant="light">
                Default
              </Alert>
            </Column>
            <Column widths={[6]}>
              <Alert icon={<FontAwesomeIcon icon="heart" />} color="primary">
                Primary
              </Alert>
              <Alert
                icon={<FontAwesomeIcon icon="heart" />}
                color="primary"
                variant="light"
              >
                Primary
              </Alert>
            </Column>
            <Column widths={[6]}>
              <Alert icon={<FontAwesomeIcon icon="globe" />} color="secondary">
                Secondary
              </Alert>
              <Alert
                icon={<FontAwesomeIcon icon="globe" />}
                color="secondary"
                variant="light"
              >
                Secondary
              </Alert>
            </Column>
            <Column widths={[6]}>
              <Alert icon={<FontAwesomeIcon icon="check" />} color="success">
                Success
              </Alert>
              <Alert
                icon={<FontAwesomeIcon icon="check" />}
                color="success"
                variant="light"
              >
                Success
              </Alert>
            </Column>
            <Column widths={[6]}>
              <Alert
                icon={<FontAwesomeIcon icon="exclamation-circle" />}
                color="error"
              >
                Error
              </Alert>
              <Alert
                icon={<FontAwesomeIcon icon="exclamation-circle" />}
                color="error"
                variant="light"
              >
                Error
              </Alert>
            </Column>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <H2 type="h2" className="m-none">
            Notification
          </H2>
          <Paragraph>
            The Notification element allows you to display a notification that
            disappears after a certain amount of time.
          </Paragraph>
          <Button
            className="mr-2"
            onClick={() => {
              setShowNotificationOne(true);
              setTimeout(() => {
                setShowNotificationOne(false);
              }, 2500);
            }}
          >
            Open
          </Button>
          <Button
            className="mr-2"
            color="primary"
            onClick={() => {
              setShowNotificationTwo(true);
              setTimeout(() => {
                setShowNotificationTwo(false);
              }, 2500);
            }}
          >
            Open Primary
          </Button>
          <Button
            className="mr-2"
            color="secondary"
            onClick={() => {
              setShowNotificationThree(true);
              setTimeout(() => {
                setShowNotificationThree(false);
              }, 2500);
            }}
          >
            Open Secondary
          </Button>
          <Button
            className="mr-2"
            color="success"
            onClick={() => {
              setShowNotificationFour(true);
              setTimeout(() => {
                setShowNotificationFour(false);
              }, 2500);
            }}
          >
            Open Success
          </Button>
          <Button
            className="mr-2"
            color="error"
            onClick={() => {
              setShowNotificationFive(true);
              setTimeout(() => {
                setShowNotificationFive(false);
              }, 2500);
            }}
          >
            Open Error
          </Button>
          {showNotificationOne && <Notification>A notification</Notification>}
          {showNotificationTwo && (
            <Notification color="primary">
              A notification, in the primary color.
            </Notification>
          )}
          {showNotificationThree && (
            <Notification color="secondary">Some information</Notification>
          )}
          {showNotificationFour && (
            <Notification color="success">Yay! You did it!</Notification>
          )}
          {showNotificationFive && (
            <Notification color="error">Something went wrong.</Notification>
          )}
        </Container>
      </Section>
      <Section>
        <Container>
          <H2 type="h2" className="m-none">
            Badge
          </H2>
          <Badge>Default</Badge>
          <Badge color="primary">Primary</Badge>
          <Badge color="secondary">Secondary</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="error">Error</Badge>
          <H4 className="mb-none">Rounded</H4>
          <Badge rounded>Default</Badge>
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

export default Display;
