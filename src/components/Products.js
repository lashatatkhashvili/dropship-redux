import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, select, productModal } from "../actions/productsAction";
import Loading from "./Loading";
import { Div, Product, Select } from "../styles/productsStyle";
import BlueButton from "../styles/blueButton";

export default function Products() {
  const data = useSelector((state) => state.productsData.products);
  const loading = useSelector((state) => state.productsData.isLoading);
  const dispatch = useDispatch();

  const selectProduct = (i) => {
    dispatch(select(i));
  };

  const productDetails = (id) => {
    window.history.pushState(null, "New Page Title", `catalog?product=${id}`);
    dispatch(productModal(id));
  };

  const stopProp = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Div>
      <div className="products">
        {loading && <Loading quantity={20} />}
        {data &&
          data.map((item, i) => {
            return (
              <Product
                key={item.id}
                selected={item.selected}
                onClick={() => productDetails(item.id)}
              >
                <Select selected={item.selected} className="product-select">
                  <div className="round" onClick={stopProp}>
                    <input
                      type="checkbox"
                      id={item.id}
                      className="product__check"
                      onChange={() => selectProduct(i)}
                      checked={item.selected === true}
                    />
                    <label htmlFor={item.id}></label>
                  </div>

                  <BlueButton
                    fontSize="14px"
                    visible={!item.selected}
                    className="btn"
                    onClick={stopProp}
                  >
                    Add To Inventory
                  </BlueButton>
                </Select>

                <div className="product-image">
                  <img
                    src={item.image}
                    alt="product "
                    height="127"
                    width="191"
                  />
                </div>

                <div className="product-name">
                  <h3>{item.title}</h3>
                </div>

                <div className="product-info">
                  <p>RRP: ${Math.round(item.price / 3)}</p>
                  <p>
                    Profit: {Math.round(item.price / 8)}% / $
                    {Math.round(item.price / 4)}
                  </p>
                  <p>Cost: ${item.price}</p>
                </div>
              </Product>
            );
          })}
      </div>
    </Div>
  );
}
