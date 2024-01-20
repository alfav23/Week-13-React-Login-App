import React from 'react';

let e = React.createElement;

export default class PasswordInput extends React.Component {
    render(){
        return e('div',
            {},
            e('label', {class:"text-white p-3", for:'password'}, 'Password:'),
            e('input', {id:'password', type:"password", placeholder:"Enter Password"})
        )
    }
}