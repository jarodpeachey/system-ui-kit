import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Section from '../components/Section';
import { Row, Column } from '@react-tiny-grid/core';
import H1 from '../components/H1';
import H2 from '../components/H2';
import H3 from '../components/H3';
import H4 from '../components/H4';
import H5 from '../components/H5';
import H6 from '../components/H6';
import Badge from '../components/Badge';
import { Link } from '@reach/router';
import Container from '../components/Container';
import Notification from '../components/Notification';
import Layout from '../Layout';
import { theme } from '../theme';
import SubTitle from '../components/SubTitle';
import Paragraph from '../components/Paragraph';
import Code from '../components/Code';
import Checkbox from '../components/Checkbox';
import Flex from '../components/Flex';

const Checkboxes = ({}) => {
  const [showNotificationOne, setShowNotificationOne] = useState(false);
  const [showNotificationTwo, setShowNotificationTwo] = useState(false);
  const [showNotificationThree, setShowNotificationThree] = useState(false);
  const [showNotificationFour, setShowNotificationFour] = useState(false);
  const [showNotificationFive, setShowNotificationFive] = useState(false);

  return (
    <Layout component>
      <Helmet>
        <title>Checkbox Component - System UI Kit</title>
      </Helmet>

      <Section>
        <Container>
          <H3>Basic Checkboxes</H3>
          <div
            style={{
              background: theme.color.gray.one,
              borderRadius: 3,
              padding: 16,
            }}
          >
            <Flex>
              <Checkbox checked className="mr-2"></Checkbox>
              <Checkbox checked color="primary" className="mr-2"></Checkbox>
              <Checkbox className="mr-2" color="secondary"></Checkbox>
              <Checkbox disabled className="mr-2" color="success"></Checkbox>
              <Checkbox
                disabled
                checked
                className="mr-2"
                color="error"
              ></Checkbox>
            </Flex>
          </div>

          <br />
          <H3>Color</H3>
          <div
            style={{
              background: theme.color.gray.one,
              borderRadius: 3,
              padding: 16,
            }}
          >
            {/* <Flex> */}
              <Checkbox checked className="mr-2"></Checkbox>
              <Checkbox checked color="primary" className="mr-2"></Checkbox>
              <Checkbox checked className="mr-2" color="secondary"></Checkbox>
              <Checkbox checked className="mr-2" color="success"></Checkbox>
              <Checkbox checked className="mr-2" color="error"></Checkbox>
            {/* </Flex> */}
          </div>
          <br />
          <H3>With Label</H3>
          <div
            style={{
              background: theme.color.gray.one,
              borderRadius: 3,
              padding: 16,
            }}
          >
            <Flex direction="vertical" hAlign="start">
              <Checkbox checked className="mr-2">
                Default
              </Checkbox>
              <br />
              <Checkbox checked color="primary" className="mr-2">
                Primary
              </Checkbox>
              <br />
              <Checkbox checked className="mr-2" color="secondary">
                Secondary
              </Checkbox>
              <br />
              <Checkbox checked className="mr-2" color="success">
                Success
              </Checkbox>
              <br />
              <Checkbox checked className="mr-2" color="error">
                Error
              </Checkbox>
              <br />
            </Flex>
          </div>
          <br />
          <H3>Props</H3>
          <Paragraph>
            Props available to customize the <Code>{'<Checkbox />'}</Code>{' '}
            component.
          </Paragraph>
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
                  <Code>color</Code>
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
                  Change the color of the checkbox active state. Options include{' '}
                  <Code>primary</Code>, <Code>secondary</Code>,{' '}
                  <Code>success</Code>, and <Code>error</Code>
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
                  <Code>checked</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  <Code>boolean</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  If true, the checkbox will default to <Code>checked</Code>
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
                  <Code>disabled</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  <Code>boolean</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  If true, the user will not be able to select the checkbox
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
                  <Code>onChange</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  <Code>function</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  A custom onChange function that returns the value of the
                  checkbox.
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

export default Checkboxes;
