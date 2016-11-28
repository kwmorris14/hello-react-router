import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, RouteHandler } from 'react-router'

export default class Home extends React.Component {

    render() {
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}
