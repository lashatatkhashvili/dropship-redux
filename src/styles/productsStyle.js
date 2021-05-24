import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  display: flex;

  .products {
    display: flex;
    margin: 0;
    padding: 20px;
    align-content: flex-start;
    flex-wrap: wrap;
    height: calc(100vh - 120px);
    overflow: auto;
    width: 100%;
  }

  @media (max-width: 499px) {
    .products {
      padding: 0;
      margin-top: 20px;
      justify-content: center;
    }
  }
`;

export const Product = styled.div`
  width: calc(100% / 5 - 20px);
  margin: 0 10px 20px;
  display: inline-block;
  vertical-align: top;
  background: #fff;
  border-radius: 8px;
  font-family: Gilroy-med;
  overflow: hidden;
  border: 1px solid #e4e5ec;
  position: relative;
  cursor: pointer;
  border: ${({ selected }) => selected && "1px solid #61d5df"};
  &:hover {
    border: 1px solid #61d5df;
  }

  .product-image {
    height: 205px;
    padding: 10px;
    white-space: nowrap;
    text-align: center;
  }

  img {
    width: 50%;
    height: 100%;
    object-fit: contain;
  }

  .product-name {
    padding: 0 16px 11px;
  }

  h3 {
    text-transform: uppercase;
    font-weight: 700;
    height: 30px;
    overflow: hidden;
    width: 100%;
    font-family: Gilroy-med;
    font-size: 14px;
    color: #29304b;
    margin: 0;
  }

  .product-info {
    height: 34px;
    padding: 10px 14px;
    border-top: 1px solid #e4e5ec;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
  }

  p {
    font-family: Helvetica;
    font-style: normal;
    font-size: 14px;
    color: #47506e;
    position: relative;
    letter-spacing: normal;
    text-transform: capitalize;
  }

  &:hover .product-select {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    position: absolute;
  }

  &:hover .btn {
    display: inline !important;
  }

  @media (max-width: 1770px) {
    width: calc(100% / 4 - 20px);
  }

  @media (max-width: 1600px) {
    width: calc(100% / 3 - 20px);
  }

  @media (max-width: 1366px) {
    width: calc(100% / 2 - 20px);
  }

  @media (max-width: 680px) {
    width: calc(100% - 40px);
  }

  @media (max-width: 499px) {
    .products {
      padding: 0;
      margin-top: 20px;
      justify-content: center;
    }
  }
`;

export const Select = styled.div`
  display: ${({ selected }) => (selected ? "flex" : "none")};
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  position: absolute;

  .round label {
    background-color: #fff;
    border: 1px solid rgb(131, 131, 131);
    border-radius: 50%;
    cursor: pointer;
    height: 24px;
    width: 24px;
    left: 8px;
    position: absolute;
    top: 8px;
  }

  .round label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 5px;
    left: 5px;
    opacity: 0;
    position: absolute;
    top: 6px;
    transform: rotate(-45deg);
    width: 10px;
  }

  .round input[type="checkbox"] {
    visibility: hidden;
  }

  .round input[type="checkbox"]:checked + label {
    background-color: #61d4df;
    border-color: #61d4df;
  }

  .round input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }

  .product__check {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .product__check-label--non {
    display: none;
  }

  .product:hover .product__add {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    position: absolute;
  }

  @media (max-width: 1070px) {
    display: flex;

    .btn {
      display: none;
    }
  }
`;
