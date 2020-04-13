import React from 'react'
import Aux from './../../hoc/auxiliary.js'
import cssStyles from './Layout.module.css'
import Toolbar from './../Toolbar/Toolbar';
import SideDrawer from '../Toolbar/SideDrawer/SideDrawer.js';

const Layout = props => (<Aux >
	<div className={cssStyles.content}>
		<Toolbar />
		<SideDrawer />
		 Backdrop</div>
	<main className={cssStyles.Asd}>{props.children}
	</main>
</Aux>);

export default Layout;
