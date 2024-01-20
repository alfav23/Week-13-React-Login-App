// creating class to bring together all components
import React from 'react';
import Navigation from './navbar';
import LoginForm from './loginForm';

let e = React.createElement;

export default class Page extends React.Component {
    render () {
        return e('div', {}, e(Navigation), e(LoginForm))
    }
}