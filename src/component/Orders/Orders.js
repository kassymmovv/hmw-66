import React, {Component} from 'react';
import axiosOrders from "../../axiosOrders";
import Spinner from "../../Spinner/Spinner";
import OrderItem from "../../OrderItem/OrderItem";
import errorHandler from "../../hoc/errorHandler";
import ErrorBaundaru from "../../ErrorBoundary/ErrorBoundary";
class Orders extends Component {
    state = {
        orders: [],
        loading: true
    };

    async componentDidMount() {
        try {
            const response = await axiosOrders.get('/orders.json');

            if (!response.data) {
                return this.setState({loading: false});
            }

            const orders = Object.keys(response.data).map(id => {
                return {...response.data[id], id};
            });

            this.setState({orders, loading: false});
        } catch {
            this.setState({loading: false});
        }
    }

    render() {

        let orders = <Spinner/>;

        if (!this.state.loading) {
            orders = this.state.orders.reverse().map(order => (
                <ErrorBaundaru>
                    <OrderItem key={order.id}
                               ingredients={order.ingredients}
                               price={order.price}
                    />
                </ErrorBaundaru>

            ));
        }

        if (orders.length === 0) {
            orders = <p>No orders!</p>
        }

        return orders;
    }
}

export default errorHandler(Orders,axiosOrders) ;