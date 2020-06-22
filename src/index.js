import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItem from './components/MenuItem';
import SubMenuItem from './components/SubMenuItem';
import SubMenu from './components/SubMenu';
import Tablet from './components/Tablet';
import Mobile from './components/Mobile';
import Menu from './components/Menu';
import MobileSubMenuItem from './components/MobileSubMenuItem';
import MobileMenuItem from './components/MobileMenuItem';
import MobileMenu from './components/MobileMenu';
import MobileSubMenu from './components/MobileSubMenu';
import Header from './components/Header';
import App from './App';
import './style.css';
import Inputs from './routes/inputs';
import Components from './routes/components';
import Display from './routes/display';


const Routes = ({}) => (
  <>
    <Router>
      <App path="/" />
      <Inputs path="/components/inputs" />
      <Display path="/components/display" />
      <Components path="/components" />
    </Router>
  </>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
