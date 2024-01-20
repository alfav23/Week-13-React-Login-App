import React from 'react';

let e = React.createElement;

export default class Links extends React.Component {
    render() {
        return e('div',
            {id:"nav-links"}, 
            e("ul", {class: "navbar-nav"}, e("li", {class: "nav-item active", id:"home"}, e("a", {class:"nav-link", href:'#'}, "Home"))),
            e("ul", {class: "navbar-nav"}, e("li", {class: "nav-item", id:"about"}, e("a", {class:"nav-link", href:'#'}, "About"))),
            e("ul", {class: "navbar-nav"}, e("li", {class: "nav-item", id:"contact"}, e("a", {class:"nav-link", href:'#'}, "Contact")))
            )
    }
}