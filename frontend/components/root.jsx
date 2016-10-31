import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SearchContainer from './map/search_container';
import SessionFormContainer from './session/session_form_container';


const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const state = store.getState();
    if(state.session.currentUser) replace('/');
  };

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={SearchContainer}/>
          <Route path="/login"
             component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/signup"
            component={SessionFormContainer}
            onEnter={_redirectIfLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
