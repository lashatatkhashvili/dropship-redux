import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../actions/productsAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Search, Input, SearchBtn } from "../styles/contentHeader";
import BlueButton from "../styles/blueButton";

export default function CatalogSearch() {
  const [search, setSearch] = useState(true);

  const dispatch = useDispatch();

  const searchToggle = () => {
    window.innerWidth <= 750 && setSearch(!search);
  };

  const searchProd = (e) => {
    setTimeout(() => {
      dispatch(searchProducts(e.target.value.toUpperCase()));
    }, 1500);
  };

  return (
    <>
      <Search>
        <Input
          type="text"
          search={search}
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
      >
        ADD <span className="add-span">TO INVENTORY</span>
      </BlueButton>
    </>
  );
}
