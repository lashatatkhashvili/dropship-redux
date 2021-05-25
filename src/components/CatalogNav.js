import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { catalogNavAction } from "../actions/navAction";
import RangeSlider from "./RangeSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Nav, Form, BackBtn } from "../styles/catalogNav";
import BlueButton from "../styles/blueButton";

export default function CatalogNav() {
  const [reset, setReset] = useState(false);
  const { catalogNav } = useSelector((state) => state.nav);
  const dispatch = useDispatch();

  const closeNav = () => {
    dispatch(catalogNavAction());
  };

  const resetFunc = (e) => {
    e.preventDefault();
    setReset(!reset);
  };

  return (
    <Nav visible={catalogNav}>
      <div className="title">
        Choose Niche
        <span className="angle-icon">
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </div>

      <div className="category">
        Choose Category
        <span className="angle-icon">
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </div>

      <BackBtn onClick={closeNav}>
        <img src="/assets/right-arrow.svg" alt="arrow-right" />
        Back
      </BackBtn>

      <Form>
        <select>
          <option value="from">Ship From</option>
        </select>
        <select>
          <option value="to">Ship To</option>
        </select>
        <select>
          <option value="sup">Select Supplier</option>
        </select>

        <RangeSlider
          name="Price Range"
          type="$"
          min={1}
          max={1000}
          reset={reset}
        />
        <RangeSlider
          name="Pofit Range"
          type="%"
          min={1}
          max={98}
          reset={reset}
        />

        <BlueButton
          visible
          width="100%"
          fontSize="15px"
          height="40px"
          margin="35px 0 0 0"
          onClick={resetFunc}
        >
          Reset Filter
        </BlueButton>
      </Form>
    </Nav>
  );
}
