import { Link } from "react-router";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-5">
        
        <h1 className="text-5xl font-bold text-gray-900 mb-5">
          Welcome to MyStore
        </h1>

        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Discover amazing products at great prices. 
          Browse our collection and find something you love.
        </p>

        <Link
          to="/products"
          className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
        >
          Explore Products
        </Link>

      </section>

    </div>
  );
};

export default Home;    