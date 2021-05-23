import React from "react";
import { useDispatch } from "react-redux";
import { navAction, navAnim } from "../actions/navAction";
import SelectedProducts from "./SelectedProducts";
import ProductSearch from "./ProductSearch";
import Help from "./Help";
import ProductsSort from "./ProductsSort";
import { Div } from "../styles/contentHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function ContentHeader() {
  const dispatch = useDispatch();

  const toggleNav = () => {
    dispatch(navAction());

    setTimeout(() => {
      dispatch(navAnim());
    }, 200);
  };

  return (
    <Div>
      <header className="header">
        <SelectedProducts />
        <div className="wrapper">
          <ProductSearch />
        </div>

        <button className="nav-icon" onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <Help />
      </header>
      <ProductsSort />
    </Div>
  );
}
