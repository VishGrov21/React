import React, { Component } from 'react';
import Button from '../../../ui/button/button'
import Classes from './ContactData.module.css'
import axios from '../../../axios-orders'
import Spinner from '../../../ui/spinner/spinner'
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postal: '',
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true })
        const orderDetails = {
            ingredient: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: ' Name of the Customer',
                address: {
                    street: ' Street where customer lives',
                    zipcode: ' Zipcode of the customer',
                    country: ' India',
                },
                email: 'abc@xyz.com',
                deliveryMethod: 'fastest'
            }
        }

        axios.post('/orders.json', orderDetails)
            .then(response => {
                this.setState({ loading: false, });
                this.props.history.push('/')
            })
            .catch(error => this.setState({ loading: false, }))
    }

    render() {
        let form = (
            <form >
                <h4>Enter your Contact Data</h4>
                <input name="name" placeholder="Your Name" />
                <input name="email" placeholder="Your Email" />
                <input name="street" placeholder="Street" />
                <input name="postal" placeholder="Postal Code" />
                <Button btnType="Success"
                    clicked={this.orderHandler}>Order Now</Button>
            </form >
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={Classes.ContactData}>
                {form}
            </div>
        );
    }
}

export default ContactData;