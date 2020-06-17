import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout.js'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.js'
import CheckOut from './containers/CheckOut/CheckOut';
import Orders from './containers/Orders/Orders';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import SignUp from './containers/Authenticate/Sign-up';
import Logout from './containers/Authenticate/Logout';
import { connect } from 'react-redux';
import * as authActions from './store/actions/index'
require('dotenv').config()

class App extends React.Component {

	componentDidMount() {
		this.props.onPageReload();
	}
	render() {
		let route = (
			<Switch>
				<Route path="/" exact component={BurgerBuilder} />
				<Route path="/sign-up" component={SignUp} />
				<Redirect to="/" />
			</Switch>
		);
		if (this.props.isAuthenticated) {
			route = (
				<Switch>
					<Route path="/" exact component={BurgerBuilder} />
					<Route path="/my-orders" component={Orders} />
					<Route path="/checkout" component={CheckOut} />
					<Route path="/sign-up" component={SignUp} />
					<Route path="/log-out" component={Logout} />
				</Switch>
			);
		}
		return (<div >
			<Layout>
				{route}
			</Layout>
		</div>);
	}
}
function mapDispatchToProps(dispatch) {
	return {
		onPageReload: () => dispatch(authActions.reloadAuthVerify())
	}
}
function mapStateToProps(state) {
	return {
		isAuthenticated: state.authReducer.tokenId !== null
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
