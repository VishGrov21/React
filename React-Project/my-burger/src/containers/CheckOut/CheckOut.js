import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
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
        let summary = <Redirect to="/" />

        if (this.props.ingredients) {
            summary = <div>
                <CheckOutSummary
                    ingredient={this.props.ingredients}
                    checkoutCancel={this.checkoutCancelHandler}
                    checkoutContinue={this.checkoutContinueHandler}
                />
                <Route
                    path={this.props.match.path + '/contact-data'} component={ContactData}
                />
            </div>
        }
        console.log("summary = ", summary);
        return summary
    }
}
const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilderReducer.ingredient,
    }
}
export default connect(mapStateToProps)(CheckOut);