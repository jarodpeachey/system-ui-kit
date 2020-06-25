import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Button from '../components/Button';
import Row from '../components/Row';
import Heading from '../components/Heading';
import Alert from '../components/Alert';
import Chip from '../components/Chip';
import { Link } from '@reach/router';
import Container from '../components/Container';
import Notification from '../components/Notification';
import Layout from '../Layout';
import { theme } from '../theme';
import SubTitle from '../components/SubTitle';

const Display = ({}) => {
  const [showNotificationOne, setShowNotificationOne] = useState(false);
  const [showNotificationTwo, setShowNotificationTwo] = useState(false);
  const [showNotificationThree, setShowNotificationThree] = useState(false);
  const [showNotificationFour, setShowNotificationFour] = useState(false);
  const [showNotificationFive, setShowNotificationFive] = useState(false);

  return (
    <Layout>
      <Helmet>
        <title>Display Components - System UI Kit</title>
      </Helmet>
      <Hero
        background={`linear-gradient(
        to right,
        ${theme.color.primary.main},
        ${theme.color.secondary.main}
      )`}
      >
        <div style={{ textAlign: 'center' }}>
          <Heading type="h1" background="dark" className="m-none">
            Display Components
          </Heading>
          <SubTitle type="h4" background="dark">
            Display components allow you to display information to a user in a
            prominent location.
          </SubTitle>
        </div>
      </Hero>
      <Section spacing="small">
        <Container>
          <Heading type="h2" className="m-none">Alert</Heading>
          <Heading type="h4" className="mb-none">Variant</Heading>
          <p className="mb-6">
            The variant prop is used to change the appearance of an alert.
          </p>
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
          <br />
          <br />
          {/* <Heading type="h4" className="mb-none">Size</Heading>
        <p className="mt-2">
          The size prop is used to change the size of a button.
        </p>
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
          <Heading type="h4" className="mb-none">Color</Heading>
          <p p className="mb-6">
            The color prop is used to change the color of an alert.
          </p>
          <Row spacing={[14, 0]} breakpoints={[769]}>
            <div widths={[6]}>
              <Alert>Default</Alert>
              <Alert variant="light">Default</Alert>
            </div>
            <div widths={[6]}>
              <Alert color="primary">Primary</Alert>
              <Alert color="primary" variant="light">
                Primary
              </Alert>
            </div>
            <div widths={[6]}>
              <Alert color="secondary">Secondary</Alert>
              <Alert color="secondary" variant="light">
                Secondary
              </Alert>
            </div>
            <div widths={[6]}>
              <Alert color="success">Success</Alert>
              <Alert color="success" variant="light">
                Success
              </Alert>
            </div>
            <div widths={[6]}>
              <Alert color="error">Error</Alert>
              <Alert color="error" variant="light">
                Error
              </Alert>
            </div>
          </Row>
        </Container>
      </Section>
      <Section spacing="small">
        <Container>
          <Heading type="h2" className="m-none">Notification</Heading>
          <p className="mb-6">
            The Notification element allows you to display a notification that
            disappears after a certain amount of time.
          </p>
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
            variant="outlined"
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
            variant="outlined"
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
            variant="outlined"
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
            variant="outlined"
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
      <Section spacing="small">
        <Container>
          <Heading type="h2" className="m-none">Chip</Heading>
          <Chip>Default</Chip>
          <Chip color="primary">Primary</Chip>
          <Chip color="secondary">Secondary</Chip>
          <Chip color="success">Success</Chip>
          <Chip color="error">Error</Chip>
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

export default Display;
