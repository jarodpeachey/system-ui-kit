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
    </Router>
  </>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
