import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import Menu from "@components/Menu";
import MyOrder from "@containers/MyOrder";
import AppContext from "@context/AppContext";
import menu from "@assets/menu.svg";
import logo from "@assets/yardSaleNom.svg";
import shoppingCart from "@assets/shopping-cart.png";


const Header = () => {
  const [toggle, setToggle] = useState(false);

  const [toggleOrders, setToggleOrders] = useState(false);

  const { state  } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furniture</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            anotherExample@yardSale.com
          </li>
          <li className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}>
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle ? <Menu />: null}
      {toggleOrders ? <MyOrder /> : null}
    </nav>
  );
};

export default Header;
