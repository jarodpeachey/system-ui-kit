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
import H2 from '../components/H2';
import H3 from '../components/H3';
import H4 from '../components/H4';
import H5 from '../components/H5';
import H6 from '../components/H6';
import Paragraph from '../components/Paragraph';
import { theme } from '../theme';
import Code from '../components/Code';
import Hidden from '../components/Hidden';
import Flex from '../components/Flex';

const TypographyComponents = ({}) => {
  const [showNotificationOne, setShowNotificationOne] = useState(false);
  const [showNotificationTwo, setShowNotificationTwo] = useState(false);
  const [showNotificationThree, setShowNotificationThree] = useState(false);
  const [showNotificationFour, setShowNotificationFour] = useState(false);
  const [showNotificationFive, setShowNotificationFive] = useState(false);

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
            Typography Components
          </h1>
          <p style={{ color: '#ffffffaa' }}>
            Layout components allow you to add text to your website.
          </p>
        </div>
      </Hero>
      <Section spacing="small">
        <Container>
          <H3 className="mt-none">Headings</H3>
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
                  {'<H1 />'}
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
                  {'<H2 />'}
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <H2 className="m-none">Heading Two</H2>
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
                  {'<H3 />'}
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <H3 className="m-none">Heading Three</H3>
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
                  {'<H4 />'}
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <H4 className="m-none">Heading Four</H4>
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
                  {'<H5 />'}
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <H5 className="m-none">Heading Five</H5>
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
                  {'<H6 />'}
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <H6 className="m-none">Heading Six</H6>
                </td>
              </tr>
            </tbody>
          </table>
        </Container>
      </Section>
      <Section spacing="small">
        <Container>
          <H4 className="mt-none">Accents</H4>
          <H5 className="m-none" title>
            Heading Title
          </H5>
          <H5 className="m-none" color="secondary" title>
            Heading Title
          </H5>
          <H5 className="m-none" color="success" title>
            Heading Title
          </H5>
          <H5 className="m-none" color="error" title>
            Heading Title
          </H5>
        </Container>
      </Section>
      <Section spacing="small">
        <Container>
          <H4 className="mt-none">Paragraphs</H4>
          <Paragraph>This is a really cool paragraph of words.</Paragraph>
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
