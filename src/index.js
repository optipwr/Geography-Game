import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Questions from './Questions';
import Instructions from './Instructions';
import AsiaMode from './AsiaMode';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="play" component={App} />
		<Route path="/" component={Instructions} />
		<Route path="asia-mode" component={AsiaMode} />


	</Router>,
	document.getElementById('root')
);
