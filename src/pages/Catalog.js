import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import CatalogNav from "../components/CatalogNav";
import ContentHeader from "../components/ContentHeader";
import Products from "../components/Products";

const StyledCatalog = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 650px;

  main {
    flex: 1;
    box-sizing: border-box;
    height: 100%;
    background-color: #f8f9fa;
    width: calc(100% - 55px);
    position: relative;
  }

  .catalog {
    display: flex;
  }

  section {
    flex: 1;
    height: 100%;
  }
`;

export default function Catalog() {
  return (
    <StyledCatalog>
      <Nav />
      <main>
        <div className="catalog">
          <CatalogNav />
          <section>
            <ContentHeader />
            <Products />
          </section>
        </div>
      </main>
    </StyledCatalog>
  );
}
