import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import App from './App';
import './style.css';
import Inputs from './routes/inputs';
import Components from './routes/components';
import Display from './routes/display';
import LayoutComponents from './routes/layout';
import NavigationComponents from './routes/navigation';
import TypographyComponents from './routes/typography';
import Alerts from './routes/alerts';
import Buttons from './routes/buttons';
import Checkboxes from './routes/checkboxes';
import RadioButtonsPage from './routes/radio-buttons';
import Example from './routes/test';
import SectionRoute from './routes/section';
import ContainerRoute from './routes/container';
import GridRoute from './routes/grid';
import FlexRoute from './routes/flex';
import HiddenRoute from './routes/hidden';
import HeaderRoute from './routes/header';
import MenuRoute from './routes/menu';

const Routes = ({}) => (
  <>
    <Router>
      <App path="/" />
      <Inputs path="/components/inputs" />
      <LayoutComponents path="/components/layout" />
      <NavigationComponents path="/components/navigation" />
      <TypographyComponents path="/components/typography" />
      <Display path="/components/display" />
      <Alerts path="/components/alert" />
      <Buttons path="/components/button" />
      <Checkboxes path="/components/checkbox" />
      <RadioButtonsPage path="/components/radio-button" />
      <Components path="/components" />
      <Example path="/test" />
      <SectionRoute path="/components/section" />
      <ContainerRoute path="/components/container" />
      <GridRoute path="/components/grid" />
      <FlexRoute path="/components/flex" />
      <HiddenRoute path="/components/hidden" />
      <HeaderRoute path="/components/header" />
      <MenuRoute path="/components/menu" />
    </Router>
  </>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
