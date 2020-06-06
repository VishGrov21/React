import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import Aux from '../../hoc/auxiliary/auxiliary';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as orderActions from '../../store/actions/orderActions';
import { connect } from 'react-redux';
import Spinner from '../../ui/spinner/spinner';

class Orders extends Component {
    componentDidMount() {
        this.props.onFetchOrders();
    }
    render() {
        let orders = <Spinner />;
        if (!this.props.loading) {
            orders = this.props.orders.map(order => (
                <Order key={order.id}
                    ingredients={order.ingredient}
                    price={order.price} />
            ))
        }
        return (
            <Aux >
                {orders}
            </Aux>
        );
    }
}
const mapStateToProps = state => {
    return {
        orders: state.orderReducer.orders,
        loading: state.orderReducer.loading,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(orderActions.fetchOrders())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));