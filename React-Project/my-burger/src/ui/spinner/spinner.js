import React from 'react';
import classes from './spinner.module.css'

const spinner = () => {
    console.log("Inside Spinner")
    return (
        <div className={classes.spinner}>
            <div className={classes.cube1}></div>
            <div className={classes.cube2}></div>
        </div>
    );
}

export default spinner;