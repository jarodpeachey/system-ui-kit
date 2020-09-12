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
import Chip from '../components/Chip';
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

const GridRoute = ({}) => {
  return (
    <Layout component>
      <Helmet>
        <title>Grid Component - System UI</title>
      </Helmet>
      <Section>
        <Container>
          <H2 className="mb-3">Grid System</H2>
          <Paragraph>
            The grid system consists of two components, Row and Column. They
            allow you to create responsive layouts.
          </Paragraph>
          <div
            style={{
              fontFamily: 'monospace',
              background: theme.color.gray.nine,
              padding: 16,
              borderRadius: 3,
              color: 'white',
              margin: '16px 0',
            }}
          >
            import Row from "system-ui";
          </div>
          <H3 className="mb-none">Usage</H3>
          <div
            style={{
              fontFamily: 'monospace',
              background: theme.color.gray.nine,
              padding: 16,
              borderRadius: 3,
              color: 'white',
              margin: '16px 0',
            }}
          >
            &lt;Row breakpoints=&#123;&#91;769, 960&#93;&#125;
            spacing=&#123;&#91;x, y&#93;&#125;&gt;
            <br />
            &#127;&#127;&#127;&lt;div widths=&#123;&#91;6, 4&#93;&#125; /&gt;
            <br />
            &#127;&#127;&#127;&lt;div widths=&#123;&#91;6, 4&#93;&#125; /&gt;
            <br />
            &#127;&#127;&#127;&lt;div widths=&#123;&#91;6, 4&#93;&#125; /&gt;
            <br />
            &lt;/Row&gt;
          </div>
          <Row
            maxColumnSize={12}
            breakpoints={[769]}
            spacing={[8]}
          >
            <Column widths={[1]}>
              <Demo>1</Demo>
            </Column>
            <Column widths={[11]}>
              <Demo>11</Demo>
            </Column>
            <Column widths={[2]}>
              <Demo>2</Demo>
            </Column>
            <Column widths={[10]}>
              <Demo>10</Demo>
            </Column>
            <Column widths={[3]}>
              <Demo>3</Demo>
            </Column>
            <Column widths={[9]}>
              <Demo>9</Demo>
            </Column>
            <Column widths={[4]}>
              <Demo>4</Demo>
            </Column>
            <Column widths={[8]}>
              <Demo>8</Demo>
            </Column>
            <Column widths={[5]}>
              <Demo>5</Demo>
            </Column>
            <Column widths={[7]}>
              <Demo>7</Demo>
            </Column>
            <Column widths={[6]}>
              <Demo>6</Demo>
            </Column>
            <Column widths={[6]}>
              <Demo>6</Demo>
            </Column>
            <Column widths={[7]}>
              <Demo>7</Demo>
            </Column>
            <Column widths={[5]}>
              <Demo>5</Demo>
            </Column>
            <Column widths={[8]}>
              <Demo>8</Demo>
            </Column>
            <Column widths={[4]}>
              <Demo>4</Demo>
            </Column>
            <Column widths={[9]}>
              <Demo>9</Demo>
            </Column>
            <Column widths={[3]}>
              <Demo>3</Demo>
            </Column>
            <Column widths={[10]}>
              <Demo>10</Demo>
            </Column>
            <Column widths={[2]}>
              <Demo>2</Demo>
            </Column>
            <Column widths={[11]}>
              <Demo>11</Demo>
            </Column>
            <Column widths={[1]}>
              <Demo>1</Demo>
            </Column>
          </Row>
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
                  <Code>breakpoints</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  <Code>array</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  Set up to two breakpoints using an array
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
                  <Code>array</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  Set the gutter width for the x and y axis {'[x, y]'}
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
                  <Code>flexDirections</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  <Code>array</Code>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: '14px 8px',
                  }}
                >
                  Set the flex direction for each breakpoints. The first array item will be used at the first breakpoints array item
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

export default GridRoute;
