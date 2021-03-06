import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { login, logout, signup } from './actions/session_actions';
import Root from './components/root.jsx';

document.addEventListener("DOMContentLoaded", () => {
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  let store;
  if (window.currentUser ) {
    store = configureStore({session : {
      currentUser: {
        username: window.currentUser.username,
        id: window.currentUser.id
      },
      errors: [],
    }});
  } else {
    store = configureStore();
  }

  window.store = store;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
