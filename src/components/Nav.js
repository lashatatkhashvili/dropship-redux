import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../styles/navStyle";
import { navAction } from "../actions/navAction";
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
  const isVisible = useSelector((state) => state.nav.isVisible);
  const dispatch = useDispatch();
  const pathName = window.location.pathname;

  return (
    <Header>
      <nav>
        <h1>
          <img src="./assets/logo.png" alt="logo" className="logo" />
          <Close />
        </h1>
        <div className="navigation">
          <ul>
            <li className={pathName === "/profile" && "nav-border"}>
              <div className="item-wrapper">
                <p className="nav__paragraph">Profile</p>
                <Link className="link">
                  <img
                    src="./assets/profile.jpg"
                    alt="profile"
                    className="profile-img"
                  />
                </Link>
              </div>
            </li>
            <li className={pathName === "/dashboard" && "nav-border"}>
              <div className="item-wrapper">
                <p className="nav__paragraph">Dashboard</p>
                <Link to="/dashboard" className="link">
                  <Dashboard
                    fill={pathName === "/dashboard" ? " #61d5df" : "#49547d"}
                  />
                </Link>
              </div>
            </li>
            <li className={pathName === "/catalog" && "nav-border"}>
              <div className="item-wrapper">
                <p className="nav__paragraph">Catalog</p>
                <Link to="/catalog" className="link">
                  <Catalog
                    stroke={pathName === "/catalog" ? " #61d5df" : "#49547d"}
                  />
                </Link>
              </div>
            </li>
            <li>
              <div className="item-wrapper">
                <p className="nav__paragraph">Inventory</p>
                <Link className="link">
                  <Inventory
                    fill={pathName === "/inventory" ? " #61d5df" : "#49547d"}
                  />
                </Link>
              </div>
            </li>
            <li>
              <div className="item-wrapper">
                <p className="nav__paragraph">Profile</p>
                <Link className="link">
                  <Cart fill={pathName === "/cart" ? " #61d5df" : "#49547d"} />
                </Link>
              </div>
            </li>
            <li>
              <div className="item-wrapper">
                <p className="nav__paragraph">Profile</p>
                <Link className="link">
                  <Orders
                    fill={pathName === "/orders" ? " #61d5df" : "#49547d"}
                  />
                </Link>
              </div>
            </li>
            <li>
              <div className="item-wrapper">
                <p className="nav__paragraph">Profile</p>
                <Link className="link">
                  <Transactions
                    fill={pathName === "/transactions" ? " #61d5df" : "#49547d"}
                  />
                </Link>
              </div>
            </li>
            <li>
              <div className="item-wrapper">
                <p className="nav__paragraph">Profile</p>
                <Link className="link">
                  <Store
                    fill={pathName === "/store" ? " #61d5df" : "#49547d"}
                  />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </Header>
  );
}
