import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import Portfolio from './Portfolio.js';
import NoMatch from './NoMatch.js';
import './index.css';

ReactDOM.render((
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="portfolio" component={Portfolio}/>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('root'));
