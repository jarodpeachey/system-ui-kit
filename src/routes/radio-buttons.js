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
import RadioButton from '../components/RadioButton';
import Flex from '../components/Flex';
import RadioButtons from '../components/RadioButtons';
import Strong from '../components/Strong';

const RadioButtonsPage = ({}) => {
  const [showNotificationOne, setShowNotificationOne] = useState(false);
  const [showNotificationTwo, setShowNotificationTwo] = useState(false);
  const [showNotificationThree, setShowNotificationThree] = useState(false);
  const [showNotificationFour, setShowNotificationFour] = useState(false);
  const [showNotificationFive, setShowNotificationFive] = useState(false);

  return (
    <Layout component>
      <Helmet>
        <title>Radio Button Component - System UI Kit</title>
      </Helmet>
      <Section spacing="small">
        <Container>
          <H3>Basic Radio Buttons</H3>
          <div
            style={{
              background: theme.color.gray.one,
              borderRadius: 3,
              padding: 16,
            }}
          >
            <Flex>
              <RadioButtons inline color="primary" name="radios-one">
                <RadioButton checked className=""></RadioButton>
                <RadioButton
                  checked
                  color="primary"
                  className=""
                ></RadioButton>
                <RadioButton className="" color="secondary"></RadioButton>
                <RadioButton
                  disabled
                  className=""
                  color="success"
                ></RadioButton>
                <RadioButton
                  disabled
                  className=""
                  color="error"
                ></RadioButton>
              </RadioButtons>
            </Flex>
          </div>

          <br />
          <H3>Color</H3>
          <p>
            You can change the color of the entire Radio button group, or
            individually.
          </p>
          <Paragraph>
            <strong>Group</strong>
          </Paragraph>
          <div
            style={{
              background: theme.color.gray.one,
              borderRadius: 3,
              padding: '16px 32px',
            }}
          >
            <Flex hAlign="start">
              <div className="">
                <Strong
                  className=" display-block"
                  display="title"
                  color="default"
                >
                  <Paragraph size="sm">Default</Paragraph>
                </Strong>
                <RadioButtons color="default" name="default">
                  <RadioButton checked className="">
                    Option one
                  </RadioButton>
                  <RadioButton checked color="default" className="">
                    Option two
                  </RadioButton>
                  <RadioButton checked className="">
                    Option three
                  </RadioButton>
                </RadioButtons>
              </div>
              <div className="">
                <Strong
                  className=" display-block"
                  display="title"
                  color="primary"
                >
                  <Paragraph size="sm" type="small">Primary</Paragraph>
                </Strong>
                <RadioButtons color="primary" name="primary">
                  <RadioButton checked className="">
                    Option one
                  </RadioButton>
                  <RadioButton checked color="primary" className="">
                    Option two
                  </RadioButton>
                  <RadioButton checked className="">
                    Option three
                  </RadioButton>
                </RadioButtons>
              </div>
              <div className="">
                <Strong
                  className=" display-block"
                  display="title"
                  color="secondary"
                >
                  <Paragraph size="sm" type="small">Secondary</Paragraph>
                </Strong>
                <RadioButtons color="secondary" name="secondary">
                  <RadioButton checked className="">
                    Option one
                  </RadioButton>
                  <RadioButton checked color="secondary" className="">
                    Option two
                  </RadioButton>
                  <RadioButton checked className="">
                    Option three
                  </RadioButton>
                </RadioButtons>
              </div>
              <div className="">
                <Strong
                  className=" display-block"
                  display="title"
                  color="success"
                >
                  <Paragraph size="sm" type="small">Success</Paragraph>
                </Strong>
                <RadioButtons color="success" name="success">
                  <RadioButton checked className="">
                    Option one
                  </RadioButton>
                  <RadioButton checked color="success" className="">
                    Option two
                  </RadioButton>
                  <RadioButton checked className="">
                    Option three
                  </RadioButton>
                </RadioButtons>
              </div>
              <div className="">
                <Strong
                  className=" display-block"
                  display="title"
                  color="error"
                >
                  <Paragraph size="sm" type="small">Error</Paragraph>
                </Strong>
                <RadioButtons color="error" name="error">
                  <RadioButton checked className="">
                    Option one
                  </RadioButton>
                  <RadioButton checked color="error" className="">
                    Option two
                  </RadioButton>
                  <RadioButton checked className="">
                    Option three
                  </RadioButton>
                </RadioButtons>
              </div>
            </Flex>
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
              <RadioButton checked className="">
                Default
              </RadioButton>
              <br />
              <RadioButton checked color="primary" className="">
                Primary
              </RadioButton>
              <br />
              <RadioButton checked className="" color="secondary">
                Secondary
              </RadioButton>
              <br />
              <RadioButton checked className="" color="success">
                Success
              </RadioButton>
              <br />
              <RadioButton checked className="" color="error">
                Error
              </RadioButton>
              <br />
            </Flex>
          </div>
          <br />
          <H3>Props</H3>
          <Paragraph>
            Props available to customize the <Code>{'<RadioButton />'}</Code>{' '}
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

export default RadioButtonsPage;
