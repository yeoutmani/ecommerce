import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
const HatsPage = (props) => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="shop/hats" element={<HatsPage />} />
        <Route path="sign" element={<SignInAndSignUpPage />} />

      </Routes>
    </div>
  );
}

export default App;
