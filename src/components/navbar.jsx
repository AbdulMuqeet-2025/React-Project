import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
      
      <Link to="/" className="text-2xl font-bold">
        MyStore
      </Link>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>

        <Link to="/products" className="hover:text-gray-300">
          Products
        </Link>

        <Link to="/about" className="hover:text-gray-300">
          About Us
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;