import { Link, Routes, Router, Route } from "react-router-dom";
import AboutPage from "./components/pages/aboutPage";
import ShopPage from "./components/pages/shopPage";
import HomePage from "./components/pages/homePage";
import Nav from "./components/pages/nav";
import Footer from "./components/pages/footer";
import "./App.css";
import { useEffect, useState } from "react";
import CheckoutPage from "./components/pages/checkoutPage";
import itemList from "./components/itemList";
import CompletedPayment from "./components/pages/completedPayment";

export default function App() {
  const [itemCount, SetItemCount] = useState(0);
  let subTotal = 0;

  function addItem(itemID) {
    itemList[itemID].Quantity++;
    updateCartQuantity();
  }

  function updateCartQuantity() {
    let totalItems = 0;

    itemList.map((item) => {
      totalItems += item.Quantity;
    });

    SetItemCount(totalItems);
  }

  return (
    <div id="app">
      <Nav items={itemCount} />
      <div className="bodyCont">
        <Routes className="routes">
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage addItem={addItem} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/checkout"
            element={
              <CheckoutPage
                updateCartQuantity={updateCartQuantity}
                itemCount={itemCount}
              />
            }
          />
          <Route path="/payment" element={<CompletedPayment />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
