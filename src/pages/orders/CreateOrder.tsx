import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductType from "../../types/ProductType";
import { useAuth } from "../../contex/AuthContex";


function CreateOrder() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const { isAuthenticated, jwtToken } = useAuth();
    const navigate = useNavigate();
    
    const config = {
        headers: {
            Authorization: `Bearer ${jwtToken}`
        }
    };

    const [orderedProducts, setOrderedProducts] = useState<ProductType[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [orderId, setOrderId] = useState<number | null>(null); // Track order ID for the invoice page

    // Load products from server
    useEffect(() => {
        async function loadProducts() {
            try {
                const response = await axios.get("http://localhost:8080/products", config);
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        loadProducts();
    }, []);

    // Update total whenever orderedProducts changes
    useEffect(() => {
        const newTotal = orderedProducts.reduce((acc, product) => acc + product.price, 0);
        setTotal(newTotal);
    }, [orderedProducts]);

    // Add a product to the order
    function addProductToOrder(product: ProductType) {
        setOrderedProducts([...orderedProducts, product]);
    }

    // Save order to server
    async function saveOrder() {
        const productIds = orderedProducts.map((product) => product.id);

        try {
            const response = await axios.post("http://localhost:8080/orders", { productIds }, config);
            setOrderId(response.data.id); // Assuming the response includes the new order's ID
        } catch (error) {
            console.log(error);
        }
    }

    // Navigate to the invoice page after saving the order
    function showInvoice() {
        if (orderId) {
            navigate(`/invoice/${orderId}`);
        }
    }

    return (
        <div>
            <div className="flex">
                <div className="w-[400px] border-r border-slate-100 p-2">
                    <span className="text-xl font-semibold text-slate-800 block h-[40px] p-2">Products</span>
                    <div className="mt-5">
                        {products.map((product) => (
                            <div 
                                key={product.id}
                                onClick={() => addProductToOrder(product)} 
                                className="border border-slate-200 rounded-lg p-2 mb-3 cursor-pointer"
                            >
                                <div className="text-lg font-semibold text-slate-800">{product.name}</div>
                                <div className="text-sm text-slate-400">{product.category?.name}</div>
                                <div className="text-sm text-green-600 text-right">Rs. {product.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-2 w-full">
                    <span className="text-xl font-semibold text-slate-800">New Order</span>
                    <table className="w-full border-separate border-spacing-0 border-none text-left">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th className="text-right">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderedProducts.map((product) => (
                                <tr key={product.id}>
                                    <td className="w-[80px]">{product.id}</td>
                                    <td className="w-[200px]">{product.name}</td>
                                    <td className="w-[200px] text-right">Rs. {product.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>
                                    <strong>Total</strong>
                                </td>
                                <td className="border-t border-slate-500 text-right">
                                    <strong>Rs. {total}</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-5">
                        <button 
                            type="button" 
                            className="py-3 px-4 bg-slate-800 text-white rounded-lg hover:bg-slate-950 mb-2 text-sm"
                            onClick={saveOrder}
                        >
                            Save Order
                        </button>
                        {orderId && (
                            <button 
                                type="button" 
                                className="ml-3 py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                                onClick={showInvoice}
                            >
                                Show Invoice
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateOrder;
