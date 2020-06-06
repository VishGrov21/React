import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'


const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/my-orders" >My Orders</NavigationItem>
            <NavigationItem link="/" exact >BurgerBuilder</NavigationItem>
        </ul>);
}

export default NavigationItems;