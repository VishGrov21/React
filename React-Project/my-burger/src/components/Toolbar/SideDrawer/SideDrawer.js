import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../../ui/backdrop/backdrop';
import Aux from '../../../hoc/auxiliary/auxiliary';
import Logo from '../../../components/Logo/Logo'

const SideDrawer = (props) => {
    let sideDrawerClass = [classes.SideDrawer, classes.Close];
    if (props.open) {
        sideDrawerClass = [classes.SideDrawer, classes.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.open} disappear={props.close} />
            <div className={sideDrawerClass.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <NavigationItems />
            </div>
        </Aux>
    );
}

export default SideDrawer;