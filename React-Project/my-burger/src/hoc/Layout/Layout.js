import React from 'react'
import Aux from '../auxiliary/auxiliary'
import cssStyles from './Layout.module.css'
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/Toolbar/SideDrawer/SideDrawer.js';

class Layout extends React.Component {

	state = {
		showSideDrawer: false
	}

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false })
	}
	toggleSideDrawer = () => {
		this.setState((prevState) => { return { showSideDrawer: !prevState.showSideDrawer } })
	}
	render() {

		return (
			<Aux >
				<div className={cssStyles.content}>
					<Toolbar toggleSideDrawer={this.toggleSideDrawer} />
					<SideDrawer close={this.sideDrawerClosedHandler} open={this.state.showSideDrawer} />
				</div>
				<main className={cssStyles.Asd}>{this.props.children}
				</main>
			</Aux>
		);
	}
}

export default Layout;
