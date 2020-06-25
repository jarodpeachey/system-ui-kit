import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Button from '../components/Button';
import Row from '../components/Row';
import Alert from '../components/Alert';
import Chip from '../components/Chip';
import { Link } from '@reach/router';
import Container from '../components/Container';
import Notification from '../components/Notification';
import Layout from '../Layout';
import H1 from '../components/H1';
import Heading from '../components/Heading';
import H3 from '../components/H3';
import H4 from '../components/H4';
import H5 from '../components/H5';
import H6 from '../components/H6';
import Paragraph from '../components/Paragraph';
import { theme } from '../theme';
import Code from '../components/Code';
import Hidden from '../components/Hidden';
import Flex from '../components/Flex';
import SubTitle from '../components/SubTitle';

const TypographyComponents = ({}) => {
  const [showNotificationOne, setShowNotificationOne] = useState(false);
  const [showNotificationTwo, setShowNotificationTwo] = useState(false);
  const [showNotificationThree, setShowNotificationThree] = useState(false);
  const [showNotificationFour, setShowNotificationFour] = useState(false);
  const [showNotificationFive, setShowNotificationFive] = useState(false);

  return (
    <Layout>
      <Helmet>
        <title>Typography Components - System UI Kit</title>
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
            Typography Components
          </Heading>
          <SubTitle type="h4" background="dark">
            Typography components allow you to display styled text that fits
            with the theme of your website.
          </SubTitle>
        </div>
      </Hero>
      <Section spacing="small">
        <Container>
          <Heading type="h3" className="mt-none">
            Typography
          </Heading>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <th
                style={{
                  textAlign: 'left',
                  border: `1px solid ${theme.color.gray.three}`,
                  padding: 16,
                }}
              >
                Tag
              </th>
              <th
                style={{
                  textAlign: 'left',
                  border: `1px solid ${theme.color.gray.three}`,
                  padding: 16,
                }}
              >
                Example
              </th>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  H2
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <H1 className="m-none">Heading One</H1>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  H2
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <Heading type="h2" className="m-none">
                    Heading Two
                  </Heading>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  H3
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <Heading type="h3" className="m-none">
                    Heading Three
                  </Heading>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  H4
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <Heading type="h4" className="m-none">
                    Heading Four
                  </Heading>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  H5
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <Heading type="h5" className="m-none">
                    Heading Five
                  </Heading>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  {'H6'}
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <Heading type="h6" className="m-none">
                    Heading Six
                  </Heading>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  {'Subtitle'}
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <SubTitle className="m-none">Default Subtitle</SubTitle>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  {'Title'}
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <Heading title type="h5" className="m-none">
                    Title
                  </Heading>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  {'Paragraph'}
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <Paragraph className="m-none">
                    This is a default paragraph.
                  </Paragraph>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  {'Primary'}
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <Paragraph color="primary" className="m-none">
                    This is a default paragraph.
                  </Paragraph>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  {'Secondary'}
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <Paragraph color="secondary" className="m-none">
                    This is a default paragraph.
                  </Paragraph>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  {'Success'}
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <Paragraph color="success" className="m-none">
                    This is a default paragraph.
                  </Paragraph>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  {'Error'}
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <Paragraph color="error" className="m-none">
                    This is a default paragraph.
                  </Paragraph>
                </td>
              </tr>
            </tbody>
          </table>
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

export default TypographyComponents;
