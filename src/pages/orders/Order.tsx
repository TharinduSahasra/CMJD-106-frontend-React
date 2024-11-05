import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OrderType from "../../types/OrderType";
import { useAuth } from "../../contex/AuthContex";



function Order() {
    const [orders, setOrders] = useState<OrderType[]>([]);
    const { isAuthenticated, jwtToken } = useAuth();

    const config = {
        headers: {
            Authorization: `Bearer ${jwtToken}`
        }
    };

    const loadOrders = async () => {
        try {
            const response = await axios.get<OrderType[]>("http://localhost:8080/orders", config);
            setOrders(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadOrders();
    }, []);

    return (
        <div className="container mx-auto pt-5 pb-5">
            <h1 className="text-3xl font-semibold mb-5">Cart </h1>
            <Link to="/order/create" className="text-blue-500 mb-5 block" > Add to Cart 🛒 </Link>
            <h3>Cart history</h3>
            <table className="w-full border-separate border-spacing-0 border-none text-left">
                <thead className="bg-slate-200">
                    <tr>
                        <th className="w-[80px]">Order ID</th>
                        <th className="w-[200px]">Order Date and Time</th>
                        <th className="w-[200px]">Total Amount</th>
                        <th className="w-[200px]">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{new Date(order.orderDateTime).toLocaleString()}</td>
                            <td>{order.totalPrice}</td>
                            <td>
                                <Link to={`/invoice/${order.id}`} className="text-blue-500">View Invoice</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Order;
