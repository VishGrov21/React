import React from 'react';
import Burger from '../../Burger/Burger'
import Button from './../../../ui/button/button';
import classes from './checkOutSummary.module.css'
const checkOutSummary = (props) => {
    return (
        <div className={classes.CheckOutSummary}>
            <h1>We Hope it Tastes Well!</h1>
            <div style={{ width: '100%', height: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredient} />
            </div>
            <Button btnType="Danger"
                clicked={props.checkoutCancel}>CANCEL</Button>
            <Button btnType="Success"
                clicked={props.checkoutContinue}>CONTINUE</Button>
        </div>
    );
}

export default checkOutSummary;