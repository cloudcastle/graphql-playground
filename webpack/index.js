import React from 'react';
import ReactDom from 'react-dom';
import {createHistory} from 'history';
import { Router, browserHistory } from 'react-router'
import routes from './routes';


ReactDom.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('app'));

