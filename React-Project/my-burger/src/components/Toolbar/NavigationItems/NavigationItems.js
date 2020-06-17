import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
import Aux from '../../../hoc/auxiliary/auxiliary'

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact >My Burger</NavigationItem>
            {!props.isAuth
                ? <NavigationItem link="/sign-up">Sign In</NavigationItem>
                :
                <Aux>
                    <NavigationItem link="/my-orders" >My Orders</NavigationItem>
                    <NavigationItem link="/log-out">Logout</NavigationItem>
                </Aux>
            }
        </ul>);
}

export default NavigationItems;