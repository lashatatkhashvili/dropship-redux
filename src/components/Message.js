import React from "react";
import { useSelector } from "react-redux";
import Banner from "react-js-banner";

export default function Message() {
  const { message } = useSelector((state) => state.cart);

  if (!message) return null;
  return (
    <Banner
      title={
        message === "success" ? "Successfully added" : "Could not be added"
      }
      css={{
        color: "#FFF",
        backgroundColor: message === "success" ? "green" : "red",
        borderRadius: 16,
        width: 300,
        height: 50,
        position: "absolute",
        top: 5,
        left: "50%",
        zIndex: 9999,
      }}
      visibleTime={2000}
    />
  );
}
