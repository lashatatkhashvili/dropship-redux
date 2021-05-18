import React from "react";
import PropTypes from "prop-types";
import { Product } from "../styles/productsStyle";

export default function Loading({ quantity }) {
  return [...Array(quantity)].map((el, index) => {
    return (
      <Product style={{ minHeight: "280px" }} key={index}>
        <div className="product-image">
          <img src="./assets/load.gif" width="50" height="50" alt="loading" />
        </div>
      </Product>
    );
  });
}

Loading.propTypes = {
  quantity: PropTypes.number,
};
