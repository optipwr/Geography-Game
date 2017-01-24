import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import { Router, Route, hashHistory } from 'react-router'
import Instructions from './Instructions';


// Routing location
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="play" component={App} />
		<Route path="/" component={Instructions} />
	</Router>,
	document.getElementById('root')
);
