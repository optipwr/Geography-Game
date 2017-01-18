import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import { Router, Route, hashHistory } from 'react-router'
import Questions from './Questions';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} >
			<Route path="/question/:questionNumber" component={Questions}/>
		</Route>

	</Router>,
	document.getElementById('root')
);
