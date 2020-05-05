import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout.js'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.js'
import CheckOut from './containers/CheckOut/CheckOut';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (<div >
		<Layout>
			<Switch>
				<Route path="/checkout" component={CheckOut} />
				<Route path="/" exact component={BurgerBuilder} />
			</Switch>
		</Layout>
	</div>);
}

export default App;
