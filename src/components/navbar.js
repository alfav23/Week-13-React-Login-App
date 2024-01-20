import React from 'react';
import Links from './navLinks.js'; 

let e = React.createElement;

export default class Navigation extends React.Component {
    render() {
        return e('div',
            {id:"navigation"}, 
            e('nav', {class:"navbar navbar-expand-sm navbar-secondary bg-secondary text-white ps-3"}, "React App", e(Links))
        )
    }
}