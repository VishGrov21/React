import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Layout/Logo/Logo';
import classes from './SideDrawer.module.css';
const SideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <NavigationItems />
        </div>
    );
}

export default SideDrawer;