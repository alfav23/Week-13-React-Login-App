import React from 'react';

export default class LoginButton extends React.Component {
    render() {
        return React.createElement('button', {class:'btn btn-outline-success', id:"login-button"}, 'Login')
    }
}