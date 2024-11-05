import { useState } from "react";

import { Link } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState<string>("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

 

  return (
    <div>
      {/* Include the navigation bar */}
      

      {/* Hero Section */}
      <div className="hero bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-lg mt-5 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our E-commerce Platform!</h1>
        <p className="text-lg mb-6">Discover products, manage orders, and explore categories all in one place.</p>
        <button className="py-2 px-4 bg-white text-blue-600 rounded-lg hover:bg-gray-200">
          Explore Now
        </button>
      </div>

      {/* Feature Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 p-4">
        <div className="feature-card p-6 bg-white rounded-lg shadow-md text-center">
          <i className="fas fa-box-open text-4xl text-blue-500 mb-2"></i>
          <h2 className="text-xl font-semibold mb-2">Browse Products</h2>
          <p className="text-sm text-gray-600">Explore our extensive catalog of products.</p>
          <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <Link to="/product">Go to Products</Link>
          </button>
        </div>
        <div className="feature-card p-6 bg-white rounded-lg shadow-md text-center">
          <i className="fas fa-list-alt text-4xl text-blue-500 mb-2"></i>
          <h2 className="text-xl font-semibold mb-2">Manage Categories</h2>
          <p className="text-sm text-gray-600">Organize products by categories.</p>
          <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <Link to="/category">View Categories</Link>
          </button>
        </div>
        <div className="feature-card p-6 bg-white rounded-lg shadow-md text-center">
          <i className="fas fa-shopping-cart text-4xl text-blue-500 mb-2"></i>
          <h2 className="text-xl font-semibold mb-2">View Cart</h2>
          <p className="text-sm text-gray-600">Check out your selected items.</p>
          <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
           <Link to="/order">Go to Cart</Link>
          </button>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="quick-links flex justify-around mt-8 p-4">
        <a href="/profile" className="text-blue-600 hover:underline">Profile</a>
        <a href="/product" className="text-blue-600 hover:underline">Products</a>
        <a href="/category" className="text-blue-600 hover:underline">Categories</a>
        <a href="/order" className="text-blue-600 hover:underline">Cart</a>
        <a href="/logout" className="text-red-600 hover:underline">Logout</a>
      </div>

      {/* Recent Orders Section */}
      <div className="recent-orders mt-10 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Order #1234 - Total: Rs. 5000</li>
          <li>Order #1235 - Total: Rs. 7500</li>
          <li>Order #1236 - Total: Rs. 4000</li>
        </ul>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials mt-12 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">What Our Users Say</h2>
        <div className="testimonial-card p-4 bg-white rounded-lg shadow-md text-center mb-4">
          <p className="text-gray-700">"This platform has made my shopping experience seamless!"</p>
          <p className="text-right text-sm text-gray-500">- Jane Doe</p>
        </div>
        <div className="testimonial-card p-4 bg-white rounded-lg shadow-md text-center mb-4">
          <p className="text-gray-700">"Great product selection and easy navigation."</p>
          <p className="text-right text-sm text-gray-500">- John Smith</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white p-6 mt-12 rounded-lg text-center">
        <div>
          <h3 className="font-semibold">Our E-commerce Platform</h3>
          <p className="text-sm">The best place to manage your orders and browse products.</p>
        </div>
        <div className="social-icons flex justify-center space-x-4 mt-4">
          <i className="fab fa-facebook text-lg"></i>
          <i className="fab fa-twitter text-lg"></i>
          <i className="fab fa-instagram text-lg"></i>
        </div>
      </footer>
    </div>
  );
}

export default Home;
function useAuth(): { logout: any; } {
  throw new Error("Function not implemented.");
}

