import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { login, logout, signup } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  window.store = configureStore();
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
