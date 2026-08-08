import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;