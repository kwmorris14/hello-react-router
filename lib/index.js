'use strict';

var _home = require('./components/home');

var _page = require('./components/page');

var _about = require('./components/about');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(_reactRouter.DefaultRoute, { handler: _page.Page }),
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _home.Home, handler: _home.Home }),
    _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _about.About })
), document.getElementById('app'));