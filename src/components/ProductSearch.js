import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts, select } from "../actions/productsAction";
import { addToCart } from "../actions/cartAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Search, Input, SearchBtn } from "../styles/contentHeader";
import BlueButton from "../styles/blueButton";

export default function CatalogSearch() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(true);
  const { products } = useSelector((state) => state.productsData);

  const dispatch = useDispatch();

  const searchToggle = () => {
    window.innerWidth <= 750 && setSearch(!search);
  };

  const searchProd = (e) => {
    setQuery(e.target.value);
  };

  const add = () => {
    products &&
      // eslint-disable-next-line
      products.map((product, i) => {
        product.selected && dispatch(addToCart(product.id, 1));
        product.selected && dispatch(select(i));
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(searchProducts(query.toUpperCase()));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [query, dispatch]);

  return (
    <>
      <Search>
        <Input
          type="text"
          search={search}
          value={query}
          placeholder="search..."
          visible={search}
          onChange={searchProd}
        />

        <SearchBtn onClick={searchToggle} visible={search}>
          <FontAwesomeIcon icon={faSearch} />
        </SearchBtn>

        <SearchBtn onClick={searchToggle} visible={!search} className="close">
          <FontAwesomeIcon icon={faTimes} onClick={searchToggle} />
        </SearchBtn>
      </Search>

      <BlueButton
        height="38px"
        margin="0 14px"
        visible={search}
        className="add"
        onClick={add}
      >
        ADD <span className="add-span">TO INVENTORY</span>
      </BlueButton>
    </>
  );
}
