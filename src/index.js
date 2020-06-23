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

const Routes = ({}) => (
  <>
    <Router>
      <App path="/" />
      <Inputs path="/components/inputs" />
      <LayoutComponents path="/components/layout" />
      <NavigationComponents path="/components/navigation" />
      <Display path="/components/display" />
      <Components path="/components" />
    </Router>
  </>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
