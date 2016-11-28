import {Home} from './components/home';
import {Page} from './components/page';
import {About} from './components/about';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, RouteHandler, DefaultRoute } from 'react-router';

ReactDOM.render((
    <Router history={browserHistory}>
        <DefaultRoute handler={Page} />
        <Route path="/" component={Home} handler={Home} />
        <Route path="/about" component={About} />
    </Router>
), document.getElementById('app'));