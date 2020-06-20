import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import App from './App';
import './style.css';
import Components from './Components';
import InputComponents from './InputComponents';

const Routes = ({}) => (
  <Router>
    <App path="/" />
    <Components path="/components" />
    <InputComponents path="/inputs" />
  </Router>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
