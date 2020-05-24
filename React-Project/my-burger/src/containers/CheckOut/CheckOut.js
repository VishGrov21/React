import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckOutSummary from './../../components/orders/checkOutSummary/checkOutSummary';
import ContactData from './ContactData/ContactData';

class CheckOut extends Component {
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
                    ingredient={this.props.ingredients}
                    checkoutCancel={this.checkoutCancelHandler}
                    checkoutContinue={this.checkoutContinueHandler}
                />
                <Route
                    path={this.props.match.path + '/contact-data'} component={ContactData}
                />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ingredients: state.ingredient,
    }
}

export default connect(mapStateToProps)(CheckOut);