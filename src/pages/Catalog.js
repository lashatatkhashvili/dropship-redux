import React from "react";
import { StyledCatalog } from "../styles/catalogStyle";
import Nav from "../components/Nav";
import CatalogNav from "../components/CatalogNav";
import ContentHeader from "../components/ContentHeader";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";

export default function Catalog(props) {
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
        <ProductDetails props={props} />
      </main>
    </StyledCatalog>
  );
}
