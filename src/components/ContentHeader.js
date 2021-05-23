import React from "react";
import { useDispatch } from "react-redux";
import { navAction, navAnim } from "../actions/navAction";
import SelectedProducts from "./SelectedProducts";
import ProductSearch from "./ProductSearch";
import Help from "./Help";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const Div = styled.div`
  height: 125px;
  width: 100%;
  border-bottom: 1px solid #dddddd;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    width: 100%;
    background: white;
    padding-left: 50px;
    padding-right: 75px;
  }

  .wrapper {
    display: flex;
    flex: 2;
    justify-content: flex-end;
    align-items: center;
    padding-left: 10px;
  }

  .nav-icon {
    display: none;
  }

  @media (max-width: 1070px) {
    .header {
      padding-right: 50px;
    }

    .nav-icon {
      display: inline;
      font-size: 22px;
      margin-right: 10px;
      margin-left: 15px;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }

  @media (max-width: 750px) {
    .add {
      margin: 0 15px 0 10px;
    }
    .add-span {
      display: none;
    }

    .header {
      padding-right: 20px;
    }
  }

  @media (min-width: 750px) {
    .add {
      display: inline;
    }
  }
`;

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
    </Div>
  );
}
