import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productModal } from "../actions/productsAction";
import styled from "styled-components";

const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: ${({ modal }) => (modal ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  overflow: auto;
  background-color: rgba(0, 14, 70, 0.7);
`;

export default function ProductDetails({ props }) {
  const [product, setProduct] = useState([]);
  const { productModal: modal, products } = useSelector(
    (state) => state.productsData
  );

  const dispatch = useDispatch();
  const id = props.location.search.split("=")[1];

  useEffect(() => {
    id ? dispatch(productModal(1)) : dispatch(productModal(0));
  }, [id, dispatch]);

  useEffect(() => {
    const prod = id
      ? products.find((item) => item.id === Number(id))
      : products.find((item) => item.id === Number(modal));
    setProduct(prod);
  }, [modal, props, products, id]);

  return (
    <Div modal={modal}>
      <button
        onClick={() => {
          dispatch(productModal(0));
          window.history.pushState(null, "New Page Title", "/catalog");
        }}
      >
        AIT
      </button>
    </Div>
  );
}
