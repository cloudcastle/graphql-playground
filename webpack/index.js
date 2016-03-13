import React from 'react';
import ReactDom from 'react-dom';
import {createHistory} from 'history';
import { Router, Route, browserHistory } from 'react-router'
import { RelayRouter } from 'react-router-relay';
import routes from './routes';

import App from './components/app';

const UserQueries = {
  user: () => Relay.QL`query UserQuery { user }`
};

ReactDom.render((
  <RelayRouter history={browserHistory}>
    <Route
      path="/" component={App}
      queries={UserQueries}
    >
    </Route>
  </RelayRouter>
), document.getElementById('app'));
