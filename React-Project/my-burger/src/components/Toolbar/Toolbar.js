import React from 'react';
import toolbarStyle from './Toolbar.module.css'
import Logo from '../Layout/Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems';
const Toolbar = (props) => {
    return (
        <header className={toolbarStyle.Toolbar}>
            <div>Menu</div>
            <div className={toolbarStyle.Logo}>
            <Logo />
            </div>
        <NavigationItems />
        </header >
    );
}

export default Toolbar;