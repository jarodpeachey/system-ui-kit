import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Row, Column } from '@react-tiny-grid/core';
import { Link } from '@reach/router';
import Section from '../components/Section';
import Button from '../components/Button';
import Alert from '../components/Alert';
import Badge from '../components/Badge';
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
import SubTitle from '../components/SubTitle';
import Strong from '../components/Strong';
import Span from '../components/Span';

const TypographyComponents = ({}) => (
  <Layout component component>
    <Helmet>
      <title>Typography Components - System UI Kit</title>
    </Helmet>
    <Section>
      <Container>
        <H1 type="h3" className="">
          Typography
        </H1>
        <Paragraph>
          Typography elements allow you to style text to fit the theme of your
          site.
        </Paragraph>
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
                H1
              </td>
              <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
              >
                <H1 type="h1" className="">
                  Heading
                  </H1>
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
                <H2 type="h2" className="">
                  Heading
                  </H2>
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
                <H3 type="h3" className="">
                  Heading
                  </H3>
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
                <H4 type="h4" className="">
                  Heading
                  </H4>
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
                <H5 type="h5" className="">
                  Heading
                  </H5>
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
                H6
              </td>
              <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
              >
                <H6 type="h6" className="">
                  Heading
                  </H6>
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
                Subtitle
              </td>
              <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
              >
                <SubTitle className="">Default Subtitle</SubTitle>
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
                Title
              </td>
              <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
              >
                <H5 title type="h5" className="">
                  Title
                  </H5>
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
                Muted
              </td>
              <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
              >
                <Paragraph muted className="">
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
                Paragraph
              </td>
              <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
              >
                <Paragraph className="">
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
                Primary
              </td>
              <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
              >
                <Paragraph color="primary" className="">
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
                Secondary
              </td>
              <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
              >
                <Paragraph color="secondary" className="">
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
                Success
              </td>
              <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
              >
                <Paragraph color="success" className="">
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
                Error
              </td>
              <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
              >
                <Paragraph color="error" className="">
                  This is a default paragraph.
                  </Paragraph>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <br />
        <Row spacing={[0, 6]} breakpoints={[769]}>
          <div widths={[2]}>
            <Paragraph size="sm">
              <Strong>Title</Strong>
            </Paragraph>
          </div>
          <div widths={[10]}>
            <H5 type="h5" className="">
              About
            </H5>
          </div>
        </Row>
        <br />
        <Row spacing={[0, 6]} breakpoints={[769]}>
          <div widths={[2]}>
            <Paragraph size="sm">
              <Strong>Heading</Strong>
            </Paragraph>
          </div>
          <div widths={[10]}>
            <H2 type="h2" className="">
              The Future of
              {' '}
              <Span color="success">React Development</Span>
            </H2>
          </div>
        </Row>
        <br />
        <Row spacing={[0, 6]} breakpoints={[769]}>
          <div widths={[2]}>
            <Paragraph size="sm">
              <Strong>Subtitle</Strong>
            </Paragraph>
          </div>
          <div widths={[10]}>
            <SubTitle className="">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that’s a responsibility that
              I have, to push possibilities, to show people, this is the level
              that things could be at.
            </SubTitle>
          </div>
        </Row>
        <br />
        <Row spacing={[0, 6]} breakpoints={[769]}>
          <div widths={[2]}>
            <Paragraph size="sm">
              <Strong>Paragraph</Strong>
            </Paragraph>
          </div>
          <div widths={[10]}>
            <Paragraph className="">
              With System, you'll be able to create a beautiful website with
              no effort at all, allowing you to focus on the important stuff,
              like marketing and developing your product.
            </Paragraph>
          </div>
        </Row>
        <br />
        <br />
        <br />
        <H4 type="h4">Color</H4>
        <Paragraph>
          System comes with customizable colors for headings, paragraphs, and
          three modifier colors.
        </Paragraph>
        <div
            style={{
              width: '100%',
              display: 'flex',

              padding: 16,
              background: theme.color.text.heading,
              color: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
        >
          Heading: Used for headings and buttons
        </div>
        <div
            style={{
              width: '100%',
              display: 'flex',

              padding: 16,
              background: theme.color.paragraph,
              color: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
        >
          Paragraph: Used for paragraph tags
        </div>
        <div
            style={{
              width: '100%',
              display: 'flex',

              padding: 16,
              background: theme.color.one,
              color: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
        >
          One: Custom modifier that can be passed to a text component via the
          color prop
          {' '}
          {'<Text color="text-one" />'}
        </div>
        <div
            style={{
              width: '100%',
              display: 'flex',

              padding: 16,
              background: theme.color.two,
              color: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
        >
          Two: Custom modifier that can be passed to a text component via the
          color prop
          {' '}
          {'<Text color="text-two" />'}
        </div>
        <div
            style={{
              width: '100%',
              display: 'flex',

              padding: 16,
              background: theme.color.three,
              color: theme.color.one,
              alignItems: 'center',
              justifyContent: 'center',
            }}
        >
          Three: Custom modifier that can be passed to a text component via
          the color prop
          {' '}
          {'<Text />'}
        </div>
      </Container>
    </Section>
  </Layout>
);

const Demo = styled.div`
  width: '100%'%;
  padding: 1text-align: center;
  border-radius: 3px;
  color: white !important;
  * {
    color: white !important;
  }
  background: ${(props) => props.theme.color.primary};
`;

export default TypographyComponents;
