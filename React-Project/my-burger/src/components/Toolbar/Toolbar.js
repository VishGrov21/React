import React from 'react';
import toolbarStyle from './Toolbar.module.css'
import Logo from '../../components/Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {
    return (
        <header className={toolbarStyle.Toolbar}>
            <DrawerToggle clicked={props.toggleSideDrawer} />
            <div className={toolbarStyle.Logo}>
                <Logo />
            </div>
            <nav className={toolbarStyle.DesktopOnly}><NavigationItems isAuth={props.isAuth} /></nav>
        </header >
    );
}

export default Toolbar;