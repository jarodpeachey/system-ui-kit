import React, { useState } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Column } from '@react-tiny-grid/core';
import { theme } from '../theme';

import Section from '../components/Section';
import H2 from '../components/H2';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import Info from '../components/Info';
import Container from '../components/Container';
import Layout from '../Layout';
import SubTitle from '../components/SubTitle';
import Paragraph from '../components/Paragraph';
import Alert from '../components/Alert';
import H5 from '../components/H5';
import H3 from '../components/H3';
import Flex from '../components/Flex';
import Checkbox from '../components/Checkbox';
import Badge from '../components/Badge';
import Code from '../components/Code';
import Collapse from '../components/Collapse';
import DatePicker from '../components/DatePicker';
import Dropdown from '../components/Dropdown';
import DropdownItem from '../components/DropdownItem';
import Hidden from '../components/Hidden';

const Components = () => (
  <Layout component>
    <Helmet>
      <title>Components - System UI Kit</title>
    </Helmet>
    <Section>
      <Container>
        <H2 className="mt-none">Alert</H2>
        <H5 className="mb-3">Color</H5>
        <Alert>This is a default alert</Alert>
        <Alert color="primary">This is a primary alert</Alert>
        <Alert color="secondary">This is a secondary alert</Alert>
        <Alert color="success">This is a success alert</Alert>
        <Alert color="error">This is an error alert</Alert>
        <br />
        <H5 className="mb-3">Light</H5>
        <Alert variant="light">This is a default alert</Alert>
        <Alert variant="light" color="primary">
          This is a primary alert
        </Alert>
        <Alert variant="light" color="secondary">
          This is a secondary alert
        </Alert>
        <Alert variant="light" color="success">
          This is a success alert
        </Alert>
        <Alert variant="light" color="error">
          This is an error alert
        </Alert>
        <br />
        <H5 className="mb-3">With Icon</H5>
        <Alert
          icon={<FontAwesomeIcon icon="exclamation-circle" />}
          color="error"
        >
          Error
        </Alert>
        <br />
        <H5 className="mb-3">Closable</H5>
        <Alert icon={<FontAwesomeIcon icon="bell" />} close>
          This is an alert that you can close.
        </Alert>
        <br />
        <br />
        <H2>Badge</H2>
        <H5 className="mb-3">Color</H5>
        <Badge>Default</Badge>
        <Badge color="dark">Dark</Badge>
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="error">Error</Badge>
        <H5 className="mb-3">Rounded</H5>
        <Badge rounded>Default</Badge>
        <Badge rounded color="dark">
          Dark
        </Badge>
        <Badge rounded color="primary">
          Primary
        </Badge>
        <Badge rounded color="secondary">
          Secondary
        </Badge>
        <Badge rounded color="success">
          Success
        </Badge>
        <Badge rounded color="error">
          Error
        </Badge>
        <br />
        <br />
        <H2>Button</H2>
        <H5 className="mb-3">Color</H5>
        <Button className="mr-2">Default</Button>
        <Button className="mr-2" color="dark">
          Dark
        </Button>
        <Button className="mr-2" color="primary">
          Primary
        </Button>
        <Button className="mr-2" color="secondary">
          Secondary
        </Button>
        <Button className="mr-2" color="success">
          Success
        </Button>
        <Button className="mr-2" color="error">
          Error
        </Button>
        <br />
        <H5 className="mb-3">Outlined</H5>
        <Button className="mr-2" variant="outlined">
          Default
        </Button>
        <Button className="mr-2" variant="outlined" color="dark">
          Dark
        </Button>
        <Button className="mr-2" variant="outlined" color="primary">
          Primary
        </Button>
        <Button className="mr-2" variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button className="mr-2" variant="outlined" color="success">
          Success
        </Button>
        <Button className="mr-2" variant="outlined" color="error">
          Error
        </Button>
        <br />
        <H5 className="mb-3">Plain</H5>
        <Button className="mr-2" variant="plain">
          Default
        </Button>
        <Button className="mr-2" variant="plain" color="primary">
          Primary
        </Button>
        <Button className="mr-2" variant="plain" color="secondary">
          Secondary
        </Button>
        <Button className="mr-2" variant="plain" color="success">
          Success
        </Button>
        <Button className="mr-2" variant="plain" color="error">
          Error
        </Button>
        <br />
        <H5 className="mb-3">Sizes</H5>
        <Paragraph>
          You can choose between small, default and large button sizes.
        </Paragraph>
        <Button className="mr-2" color="primary" size="large">
          Large
        </Button>
        <Button className="mr-2" color="primary">
          Default
        </Button>
        <Button className="mr-2" color="primary" size="small">
          Small
        </Button>
        <br />
        <br />
        <H2>Checkbox</H2>
        <H5 className="mb-3">Basic Checkboxes</H5>
        <div
          style={{
            background: theme.color.gray.one,
            borderRadius: 3,
            padding: 16,
          }}
        >
          <Flex>
            <Checkbox checked className="mr-2" />
            <Checkbox checked color="primary" className="mr-2" />
            <Checkbox className="mr-2" color="secondary" />
            <Checkbox disabled className="mr-2" color="success" />
            <Checkbox disabled checked className="mr-2" color="error" />
          </Flex>
        </div>
        <H5 className="mb-3">With Label</H5>
        <div
          style={{
            background: theme.color.gray.one,
            borderRadius: 3,
            padding: 16,
          }}
        >
          <Checkbox
            onChange={(checked) => console.log(checked)}
            checked
            className="mr-2"
          >
            Default
          </Checkbox>
          <br />
          <Checkbox
            onChange={(checked) => console.log(checked)}
            checked
            color="primary"
            className="mr-2"
          >
            Primary
          </Checkbox>
          <br />
          <Checkbox
            onChange={(checked) => console.log(checked)}
            checked
            className="mr-2"
            color="secondary"
          >
            Secondary
          </Checkbox>
          <br />
          <Checkbox
            onChange={(checked) => console.log(checked)}
            checked
            className="mr-2"
            color="success"
          >
            Success
          </Checkbox>
          <br />
          <Checkbox
            onChange={(checked) => console.log(checked)}
            checked
            className="mr-2"
            color="error"
          >
            Error
          </Checkbox>
          <br />
        </div>
        <br />
        <br />
        <H2>Collapse</H2>
        <Collapse padding={12}>
          <div>
            <H5 className="m-none" customStyles="padding: 16px;">
              This is the title
            </H5>
          </div>
          <div>
            <Paragraph customStyles="padding: 16px;" className="mt-none">
              This is the content
            </Paragraph>
          </div>
        </Collapse>
        <br />
        <br />
        <H2>Date Picker</H2>
        <DatePicker
          showTodayButton={false}
          timePicker={false}
          variant="filled"
        />
        <br />
        <br />
        <H2>Dropdown</H2>
        <Dropdown align="left">
          <Button color="primary">
            <Flex hAlign="center" vAlign="center">
              Open Dropdown
            </Flex>
          </Button>
          <span>
            <DropdownItem>Item One</DropdownItem>
            <DropdownItem>Item Two</DropdownItem>
          </span>
        </Dropdown>
        <br />
        <br />
        <H2>Flex</H2>
        <Flex justifyContent="center">
          <div style={{ padding: 16, marginRight: 8, background: 'orange' }}>
            Test
          </div>
          <div style={{ padding: 16, marginRight: 8, background: 'orange' }}>
            Test
          </div>
          <div style={{ padding: 16, marginRight: 8, background: 'orange' }}>
            Test
          </div>
          <div style={{ padding: 16, marginRight: 8, background: 'orange' }}>
            Test
          </div>
        </Flex>
        <br />
        <br />
        <H2>Hidden</H2>
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
        <br />
        <br />
        <H2>IconButton</H2>
        <H5 className="mb-3">Color</H5>
        <IconButton className="mr-2">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <IconButton rounded className="mr-2" color="dark">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <IconButton className="mr-2" color="primary">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <IconButton rounded className="mr-2" color="secondary">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <IconButton className="mr-2" color="success">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <IconButton className="mr-2" color="error">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <br />
        <H5 className="mb-3">Outlined</H5>
        <IconButton rounded className="mr-2" variant="outlined">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <IconButton className="mr-2" variant="outlined" color="dark">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <IconButton className="mr-2" variant="outlined" color="primary">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <IconButton
          rounded
          className="mr-2"
          variant="outlined"
          color="secondary"
        >
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <IconButton className="mr-2" variant="outlined" color="success">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <IconButton rounded className="mr-2" variant="outlined" color="error">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <br />
        <H5 className="mb-3">Plain</H5>
        <IconButton className="mr-2" variant="plain">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <IconButton className="mr-2" variant="plain" color="primary">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <IconButton rounded className="mr-2" variant="plain" color="secondary">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <IconButton className="mr-2" variant="plain" color="success">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <IconButton className="mr-2" variant="plain" color="error">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <br />
        <H5 className="mb-3">Sizes</H5>
        <Paragraph>
          You can choose between small, default and large button sizes.
        </Paragraph>
        <IconButton className="mr-2" color="primary" size="large">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <IconButton className="mr-2" color="primary">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <IconButton className="mr-2" color="primary" size="small">
          <FontAwesomeIcon icon="check" />
        </IconButton>
        <br />
        <br />
        <H2>Info</H2>
        <Row spacing={[12]} breakpoints={[576, 960]}>
          <Column widths={[6, 4]}>
            <Info
              color="primary"
              icon={<FontAwesomeIcon icon="check" />}
              variant="filled"
              title="Info One"
            >
              <Paragraph>This is an information box. Look at it.</Paragraph>
            </Info>
          </Column>
          <Column widths={[6, 4]}>
            <Info
              color="primary"
              icon={<FontAwesomeIcon icon="check" />}
              variant="filled"
              title="Info One"
            >
              <Paragraph>This is an information box. Look at it.</Paragraph>
            </Info>
          </Column>
          <Column widths={[6, 4]}>
            <Info
              color="primary"
              icon={<FontAwesomeIcon icon="check" />}
              variant="filled"
              title="Info One"
            >
              <Paragraph>This is an information box. Look at it.</Paragraph>
            </Info>
          </Column>
          <Column widths={[6, 4]}>
            <Info
              color="primary"
              icon={<FontAwesomeIcon icon="check" />}
              variant="filled"
              title="Info One"
            >
              <Paragraph>This is an information box. Look at it.</Paragraph>
            </Info>
          </Column>
          <Column widths={[6, 4]}>
            <Info
              color="primary"
              icon={<FontAwesomeIcon icon="check" />}
              variant="filled"
              title="Info One"
            >
              <Paragraph>This is an information box. Look at it.</Paragraph>
            </Info>
          </Column>
          <Column widths={[6, 4]}>
            <Info
              color="primary"
              icon={<FontAwesomeIcon icon="check" />}
              variant="filled"
              title="Info One"
            >
              <Paragraph>This is an information box. Look at it.</Paragraph>
            </Info>
          </Column>
        </Row>
      </Container>
    </Section>
  </Layout>
);

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

export default Components;
