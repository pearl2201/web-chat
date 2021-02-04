import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './history';
import configureStore from './store/configureStore';

const store = configureStore({});
window.store = store;

const message = 'Welcome to chat';
const App = () => (
	<Provider store={store}>
		<Router history={history}>
			<div className="App">
				<h1>{message}</h1>
			</div>
		</Router>
	</Provider>
);

export default hot(module)(App);
