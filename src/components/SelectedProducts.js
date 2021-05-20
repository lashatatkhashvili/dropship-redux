import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectControl } from "../actions/productsAction";
import { Selected } from "../styles/contentHeader";
import BlueButton from "../styles/blueButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function SelectedProducts() {
  const { products } = useSelector((state) => state.productsData);

  const dispatch = useDispatch();
  const selected = products.filter((item) => item.selected);

  const select = (value) => {
    dispatch(selectControl(value));
  };

  const toggleSelect = () => {
    selected.length >= 0 && dispatch(selectControl("selectAll"));
    selected.length === products.length && dispatch(selectControl());
  };

  return (
    <Selected>
      <BlueButton height="32px" fontSize="12px" visible className="filter">
        <span className="filter-text">Filter</span>
        <span className="filter-icon">
          <FontAwesomeIcon icon={faFilter} />
        </span>
      </BlueButton>
      <BlueButton
        height="32px"
        fontSize="12px"
        className="btn"
        visible
        onClick={() => select("selectAll")}
      >
        select all
      </BlueButton>

      <span className="separate"></span>
      <span className="title">
        <span className="number">
          selected <span id="count">{selected.length}</span> out of
        </span>
        <span className="products"> 274,290 products</span>
      </span>

      <BlueButton
        height="32px"
        fontSize="12px"
        visible
        className="select-toggle"
        onClick={toggleSelect}
      >
        <span className="check-icon">
          <FontAwesomeIcon icon={faCheck} />
        </span>
      </BlueButton>
      <BlueButton
        height="32px"
        fontSize="12px"
        className="btn"
        visible={selected.length > 0}
        onClick={select}
      >
        Clear Selected
      </BlueButton>
    </Selected>
  );
}
