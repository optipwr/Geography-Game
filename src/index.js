import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} >
			<Route path="/question/:questionNumber" component={Question}/>

		</Route>

	</Router>,
	document.getElementById('root')
);
