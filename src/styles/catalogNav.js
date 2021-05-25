import styled from "styled-components";

export const Nav = styled.nav`
  width: 220px;
  height: 100vh;
  background: #ecedf5;

  .title,
  .category {
    display: flex;
    align-items: center;
    background-color: #49547d;
    font-family: Gilroy-med;
    height: 45px;
    color: #fff;
    font-size: 22px;
    padding-left: 25px;
    position: relative;
  }

  .angle-icon {
    position: absolute;
    font-size: 15px;
    font-weight: bold;
    right: 20px;
  }

  .category {
    opacity: 0.7;
    background-color: #49547d;
    color: #fff;
    font-size: 15px;
  }

  @media (max-width: 950px) {
    display: ${(props) => (props.visible ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100vh;
    overflow: auto;
  }
`;

export const BackBtn = styled.button`
  display: none;
  cursor: pointer;
  margin: 20px 0 10px 9px;
  width: calc(100% - 50px);
  height: 36px;
  border-radius: 4px;
  background-color: #49547d;
  border: none;
  outline: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  align-items: center;

  img {
    transform: rotate(180deg);
    margin-right: 13px;
  }

  @media (max-width: 950px) {
    display: flex;
  }
`;

export const Form = styled.form`
  padding: 0 8px 0 9px;
  select {
    width: 100%;
    margin-top: 20px;
    font-family: Gilroy-med;
    font-size: 12px;
    font-weight: 500;
    color: #1a1f33;
    padding: 6px;
    border: none;
    outline: none;
    text-transform: capitalize;
  }
`;
