import React, { useState } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Helmet } from 'react-helmet';
import { theme } from '../theme';

import Section from '../components/Section';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Checkbox from '../components/Checkbox';
import { Row, Column } from '@react-tiny-grid/core';
import RadioButtons from '../components/RadioButtons';
import RadioButton from '../components/RadioButton';
import Toggle from '../components/Toggle';
import Select from '../components/Select';
import Option from '../components/Option';
import { Link } from '@reach/router';
import Container from '../components/Container';
import Hidden from '../components/Hidden';
import Layout from '../Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from '../components/Slider';
import Paragraph from '../components/Paragraph';
import H1 from '../components/H1';
import H2 from '../components/H2';
import H3 from '../components/H3';
import H4 from '../components/H4';
import H5 from '../components/H5';
import H6 from '../components/H6';
import ReactDatetime from 'react-datetime';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from '../components/DatePicker';
import Flex from '../components/Flex';
import Modal from '../components/Modal';
import Line from '../components/Line';
import Popover from '../components/Popover';

const Inputs = ({}) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Layout component>
      <Helmet>
        <title>Input Components - System UI Kit</title>
      </Helmet>
      <Section>
        <Container>
          <div
            style={{
              height: 60,
              width: '100%',
              background: theme.color.gray.one,
            }}
          ></div>
          <div
            style={{
              height: 60,
              width: '100%',
              background: theme.color.gray.two,
            }}
          ></div>
          <div
            style={{
              height: 60,
              width: '100%',
              background: theme.color.gray.three,
            }}
          ></div>
          <div
            style={{
              height: 60,
              width: '100%',
              background: theme.color.gray.four,
            }}
          ></div>
          <div
            style={{
              height: 60,
              width: '100%',
              background: theme.color.gray.five,
            }}
          ></div>
          <div
            style={{
              height: 60,
              width: '100%',
              background: theme.color.gray.six,
            }}
          ></div>
          <H2 className="mt-none" type="h2">
            Button
          </H2>
          <H4 type="h4" className="mb-none">
            Variant
          </H4>
          <Paragraph className="mt-2">
            The variant prop is used to change the appearance of a button.
          </Paragraph>
          <Button className="mr-2 mb-2" color="primary">
            Filled
          </Button>
          <Button className="mr-2 mb-2" color="primary" variant="outlined">
            Outlined
          </Button>
          <Button className="mr-2 mb-2" variant="plain" color="primary">
            Plain
          </Button>
          <br />
          <br />
          <H4 type="h4" className="mb-none">
            Size
          </H4>
          <Paragraph className="mt-2">
            The size prop is used to change the size of a button.
          </Paragraph>
          <Button className="mr-2 mb-2" color="primary" size="large">
            Large
          </Button>
          <Button className="mr-2 mb-2" color="primary">
            Default
          </Button>
          <Button className="mr-2 mb-2" color="primary" size="small">
            Small
          </Button>
          <br />
          <br />
          <H4 type="h4" className="mb-none">
            Color
          </H4>
          <Paragraph className="mt-2">
            The color prop is used to change the color of a button.
          </Paragraph>
          <Button className="mr-2 mb-2">Default</Button>
          <Button className="mr-2 mb-2" color="primary">
            Primary
          </Button>
          <Button className="mr-2 mb-2" color="secondary">
            Secondary
          </Button>
          <Button className="mr-2 mb-2" color="success">
            Success
          </Button>
          <Button className="mr-2 mb-2" color="error">
            Error
          </Button>
          <div />
          <Button className="mr-2 mb-2" variant="outlined">
            Default
          </Button>
          <Button className="mr-2 mb-2" variant="outlined" color="primary">
            Primary
          </Button>
          <Button className="mr-2 mb-2" variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button className="mr-2 mb-2" variant="outlined" color="success">
            Success
          </Button>
          <Button className="mr-2 mb-2" variant="outlined" color="error">
            Error
          </Button>
          <div />
          <Button className="mr-2 mb-2" variant="plain">
            Default
          </Button>
          <Button className="mr-2 mb-2" variant="plain" color="primary">
            Primary
          </Button>
          <Button className="mr-2 mb-2" variant="plain" color="secondary">
            Secondary
          </Button>
          <Button className="mr-2 mb-2" variant="plain" color="success">
            Success
          </Button>
          <Button className="mr-2 mb-2" variant="plain" color="error">
            Error
          </Button>
          <div
            style={{
              background: '#333',
              padding: 16,
              marginTop: 16,
              borderRadius: 3,
            }}
          >
            <Button className="mr-2 mb-2" color="white">
              White
            </Button>
            <Button className="mr-2 mb-2" color="primary">
              Primary
            </Button>
            <Button className="mr-2 mb-2" color="secondary">
              Secondary
            </Button>
            <Button className="mr-2 mb-2" color="success">
              Success
            </Button>
            <Button className="mr-2 mb-2" color="error">
              Error
            </Button>
            <div />
            <Button className="mr-2 mb-2" variant="outlined" color="white">
              White
            </Button>
            <Button className="mr-2 mb-2" variant="outlined" color="primary">
              Primary
            </Button>
            <Button className="mr-2 mb-2" variant="outlined" color="secondary">
              Secondary
            </Button>
            <Button className="mr-2 mb-2" variant="outlined" color="success">
              Success
            </Button>
            <Button className="mr-2 mb-2" variant="outlined" color="error">
              Error
            </Button>
            <div />
            <Button className="mr-2 mb-2" variant="plain" color="white">
              White
            </Button>
            <Button className="mr-2 mb-2" variant="plain" color="primary">
              Primary
            </Button>
            <Button className="mr-2 mb-2" variant="plain" color="secondary">
              Secondary
            </Button>
            <Button className="mr-2 mb-2" variant="plain" color="success">
              Success
            </Button>
            <Button className="mr-2 mb-2" variant="plain" color="error">
              Error
            </Button>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <H2 className="mt-none" type="h2">
            IconButton
          </H2>
          <Paragraph>
            The IconButton element extends all the props from the Button
            component. It also adds a new circle prop.
          </Paragraph>
          <H4 type="h4" className="mb-none">
            Variant
          </H4>
          <Paragraph className="mt-2">
            The variant prop is used to change the appearance of a button.
          </Paragraph>
          <IconButton className="mr-2 mb-2" color="primary">
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <IconButton circle className="mr-2 mb-2" color="primary">
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <IconButton
            circle
            className="mr-2 mb-2"
            color="primary"
            variant="outlined"
          >
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <IconButton
            circle
            className="mr-2 mb-2"
            variant="plain"
            color="primary"
          >
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <br />
          <br />
          <H4 type="h4" className="mb-none">
            Size
          </H4>
          <Paragraph className="mt-2">
            The size prop is used to change the size of a button.
          </Paragraph>
          <IconButton circle className="mr-2 mb-2" color="primary" size="large">
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <IconButton circle className="mr-2 mb-2" color="primary">
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <IconButton circle className="mr-2 mb-2" color="primary" size="small">
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <br />
          <br />
          <H4 type="h4" className="mb-none">
            Color
          </H4>
          <Paragraph className="mt-2">
            The color prop is used to change the color of a button.
          </Paragraph>
          <IconButton circle className="mr-2 mb-2">
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <IconButton circle className="mr-2 mb-2" color="primary">
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <IconButton circle className="mr-2 mb-2" color="secondary">
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <IconButton circle className="mr-2 mb-2" color="success">
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <IconButton circle className="mr-2 mb-2" color="error">
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <div />
          <IconButton circle className="mr-2 mb-2" variant="outlined">
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <IconButton
            circle
            className="mr-2 mb-2"
            variant="outlined"
            color="primary"
          >
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <IconButton
            circle
            className="mr-2 mb-2"
            variant="outlined"
            color="secondary"
          >
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <IconButton
            circle
            className="mr-2 mb-2"
            variant="outlined"
            color="success"
          >
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <IconButton
            circle
            className="mr-2 mb-2"
            variant="outlined"
            color="error"
          >
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <div />
          <IconButton circle className="mr-2 mb-2" variant="plain">
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <IconButton
            circle
            className="mr-2 mb-2"
            variant="plain"
            color="primary"
          >
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <IconButton
            circle
            className="mr-2 mb-2"
            variant="plain"
            color="secondary"
          >
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <IconButton
            circle
            className="mr-2 mb-2"
            variant="plain"
            color="success"
          >
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <IconButton
            circle
            className="mr-2 mb-2"
            variant="plain"
            color="error"
          >
            <FontAwesomeIcon icon="heart" />
          </IconButton>
          <div
            style={{
              background: '#333',
              padding: 16,
              marginTop: 16,
              borderRadius: 3,
            }}
          >
            <IconButton circle className="mr-2 mb-2" color="white">
              <FontAwesomeIcon icon="heart" />
            </IconButton>
            <IconButton circle className="mr-2 mb-2" color="primary">
              <FontAwesomeIcon icon="heart" />
            </IconButton>
            <IconButton circle className="mr-2 mb-2" color="secondary">
              <FontAwesomeIcon icon="heart" />
            </IconButton>
            <IconButton circle className="mr-2 mb-2" color="success">
              <FontAwesomeIcon icon="heart" />
            </IconButton>
            <IconButton circle className="mr-2 mb-2" color="error">
              <FontAwesomeIcon icon="heart" />
            </IconButton>
            <div />
            <IconButton
              circle
              className="mr-2 mb-2"
              variant="outlined"
              color="white"
            >
              <FontAwesomeIcon icon="heart" />
            </IconButton>
            <IconButton
              circle
              className="mr-2 mb-2"
              variant="outlined"
              color="primary"
            >
              <FontAwesomeIcon icon="heart" />
            </IconButton>
            <IconButton
              circle
              className="mr-2 mb-2"
              variant="outlined"
              color="secondary"
            >
              <FontAwesomeIcon icon="heart" />
            </IconButton>
            <IconButton
              circle
              className="mr-2 mb-2"
              variant="outlined"
              color="success"
            >
              <FontAwesomeIcon icon="heart" />
            </IconButton>
            <IconButton
              circle
              className="mr-2 mb-2"
              variant="outlined"
              color="error"
            >
              <FontAwesomeIcon icon="heart" />
            </IconButton>
            <div />
            <IconButton
              circle
              className="mr-2 mb-2"
              variant="plain"
              color="white"
            >
              <FontAwesomeIcon icon="heart" />
            </IconButton>
            <IconButton
              circle
              className="mr-2 mb-2"
              variant="plain"
              color="primary"
            >
              <FontAwesomeIcon icon="heart" />
            </IconButton>
            <IconButton
              circle
              className="mr-2 mb-2"
              variant="plain"
              color="secondary"
            >
              <FontAwesomeIcon icon="heart" />
            </IconButton>
            <IconButton
              circle
              className="mr-2 mb-2"
              variant="plain"
              color="success"
            >
              <FontAwesomeIcon icon="heart" />
            </IconButton>
            <IconButton
              circle
              className="mr-2 mb-2"
              variant="plain"
              color="error"
            >
              <FontAwesomeIcon icon="heart" />
            </IconButton>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <H2 className="mt-none" type="h2">
            Text Field
          </H2>
          <H4 type="h4">Size</H4>
          <Row spacing={[12]} breakpoints={[576, 769]}>
            <Column widths={[6, 3]}>
              <Input
                className="mb-2"
                size="xs"
                fullWidth
                placeholder="X-Small"
              />
              <div />
              <Input
                className="mb-2"
                size="small"
                fullWidth
                placeholder="Small"
              />
              <div />
              <Input className="mb-2" fullWidth placeholder="Default" />
              <div />
              <Input
                className="mb-2"
                size="large"
                fullWidth
                placeholder="Large"
              />
            </Column>
            <Column widths={[6, 3]}>
              <Input
                className="mb-2"
                variant="filled"
                size="xs"
                fullWidth
                placeholder="X-Small"
              />
              <div />
              <Input
                className="mb-2"
                variant="filled"
                size="small"
                fullWidth
                placeholder="Small"
              />
              <div />
              <Input
                className="mb-2"
                variant="filled"
                fullWidth
                placeholder="Default"
              />
              <div />
              <Input
                className="mb-2"
                variant="filled"
                size="large"
                fullWidth
                placeholder="Large"
              />
            </Column>
            <Column widths={[6, 3]}>
              <Input
                className="mb-2"
                size="xs"
                fullWidth
                placeholder="X-Small"
                icon={<FontAwesomeIcon icon="heart" />}
              />
              <div />
              <Input
                className="mb-2"
                size="small"
                fullWidth
                placeholder="Small"
                icon={<FontAwesomeIcon icon="heart" />}
              />
              <div />
              <Input
                className="mb-2"
                fullWidth
                placeholder="Default"
                icon={<FontAwesomeIcon icon="heart" />}
              />
              <div />
              <Input
                className="mb-2"
                size="large"
                fullWidth
                placeholder="Large"
                icon={<FontAwesomeIcon icon="heart" />}
              />
            </Column>
          </Row>
          <H4 type="h4">State</H4>
          <Row spacing={[12]} breakpoints={[576, 769]}>
            <Column widths={[6, 3]}>
              <Input className="mb-2" fullWidth placeholder="Default" />
              <div />
              <Input
                className="mb-2"
                fullWidth
                placeholder="Success"
                state="success"
              />
              <div />
              <Input
                className="mb-2"
                fullWidth
                placeholder="Error"
                state="error"
              />
            </Column>
            <Column widths={[6, 3]}>
              <Input
                className="mb-2"
                variant="filled"
                fullWidth
                placeholder="Default"
              />
              <div />
              <Input
                className="mb-2"
                variant="filled"
                fullWidth
                placeholder="Success"
                state="success"
              />
              <div />
              <Input
                className="mb-2"
                variant="filled"
                fullWidth
                placeholder="Error"
                state="error"
              />
            </Column>
            <Column widths={[6, 3]}>
              <Input
                className="mb-2"
                icon={<FontAwesomeIcon icon="heart" />}
                fullWidth
                placeholder="Default"
              />
              <div />
              <Input
                className="mb-2"
                icon={<FontAwesomeIcon icon="heart" />}
                fullWidth
                placeholder="Success"
                state="success"
              />
              <div />
              <Input
                className="mb-2"
                icon={<FontAwesomeIcon icon="heart" />}
                fullWidth
                placeholder="Error"
                state="error"
              />
            </Column>
          </Row>
          <H2>Text Area</H2>
          <TextArea />
          <Row breakpoints={[476, 960]} spacing={[32]}>
            <Column widths={[6, 4]}>
              <H3>Checkboxes</H3>
              <Checkbox id="test" value="unchecked">
                Unchecked
              </Checkbox>
              <Checkbox
                value="checked"
                checked
              >
                Checked
              </Checkbox>
              <Checkbox value="random">Random Checkbox</Checkbox>
              <Checkbox value="disabled" disabled>
                Disabled
              </Checkbox>
            </Column>
            <Column widths={[6, 4]}>
              <H3>Radio Buttons</H3>
              {/* <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              const x = document.querySelector('form.form').elements;
              console.log(x);

              Object.values(x).forEach((item) => console.log(item.checked));
            }}
          > */}
              <RadioButtons
                name="radio-buttons"
              >
                <RadioButton value="one">Radio button</RadioButton>
                <RadioButton value="two">Another radio button</RadioButton>
                <RadioButton disabled value="three">
                  Disabled. Go ahead, try and click me 😉
                </RadioButton>
              </RadioButtons>
              {/* <button type="submit">Submit</button>
          </form> */}
            </Column>
            <Column widths={[6, 4]}>
              <H3 color="primary">Toggle Switches</H3>
              <Toggle>Default</Toggle>
              <Toggle variant="filled">Filled</Toggle>
            </Column>
            <Column widths={[6, 4]}>
              <H3>Selects</H3>
              <Select>
                <Option value="one">One</Option>
                <Option value="two">Two</Option>
                <Option value="three">Three</Option>
              </Select>
              <Select variant="filled">
                <Option value="one">One</Option>
                <Option value="two">Two</Option>
                <Option value="three">Three</Option>
              </Select>
            </Column>
            <Column widths={[6, 4]}>
              <H3>Slider</H3>
              <Slider initial={82} max={100} />
              <Slider initial={28} color="secondary" max={100} />
              <Slider initial={63} color="success" max={100} />
              <Slider initial={47} color="error" max={100} />
            </Column>
          </Row>
          <H2>Date Pickers</H2>
          {/* <DatePicker
            selected={date}
            onChange={handleChange}
          /> */}
          <DatePicker
            showTodayButton={false}
            timePicker={false}
            variant="filled"
          />
          <H2>Modal</H2>
          <Button onClick={() => setModalOpen(!modalOpen)} color="primary">
            Open Modal
          </Button>
          {modalOpen && (
            <Modal
              toggleFunction={() => setModalOpen(!modalOpen)}
              title="Test Modal"
            >
              <Paragraph>This is a modal. It's really pretty sweet.</Paragraph>
              <Paragraph>
                You can do cool stuff with it, and add buttons to it at the
                bottom.
              </Paragraph>
              <Line />
              <Flex hAlign="space-between">
                <Button color="primary">Save</Button>
                <Button color="primary" variant="plain">
                  Cancel
                </Button>
              </Flex>
            </Modal>
          )}
          <Popover>
            <Button color="primary">Click Me</Button>
            <div>Test stuff</div>
          </Popover>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div
            style={{ background: '#f7f7f7', padding: 32, width: 'fit-content' }}
          >
            <div
              style={{
                background: 'white',
                padding: 20,
                borderRadius: 3,
                // boxShadow: theme.shadow.one,
                width: 'fit-content',
              }}
            >
              <Button
                color="primary"
                className="mr-3"
                customStyles="font-weight: 400;"
              >
                Click me
              </Button>
              <Button
                color="primary"
                className="mr-3"
                customStyles="font-weight: 500;"
              >
                Click me
              </Button>
              <Button color="primary" customStyles="font-weight: 600;">
                Click me
              </Button>
            </div>
          </div>
          {/* <Flex hAlign="flex-start"> */}
            <div
              style={{
                background: 'white',
                borderRadius: 3,
                width: '150px',
                height: '150px',
                marginBottom: 32,
                marginTop: 32,
                boxShadow: theme.shadow.one,
              }}
            ></div>
            <div
              style={{
                background: 'white',
                borderRadius: 3,
                width: '150px',
                height: '150px',
                marginBottom: 32,
                marginTop: 32,
                boxShadow: theme.shadow.two,
              }}
            ></div>
            <div
              style={{
                background: 'white',
                borderRadius: 3,
                width: '150px',
                height: '150px',
                marginBottom: 32,
                marginTop: 32,
                boxShadow: theme.shadow.three,
              }}
            ></div>
            <div
              style={{
                background: 'white',
                borderRadius: 3,
                width: '150px',
                height: '150px',
                marginBottom: 32,
                marginTop: 32,
                boxShadow: theme.shadow.four,
              }}
            ></div>
          {/* </Flex> */}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Container>
      </Section>
    </Layout>
  );
};

const renderInput = (props, openCalendar, closeCalendar) => {
  const clear = () => {
    props.onChange({ target: { value: '' } });
  };
  return (
    <div>
      <input {...props} />
      <button onClick={openCalendar}>open calendar</button>
      <button onClick={closeCalendar}>close calendar</button>
      <button onClick={clear}>clear</button>
    </div>
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

export default Inputs;
