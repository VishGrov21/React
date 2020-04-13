import React from 'react';
import LogoImg from '../../../assets/Images/original.png'
import classes from './Logo.module.css'
const Logo = (props) => {
    return (<div className={classes.Logo}>
        <img src={LogoImg} alt="Burger Image" />
    </div>);
}

export default Logo;