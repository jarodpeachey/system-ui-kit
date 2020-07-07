import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Button from '../components/Button';
import Row from '../components/Row';
import H1 from '../components/H1';
import H2 from '../components/H2';
import H3 from '../components/H3';
import H4 from '../components/H4';
import H5 from '../components/H5';
import H6 from '../components/H6';
import Alert from '../components/Alert';
import Chip from '../components/Chip';
import { Link } from '@reach/router';
import Container from '../components/Container';
import Notification from '../components/Notification';
import Layout from '../Layout';
import { theme } from '../theme';
import SubTitle from '../components/SubTitle';
import Paragraph from '../components/Paragraph';
import Code from '../components/Code';

const SectionRoute = ({}) => {
  const [showNotificationOne, setShowNotificationOne] = useState(false);
  const [showNotificationTwo, setShowNotificationTwo] = useState(false);
  const [showNotificationThree, setShowNotificationThree] = useState(false);
  const [showNotificationFour, setShowNotificationFour] = useState(false);
  const [showNotificationFive, setShowNotificationFive] = useState(false);

  return (
    <Layout component>
      <Helmet>
        <title>Alert Component - System UI Kit</title>
      </Helmet>
      <Section>
        <Container>
          <H1 className="mb-none">Section</H1>
          <Paragraph>
            The section component allows you to seperate content vertically
            using padding and background color.
          </Paragraph>
          <div
            style={{
              fontFamily: 'monospace',
              background: theme.color.gray.nine,
              padding: 16,
              borderRadius: 3,
              color: 'white',
              margin: '32px 0',
            }}
          >
            {"import Section from 'system-ui';"}
          </div>
          <H3 className="mb-none">Usage</H3>
          <div
            style={{
              fontFamily: 'monospace',
              background: theme.color.gray.nine,
              padding: 16,
              borderRadius: 3,
              color: 'white',
              margin: '32px 0',
            }}
          >
            {'<Section spacing="lg" background="#f7f7f7" />'}
          </div>
          <Section spacing="lg" background="#f7f7f7">
            <div className="center">A large section</div>
          </Section>
          <H3 className="mb-none">Props</H3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <th
                style={{
                  textAlign: 'left',
                  border: `1px solid ${theme.color.gray.three}`,
                  padding: '14px 8px',
                }}
              >
                Prop
              </th>
              <th
                style={{
                  textAlign: 'left',
                  border: `1px solid ${theme.color.gray.three}`,
                  padding: '14px 8px',
                }}
              >
                Type
              </th>
              <th
                style={{
                  textAlign: 'left',
                  border: `1px solid ${theme.color.gray.three}`,
                  padding: '14px 8px',
                }}
              >
                Description
              </th>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  <Code>className</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  <Code>string</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  Pass a custom class name to style using CSS
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  <Code>id</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  <Code>string</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  Pass a custom id
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  <Code>customStyles</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  <Code>object</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  Pass a custom styles object. Accepts styles in the format of{' '}
                  <Code>styled-components</Code>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  <Code>spacing</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  <Code>string</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  Changes the vertical padding. Options include <Code>lg</Code>,{' '}
                  <Code>md</Code>
                  and <Code>sm</Code>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  <Code>background</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  <Code>string</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  Change the background color of the section. Accepts any valid
                  CSS.
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
  background: ${(props) => props.theme.color.primary};
`;

export default SectionRoute;
