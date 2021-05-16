import React from "react";
import { useDispatch } from "react-redux";

import { navAction, navAnim } from "../actions/navAction";
import Nav from "../components/Nav";

export default function Catalog() {
  const dispatch = useDispatch();

  const toggleNav = () => {
    dispatch(navAction());

    setTimeout(() => {
      dispatch(navAnim());
    }, 200);
  };
  return (
    <div style={{ display: "flex" }}>
      <Nav />
      <button onClick={toggleNav}>OPENNAVYEAAAA</button>
    </div>
  );
}
