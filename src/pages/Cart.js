import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartList } from "../actions/cartAction";
import { authFail } from "../actions/authAction";
import { useHistory } from "react-router-dom";
import Nav from "../components/Nav";
import CartList from "../components/CartList";

export default function Cart() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, cart, errorMessage } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartList());

    // eslint-disable-next-line
    if (!isLoading && errorMessage == 401) {
      localStorage.removeItem("token");
      history.push("/login");
      dispatch(authFail());
    }
    // eslint-disable-next-line
  }, [errorMessage]);
  return (
    <div style={{ display: "flex", padding: 50 }}>
      <Nav />
      <CartList cart={cart} />
    </div>
  );
}
