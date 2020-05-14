import React from 'react';
import Classes from './Input.module.css'

const Input = (props) => {
    let inputElement = null;
    let elementClass = [Classes.InputElement];
    if (!props.valid && props.shouldValidate && props.modified) {
        elementClass.push(Classes.Invalid)
    }

    switch (props.elementType) {
        case 'input':
            inputElement = <input className={elementClass.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case 'textArea':
            inputElement = <textarea className={elementClass.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case 'select':
            inputElement = <select className={elementClass.join(' ')}>
                {props.elementConfig.options.map(option => (
                    <option
                        value={option.value}
                        key={option.value}
                        onChange={props.changed}>{option.displayValue}</option>
                ))}
            </select>
            break;
        default:
            inputElement = <input className={elementClass.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
    }
    return (
        <div className={Classes.Input}>
            <label className={Classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;