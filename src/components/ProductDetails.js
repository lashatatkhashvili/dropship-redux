import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productModal } from "../actions/productsAction";
import BlueButton from "../styles/blueButton";
import { Div } from "../styles/productDetails";

export default function ProductDetails() {
  const [product, setProduct] = useState([]);
  const { productModal: modal, products } = useSelector(
    (state) => state.productsData
  );

  const dispatch = useDispatch();
  const id = window.location.href.split("=")[1];

  useEffect(() => {
    id ? dispatch(productModal(1)) : dispatch(productModal(0));
  }, [id, dispatch]);

  useEffect(() => {
    const prod = id
      ? products.find((item) => item.id === Number(id))
      : products.find((item) => item.id === Number(modal));
    setProduct(prod);
  }, [modal, products, id]);

  const closeModal = () => {
    dispatch(productModal(0));
    window.history.pushState(null, "New Page Title", "/catalog");
  };

  const stopProp = (e) => {
    e.stopPropagation();
  };

  return (
    <Div modal={modal} onClick={closeModal}>
      {product && (
        <div className="product-wrapper" onClick={stopProp}>
          <span className="close-modal" onClick={closeModal}>
            &times;
          </span>

          <div className="content">
            <div className="content-left">
              <div className="prices">
                <p>RRP: $6</p>
                <p>Profit: 25% / $2</p>
                <p>Cost: ${product.price}</p>
              </div>

              <div>
                <img src={product.imageUrl} alt="product big" className="img" />
                <img
                  src={product.imageUrl}
                  alt="product small"
                  className="small-img"
                />
              </div>
            </div>

            <div className="content-right">
              <h2 className="single-product__title">{product.title}</h2>
              <BlueButton
                width="272px"
                height="43px"
                fontSize="16px"
                visible
                className="btn"
              >
                ADD TO MY INVENTORY
              </BlueButton>
              <h3>Product Details</h3>
              <p className="paragraph"> {product.description}</p>
            </div>
          </div>
        </div>
      )}
    </Div>
  );
}
