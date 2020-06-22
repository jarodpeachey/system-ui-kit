import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import App from './App';
import './style.css';
import Inputs from './routes/inputs';
import Components from './routes/components';
import Display from './routes/display';

const Routes = ({}) => (
  <Router>
    <App path="/" />
    <Inputs path="/components/inputs" />
    <Display path="/components/display" />
    <Components path="/components" />
  </Router>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
