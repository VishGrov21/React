import React from 'react'
import Aux from './../../hoc/auxiliary.js'
import cssStyles from './Layout.module.css'

const Layout = props => (<Aux className={cssStyles.Asd}>
	<div className={cssStyles.Asd}>ToolBar, Side Drawer, Backdrop</div>
	<main className={cssStyles.Asd}>{props.children}
	</main>
</Aux>);

export default Layout;
