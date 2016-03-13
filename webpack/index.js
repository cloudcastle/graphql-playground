import React from 'react';
import ReactDom from 'react-dom';
import {createHistory} from 'history';
import { Router, Route, browserHistory } from 'react-router'
import { RelayRouter } from 'react-router-relay';
import routes from './routes';

import App from './components/app';
import TrendsList from './components/trends_list'

const TrendsListQueries = {
  trendsList: () => Relay.QL`query { trendsList }`
};

const AppQueries = {
  user: () => Relay.QL`query { user }`
};

ReactDom.render((
  <RelayRouter history={browserHistory}>
    <Route
      component={App}
      queries={AppQueries}
    >
      <Route
        path='/'
        component={TrendsList}
        queries={TrendsListQueries}
      >
      </Route>

    </Route>
  </RelayRouter>
), document.getElementById('app'));
