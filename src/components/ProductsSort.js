import React from "react";
import { useDispatch } from "react-redux";
import { sortProducts } from "../actions/productsAction";
import { Sort } from "../styles/contentHeader";
import { BiMenuAltLeft } from "react-icons/bi";

export default function ProductsSort() {
  const dispatch = useDispatch();
  const sortProd = (e) => {
    dispatch(sortProducts(e.target.value));
  };
  return (
    <Sort>
      <label>
        <span>
          <BiMenuAltLeft size={20} />
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
