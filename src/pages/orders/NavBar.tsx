import { Link } from "react-router-dom";
import { useAuth } from "../../contex/AuthContex";

function NavBar() {
    const { logout } = useAuth();
  
    return (
      <nav className="w-full bg-gray-100 p-2 rounded-lg mb-4">
        <Link to="/profile" className="bg-gray-800 text-white px-5 py-2 me-3">
          Profile
        </Link>
  
        <Link to="/product" className="bg-gray-800 text-white px-5 py-2 me-3">
          Product
        </Link>
  
        <Link to="/category" className="bg-gray-800 text-white px-5 py-2 me-3">
          Category
        </Link>
  
        <Link to="/order" className="bg-gray-800 text-white px-5 py-2 me-3">
         Cart
        </Link>
  
        <button className="bg-gray-800 text-white px-5 py-2 me-3" onClick={logout}>
          Logout
        </button>
      </nav>
    );
  }
  
  export default NavBar;