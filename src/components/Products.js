import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, productModal } from "../actions/productsAction";
import Loading from "./Loading";
import ProductSelect from "./ProductSelect";
import { Div, Product } from "../styles/productsStyle";

export default function Products() {
  const products = useSelector((state) => state.productsData.products);
  const loading = useSelector((state) => state.productsData.isLoading);
  const dispatch = useDispatch();

  const productDetails = (id) => {
    window.history.pushState(null, "New Page Title", `catalog?product=${id}`);
    dispatch(productModal(id));
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Div>
      <div className="products">
        {loading && <Loading quantity={20} />}
        {products &&
          products.map((item, i) => {
            return (
              <Product
                key={item.id}
                selected={item.selected}
                onClick={() => productDetails(item.id)}
              >
                <ProductSelect id={item.id} selected={item.selected} i={i} />

                <div className="product-image">
                  <img
                    src={item.imageUrl}
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
