import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 220px;
  height: 100vh;
  background: #ecedf5;

  @media (max-width: 950px) {
    display: none;
  }
`;
export default function CatalogNav() {
  return <Nav>Nav</Nav>;
}
