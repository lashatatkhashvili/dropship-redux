import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { select } from "../actions/productsAction";
import BlueButton from "../styles/blueButton";
import { Select } from "../styles/productsStyle";

export default function ProductSelect({ selected, id, i }) {
  const dispatch = useDispatch();

  const stopProp = (e) => {
    e.stopPropagation();
  };

  const selectProduct = (i) => {
    dispatch(select(i));
  };
  return (
    <Select selected={selected} className="product-select">
      <div className="round" onClick={stopProp}>
        <input
          type="checkbox"
          id={id}
          className="product__check"
          onChange={() => selectProduct(i)}
          checked={selected === true}
        />
        <label htmlFor={id}></label>
      </div>

      <BlueButton
        fontSize="14px"
        visible={!selected}
        className="btn"
        onClick={stopProp}
      >
        Add To Inventory
      </BlueButton>
    </Select>
  );
}

ProductSelect.propTypes = {
  id: PropTypes.number,
  i: PropTypes.number,
  selected: PropTypes.bool,
};
