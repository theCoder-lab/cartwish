import { Route, Routes } from "react-router-dom";

import LoginPage from "../authentication/LoginPage";
import CartPage from "../cart/CartPage";
import HomePage from "../home/HomePage";
import MyOrderPage from "../myorder/MyOrderPage";
import ProductsPage from "../products/ProductsPage";
import SingleProductPage from "../products/singleProduct/SingleProductPage";
import SignupPage from "../authentication/SignupPage";
import Logout from "../authentication/Logout";
import ProtectedRoute from "./ProtectedRoute";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:id" element={<SingleProductPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/myorders" element={<MyOrderPage />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
};

export default Routing;
