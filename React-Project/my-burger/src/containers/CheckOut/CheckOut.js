import React, { Component } from 'react';
import CheckOutSummary from './../../components/orders/checkOutSummary/checkOutSummary';
class CheckOut extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            patty: 1
        }
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
            </div>
        );
    }
}

export default CheckOut;