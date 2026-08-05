import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;