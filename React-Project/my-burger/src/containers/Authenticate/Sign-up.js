import React, { Component } from 'react';
import Button from '../../ui/button/button';
import Input from '../../ui/forms/ContactForm/Input/Input';
import Classes from './Signup.module.css'
import { connect } from 'react-redux';
import * as authActions from './../../store/actions/index';
import Spinner from '../../ui/spinner/spinner'
import { Redirect, withRouter } from 'react-router';


class SignUp extends Component {
    state = {
        signUpForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    valid: false,
                    shouldValidate: true,
                },
                touched: false,
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    valid: false,
                    shouldValidate: true,
                    minLength: 8,
                },
                touched: false,
            },
        },
        formIsValid: false,
        isSignUp: true,
    }

    authHandler = (event) => {
        event.preventDefault();
        let authData = {
            email: this.state.signUpForm.email.value,
            password: this.state.signUpForm.password.value,
            returnSecureToken: true,
        };
        this.props.onAuth(authData, this.state.isSignUp, this.props.ingredients)
    }

    inputChangedHandler(event, inputElementIdentifier) {
        let signUpFormCopy = {
            ...this.state.signUpForm
        };
        let signUpFormElement = {
            ...signUpFormCopy[inputElementIdentifier]
        }
        signUpFormElement.value = event.target.value;
        signUpFormElement.validation.valid = this.checkValidation(signUpFormElement.value, signUpFormElement.validation)
        signUpFormElement.touched = true;
        signUpFormCopy[inputElementIdentifier] = signUpFormElement;

        let formIsValid = true;
        for (let formElement in signUpFormCopy) {
            formIsValid = signUpFormCopy[formElement].validation.valid && formIsValid;
        }
        this.setState({ signUpForm: signUpFormCopy, formIsValid: formIsValid })
    }

    checkValidation(value, rule) {
        let isValid = true;
        if (rule.required) {
            isValid = value.trim(' ') !== '' && isValid;
        }
        if (rule.minLength) {
            isValid = value.length >= rule.minLength && isValid;
        }
        if (rule.maxLength) {
            isValid = value <= rule.maxLength && isValid;
        }
        return isValid;
    }

    switchAuthMode() {
        this.setState(prevState => {
            return {
                isSignUp: !prevState.isSignUp
            }
        });
    }

    checkIngredients = (ingredients) => {
        if (ingredients === null) {
            return 0;
        }
        const sum = Object.keys(ingredients).map(
            igkey => ingredients[igkey])
            .reduce((accumulator, currentValue) => {
                return accumulator += currentValue;
            }, 0)
        return sum > 0;
    }
    render() {
        let formElementsArray = [];
        for (let formElement in this.state.signUpForm) {
            formElementsArray.push({
                id: formElement,
                elementData: this.state.signUpForm[formElement]
            })
        }
        let form = formElementsArray.map(element =>
            <Input key={element.id}
                elementType={element.elementData.elementType}
                elementConfig={element.elementData.elementConfig}
                value={element.elementData.value}
                valid={element.elementData.validation.valid}
                shouldValidate={element.elementData.validation.shouldValidate}
                changed={(event) => this.inputChangedHandler(event, element.id)}
                modified={element.elementData.touched}
            />
        )
        if (this.props.loading) {
            form = <Spinner />
        }
        const redirectTo = (this.checkIngredients(this.props.ingredients) && this.props.token !== null)
            ? <Redirect to="/checkout" /> : (this.props.token === null) ? null : <Redirect to="/" />;
        const error = this.props.errorMessage ? <p>{this.props.errorMessage}</p> : null;
        return (
            <div className={Classes.SignUp}>
                <form onSubmit={this.authHandler}>
                    {form}
                    <Button btnType="Success" disabled={!this.state.formIsValid}>Submit</Button>
                    {error}
                </form>
                <Button btnType="Danger" clicked={this.switchAuthMode.bind(this)}>Switch to Sign {this.state.isSignUp ? 'In' : 'Up'}</Button>
                {redirectTo}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("state = ", state)
    console.log("loading = ", state.authReducer.loading)
    return {
        loading: state.authReducer.loading,
        errorMessage: state.authReducer.errorMessage,
        ingredients: state.burgerBuilderReducer.ingredient,
        token: state.authReducer.tokenId,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onAuth: (authData, isSignUp) => dispatch(authActions.authentication(authData, isSignUp))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));