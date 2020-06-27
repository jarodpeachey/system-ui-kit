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
import Text from '../components/Text';
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
        ${theme.color.primary},
        ${theme.color.secondary}
      )`}
      >
        <div style={{ textAlign: 'center' }}>
          <H1 type="h1" darkBackground className="m-none">
            Typography Components
          </H1>
          <SubTitle type="h4" darkBackground>
            Typography components allow you to display styled text that fits
            with the theme of your website.
          </SubTitle>
        </div>
      </Hero>
      <Section spacing="small">
        <Container>
          <H3 type="h3" className="mt-none">
            Typography
          </H3>
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
                  <H1 type="h1" className="m-none">
                    Heading One
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
                  <H2 type="h2" className="m-none">
                    Heading Two
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
                  <H3 type="h3" className="m-none">
                    Heading Three
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
                  <H4 type="h4" className="m-none">
                    Heading Four
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
                  <H5 type="h5" className="m-none">
                    Heading Five
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
                  {'H6'}
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <H6 type="h6" className="m-none">
                    Heading Six
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
                  <H5 title type="h5" className="m-none">
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
                  {'Muted'}
                </td>
                <td
                  style={{
                    textAlign: 'left',
                    border: `1px solid ${theme.color.gray.three}`,
                    padding: 16,
                  }}
                >
                  <Paragraph muted className="m-none">
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
          <br />
          <br />
          <br />
          <Row spacing={[0, 6]} breakpoints={[769]}>
            <div widths={[2]}>
              <Text display="title" type="small" color="text-three">
                <Text type="strong">Title</Text>
              </Text>
            </div>
            <div widths={[10]}>
              <H5 type="h5" className="m-none" display="title">
                About
              </H5>
            </div>
          </Row>
          <br />
          <Row spacing={[0, 6]} breakpoints={[769]}>
            <div widths={[2]}>
              <Text display="title" type="small" color="text-three">
                <Text type="strong">Heading</Text>
              </Text>
            </div>
            <div widths={[10]}>
              <H2 type="h2" className="m-none">
                The Future of <Text color="success">React Development</Text>
              </H2>
            </div>
          </Row>
          <br />
          <Row spacing={[0, 6]} breakpoints={[769]}>
            <div widths={[2]}>
              <Text display="title" type="small" color="text-three">
                <Text type="strong">Subtitle</Text>
              </Text>
            </div>
            <div widths={[10]}>
              <SubTitle className="m-none">
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
              <Text display="title" type="small" color="text-three">
                <Text type="strong">Paragraph</Text>
              </Text>
            </div>
            <div widths={[10]}>
              <Paragraph className="m-none">
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
              background: theme.color.heading,
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
              background: theme.color.text.one,
              color: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            One: Custom modifier that can be passed to a text component via the
            color prop {'<Text color="text-one" />'}
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',

              padding: 16,
              background: theme.color.text.two,
              color: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Two: Custom modifier that can be passed to a text component via the
            color prop {'<Text color="text-two" />'}
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',

              padding: 16,
              background: theme.color.text.three,
              color: theme.color.text.one,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Three: Custom modifier that can be passed to a text component via
            the color prop {'<Text color="text-three" />'}
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

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
