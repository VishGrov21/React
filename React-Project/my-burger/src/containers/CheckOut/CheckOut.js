import React, { Component } from 'react';
import CheckOutSummary from './../../components/orders/checkOutSummary/checkOutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class CheckOut extends Component {

    state = {
        ingredients: {},
        price: 0,
    }
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        console.log(this.props);
        const ingredients = {}
        let price = 0;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = +param[1]
            }
            else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ ingredients: ingredients, price: price })
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinueHandler = () => {
        this.props.history.push("/checkout/contact-data")
    }
    render() {
        return (
            <div>
                <CheckOutSummary
                    ingredient={this.state.ingredients}
                    checkoutCancel={this.checkoutCancelHandler}
                    checkoutContinue={this.checkoutContinueHandler}
                />
                <Route
                    path={this.props.match.path + '/contact-data'} render={(props) => (<ContactData
                        ingredients={this.state.ingredients}
                        price={this.state.price} {...props} />)}
                />
            </div>
        );
    }
}

export default CheckOut;