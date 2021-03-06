import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../../ui/button/button'
import Classes from './ContactData.module.css'
import Spinner from '../../../ui/spinner/spinner'
import Input from '../../../ui/forms/ContactForm/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../../axios-orders'
import * as orderActions from '../../../store/actions/orderActions'

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
                    valid: false,
                    shouldValidate: true,
                },
                touched: false,
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true,
                    valid: false,
                    shouldValidate: true,
                },
                touched: false,
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 6,
                    valid: false,
                    shouldValidate: true,
                },
                touched: false,
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: '',
                validation: {
                    required: true,
                    valid: false,
                    shouldValidate: true,
                },
                touched: false,
            },
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
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: 'fastest',
                validation: {
                    valid: true,
                    shouldValidate: false,
                }
            }
        },
        formIsValid: false,
    }

    orderHandler = (event) => {
        event.preventDefault();
        let orderForm = {}
        for (let formElementIdentifier in this.state.orderForm) {
            orderForm[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
        }
        const orderDetails = {
            ingredient: this.props.ingredients,
            price: this.props.price,
            customerData: orderForm,
            userId: this.props.userId,
        }
        this.props.burgerPurchasing(orderDetails, this.props.history, this.props.token)
    }

    inputChangedHandler(event, inputElementIdentifier) {
        let orderFormCopy = {
            ...this.state.orderForm
        };
        let orderFormElementCopy = {
            ...orderFormCopy[inputElementIdentifier]
        }
        orderFormElementCopy.value = event.target.value;
        orderFormElementCopy.validation.valid = this.checkValidation(orderFormElementCopy.value, orderFormElementCopy.validation)
        orderFormElementCopy.touched = true;
        orderFormCopy[inputElementIdentifier] = orderFormElementCopy;

        let formIsValid = true;
        for (let formElement in orderFormCopy) {
            formIsValid = orderFormCopy[formElement].validation.valid && formIsValid;
        }
        this.setState({ orderForm: orderFormCopy, formIsValid: formIsValid })
    }

    checkValidation(value, rule) {
        let isValid = true;
        if (rule.required) {
            isValid = value.trim(' ') !== '' && isValid;
        }
        if (rule.minLength) {
            isValid = value >= rule.minLength && isValid;
        }
        if (rule.maxLength) {
            isValid = value >= rule.maxLength && isValid;
        }
        return isValid;
    }

    render() {
        let formElementsArray = [];
        for (let formElement in this.state.orderForm) {
            formElementsArray.push({
                id: formElement,
                elementData: this.state.orderForm[formElement]
            })
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                <h4>Enter your Contact Data</h4>
                {formElementsArray.map(element => (
                    <Input key={element.id}
                        elementType={element.elementData.elementType}
                        elementConfig={element.elementData.elementConfig}
                        value={element.elementData.value}
                        valid={element.elementData.validation.valid}
                        shouldValidate={element.elementData.validation.shouldValidate}
                        changed={(event) => this.inputChangedHandler(event, element.id)}
                        modified={element.elementData.touched}
                    />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>Order Now</Button>
            </form >
        );
        if (this.props.loading) {
            form = <Spinner />
        }
        return (
            <div className={Classes.ContactData}>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilderReducer.ingredient,
        price: state.burgerBuilderReducer.price,
        loading: state.orderReducer.loading,
        token: state.authReducer.tokenId,
        userId: state.authReducer.userId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        burgerPurchasing: (orderData, history, token) => dispatch(orderActions.purchaseBurger(orderData, history, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));