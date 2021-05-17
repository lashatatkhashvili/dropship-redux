import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { navAction, navAnim } from "../actions/navAction";
import NavItem from "./NavItem";
import Header from "../styles/navStyle";
import {
  Dashboard,
  Catalog,
  Inventory,
  Cart,
  Orders,
  Transactions,
  Store,
  Close,
} from "../icons";

export default function Nav() {
  const { isVisible, anim } = useSelector((state) => state.nav);
  const dispatch = useDispatch();

  const toggleNav = () => {
    dispatch(navAnim());

    setTimeout(() => {
      dispatch(navAction());
    }, 300);
  };

  const highLited = (slug) =>
    window.location.pathname === `/${slug}` ? " #61d5df" : "#49547d";

  return (
    <Header isVisible={isVisible} onClick={toggleNav}>
      <nav className={anim ? "anim" : ""} onClick={(e) => e.stopPropagation()}>
        <h1>
          <img src="./assets/logo.png" alt="logo" className="logo" />
          <span onClick={toggleNav}>
            <Close />
          </span>
        </h1>
        <div className="list-wrapper">
          <ul>
            <NavItem slug="profile" toggleNav={toggleNav}>
              <img
                src="./assets/profile.jpg"
                alt="profile"
                className="profile-img"
              />
            </NavItem>

            <NavItem slug="dashboard" toggleNav={toggleNav}>
              <Dashboard fill={highLited("dashboard")} />
            </NavItem>

            <NavItem slug="catalog" toggleNav={toggleNav}>
              <Catalog stroke={highLited("catalog")} />
            </NavItem>

            <NavItem slug="inventory" toggleNav={toggleNav}>
              <Inventory fill={highLited("inventory")} />
            </NavItem>

            <NavItem slug="cart" toggleNav={toggleNav}>
              <Cart fill={highLited("cart")} />
            </NavItem>

            <NavItem slug="orders" toggleNav={toggleNav}>
              <Orders fill={highLited("orders")} />
            </NavItem>

            <NavItem slug="transactions" toggleNav={toggleNav}>
              <Transactions fill={highLited("transactions")} />
            </NavItem>

            <NavItem slug="store" toggleNav={toggleNav}>
              <Store fill={highLited("store")} />
            </NavItem>
          </ul>
        </div>
      </nav>
    </Header>
  );
}
