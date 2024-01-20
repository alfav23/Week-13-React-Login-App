import React from 'react';

let e = React.createElement;

export default class UsernameInput extends React.Component {
    render() {
        return e( 'div', 
            {},
            e('label', {class:"text-white p-3", for:"username"}, 'Username:'),
            e('input', {id:"username", placeholder: "Enter Username"})
        )
    }
}