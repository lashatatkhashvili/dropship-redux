import styled from "styled-components";

export const Div = styled.div`
  height: 125px;
  width: 100%;
  border-bottom: 1px solid #dddddd;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    width: 100%;
    background: white;
    padding-left: 50px;
    padding-right: 75px;
  }

  .wrapper {
    display: flex;
    flex: 2;
    justify-content: flex-end;
    align-items: center;
    padding-left: 10px;
  }

  .nav-icon {
    display: none;
  }

  @media (max-width: 1070px) {
    .header {
      padding-right: 50px;
    }

    .nav-icon {
      display: inline;
      font-size: 22px;
      margin-right: 10px;
      margin-left: 15px;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }

  @media (max-width: 750px) {
    .add {
      margin: 0 15px 0 10px;
    }
    .add-span {
      display: none;
    }

    .header {
      padding-right: 20px;
    }
  }

  @media (min-width: 750px) {
    .add {
      display: inline;
    }
  }
`;

export const Selected = styled.div`
  .filter,
  .filter-text,
  .filter-icon,
  .select-toggle {
    display: none;
  }

  .separate {
    width: 1px;
    height: 25px;
    opacity: 0.3;
    border-left: 1px solid #979797;
    background: #979797;
    margin: 0 12px;
  }

  .title {
    font-family: Gilroy-med;
    font-size: 12px;
    margin-right: 12px;
    white-space: nowrap;
    color: #29304b;
  }

  .check-icon {
    background: white;
    color: #61d5df;
    border-radius: 50%;
    padding: 3px 4px;
  }

  @media (max-width: 1175px) {
    .number {
      display: none;
    }
  }

  @media (max-width: 1155px) {
    .select-toggle {
      display: inline;
    }

    .btn,
    .separate {
      display: none;
    }
  }

  @media (max-width: 950px) {
    .filter,
    .filter-text {
      display: inline;
    }

    .filter {
      margin-right: 20px;
    }
  }

  @media (max-width: 650px) {
    .products {
      display: none;
    }

    .filter {
      margin-right: 0;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    align-items: center;

    .filter-text {
      display: none;
    }

    .filter-icon {
      display: inline;
      font-size: 20px;
      padding: 2px;
    }
  }
`;

export const Search = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  max-width: 480px;

  @media (min-width: 750px) {
    .close {
      display: none;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  font-size: 15px;
  outline: 0;
  color: #29304b;
  padding: 0 16px;
  background-color: #fff;
  border: 1px solid rgba(95, 102, 115, 0.1);

  @media (max-width: 750px) {
    display: ${(props) => (props.visible ? "none" : "inline")};
  }
`;

export const SearchBtn = styled.button`
  width: 48px;
  border: none;
  background-color: transparent;
  align-items: center;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background: 0 0;
  outline: 0;
  cursor: pointer;
  padding: 10px 15px 9px;
  color: rgb(213, 211, 211);
  font-size: 20px;
  transform: scaleX(-1);

  @media (max-width: 750px) {
    display: ${(props) => (props.visible ? "flex" : "none")};
  }
`;

export const Sort = styled.div`
  width: 100%;
  height: 47px;
  padding: 0 50px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  background-color: #fff;
  font-family: "Open Sans";
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #a8a4a4;

  span {
    margin-right: 4px;
  }

  select {
    margin-left: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: "Open Sans";
    font-size: 14px;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: #a8a4a4;
  }

  @media (max-width: 750px) {
    border-top: 1px solid #dddddd;
    justify-content: center;
  }
`;
