import React from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../actions/productsAction";
import { Sort } from "../styles/contentHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function ProductsSort() {
  const dispatch = useDispatch();
  const sortProd = (e) => {
    dispatch(getProducts(e.target.value));
  };
  return (
    <Sort>
      <label>
        <span>
          {" "}
          <FontAwesomeIcon icon={faBars} />
        </span>
        Sort By:
      </label>
      <select onChange={sortProd}>
        <option value="">New Arrivals</option>
        <option value="asc">Price: High To Low</option>
        <option value="desc">Price: Low To High</option>
        <option value="az">Alphabet: A to Z</option>
        <option value="za">Alphabet: Z to A</option>
      </select>
    </Sort>
  );
}
