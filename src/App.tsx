import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Layout from "./components/layout/Layout";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/user/User";
import Product from "./pages/product/Product";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="users/:id" element={<User />} />
        <Route path="products/:id" element={<Product />} />
      </Route>
      <Route>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
