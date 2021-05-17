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
  const pathName = window.location.pathname;

  const toggleNav = () => {
    dispatch(navAnim());

    setTimeout(() => {
      dispatch(navAction());
    }, 300);
  };

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
              <Dashboard
                fill={pathName === "/dashboard" ? " #61d5df" : "#49547d"}
              />
            </NavItem>

            <NavItem slug="catalog" toggleNav={toggleNav}>
              <Catalog
                stroke={pathName === "/catalog" ? " #61d5df" : "#49547d"}
              />
            </NavItem>

            <NavItem slug="inventory" toggleNav={toggleNav}>
              <Inventory
                fill={pathName === "/inventory" ? " #61d5df" : "#49547d"}
              />
            </NavItem>

            <NavItem slug="cart" toggleNav={toggleNav}>
              <Cart fill={pathName === "/cart" ? " #61d5df" : "#49547d"} />
            </NavItem>

            <NavItem slug="orders" toggleNav={toggleNav}>
              <Orders fill={pathName === "/orders" ? " #61d5df" : "#49547d"} />
            </NavItem>

            <NavItem slug="transactions" toggleNav={toggleNav}>
              <Transactions
                fill={pathName === "/transactions" ? " #61d5df" : "#49547d"}
              />
            </NavItem>

            <NavItem slug="store" toggleNav={toggleNav}>
              <Store fill={pathName === "/store" ? " #61d5df" : "#49547d"} />
            </NavItem>
          </ul>
        </div>
      </nav>
    </Header>
  );
}
