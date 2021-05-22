import React from "react";
import styled from "styled-components";
import SelectedProducts from "./SelectedProducts";
import ProductSearch from "./ProductSearch";

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
`;

export default function ContentHeader() {
  return (
    <Div>
      <header className="header">
        <SelectedProducts />
        <div className="wrapper">
          <ProductSearch />
        </div>
      </header>
    </Div>
  );
}
