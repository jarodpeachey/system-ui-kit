import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Button from '../components/Button';
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
import Heading from '../components/Heading';
import Flex from '../components/Flex';
import Hidden from '../components/Hidden';

const HiddenRoute = ({}) => {
  return (
    <Layout component>
      <Helmet>
        <title>Hidden Component - System UI</title>
      </Helmet>
      <Section>
        <Container>
          <H2 className="mb-3">Hidden</H2>
          <Paragraph>
            The Hidden component allows you to hide and display content based on
            the screen width.
          </Paragraph>
          <div
            style={{
              fontFamily: 'monospace',
              background: theme.color.gray.six,
              padding: 16,
              borderRadius: 3,
              color: 'white',
              margin: '16px 0',
            }}
          >
            import Hidden from "system-ui";
          </div>
          <H3 className="mb-none">Usage</H3>
          <div
            style={{
              fontFamily: 'monospace',
              background: theme.color.gray.six,
              padding: 16,
              borderRadius: 3,
              color: 'white',
              margin: '16px 0',
            }}
          >
            {'<Hidden show={769} hide={1200} />'}
          </div>
          <Paragraph>
            The Hidden component accepts to props: show and hide. You can even
            pass in both at once.
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
          <H3>Props</H3>
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
                  <Code>show</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  <Code>number</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  Set the breakpoint at which the element is shown.
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
                  <Code>hidden</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  <Code>number</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  Set the breakpoint at which the element is hidden.
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
  padding: 16px;
  text-align: center;
  border-radius: 3px;
  margin: 0px 8px;
  color: white !important;
  * {
    color: white !important;
  }
  background: ${(props) => props.theme.color.primary};
`;

export default HiddenRoute;
