import React from 'react';
import buttonStyle from './button.module.css'
import Aux from '../../hoc/auxiliary/auxiliary'

const button = (props) => {
    return (<Aux>
        <button
            disabled={props.disabled}
            onClick={props.clicked}
            className={[buttonStyle.Button, buttonStyle[props.btnType]].join(' ')}>
            {props.children}
        </button>
    </Aux>);
}

export default button;