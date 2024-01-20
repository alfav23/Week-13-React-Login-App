import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
// originally linked login and navbar individually, but can only render one argument
import Navigation from './components/navbar.js';
import LoginForm from './components/loginForm.js';
// created a file to hold both components and rendered just a single component called page
// imported page containing both login and navbar
import Page from './components/page.js';
import reportWebVitals from './reportWebVitals';

// replace content of div with id of 'root' with contents of Page class
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.createElement(Navigation, {}, null),
  // React.createElement(LoginForm, {}, null),
  React.createElement(Page, {}, null),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
