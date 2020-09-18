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
import Header from '../components/Header';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

const MenuRoute = ({}) => {
  return (
    <Layout component>
      <Helmet>
        <title>Menu Component - System UI</title>
      </Helmet>
      <Section>
        <Container>
          <H2 className="mb-3">Menu</H2>
          <Paragraph>
            The Menu component is used to allow the user to navigate the website
            on desktop.
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
            import Menu from "system-ui";
          </div>
          <H3 className="mb-none">Usage</H3>
          <div
            style={{
              borderRadius: 3,
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0,
              border: '1px solid #88888840',
              marginTop: 16,
              padding: 12,
              borderBottom: 'none'
            }}
          >
            <Menu>
              <MenuItem>
                <Link to="/">Home</Link>
              </MenuItem>
            </Menu>
          </div>
          <div
            style={{
              fontFamily: 'monospace',
              background: theme.color.gray.nine,
              padding: 16,
              borderRadius: 3,
              color: 'white',
              margin: '0 0 16px 0',
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0,
            }}
          >
            {`<Menu>`} <br />
            <span style={{ marginLeft: 12 }} />
            {`  <MenuItem>`} <br />
            <span style={{ marginLeft: 12 }} />
            <span style={{ marginLeft: 12 }} />
            {`    ...`} <br />
            <span style={{ marginLeft: 12 }} />
            {`  </MenuItem>`} <br />
            {`</Menu>`} <br />
          </div>
          <H3 className="mb-none"></H3>
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

export default MenuRoute;
