import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';

import About from './modules/About';
import Repos from './modules/Repos';
import App  from "./app.js"

render((
  <Router history={browserHistory}>
    	<Route path="/" component={App}/>
    	<Route path="/repos" component={Repos}/>
    	<Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'))
