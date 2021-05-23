import styled from "styled-components";

export const Div = styled.div`
  .help-btn {
    font-family: Gilroy-Bold;
    font-size: 14px;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    border: 2px solid #49547d !important;
    width: 24px;
    height: 24px;
    background-color: #fdfcfc;
    color: #49547d;
    border-radius: 50%;
    font-weight: bolder;
    outline: 0;
    cursor: pointer;
  }

  .help-btn:hover {
    box-shadow: 1px 1px 8px 6px #ccc;
  }

  @media (max-width: 1070px) {
    display: none;
  }
`;

export const Info = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0%;
  z-index: 1;
  width: 885px;
  height: 100vh;
  background: #fff;
  transform: ${(props) =>
    props.visible ? "translateX(0%)" : "translateX(100%);"};
  transition-duration: 0.5s;

  nav {
    flex: 1 27%;
    background-color: #fafafa;
    border-right: 3px solid #ededed;
    padding: 38px 5px 38px 2%;
    overflow-y: auto;
    box-shadow: rgb(0 0 0 / 30%) -1px 0 3px;
  }

  main {
    flex: 2 73%;
    background-color: #fff;
    overflow-y: auto;
    padding: 38px 41px 38px 32px;

    h2 {
      font-family: gilroy-bold;
      letter-spacing: 0;
      line-height: 1em;
      font-size: 2.3rem;
      margin-bottom: 0;
      color: #322c3b;
    }

    p {
      line-height: 1.8em;
      padding: 18px 0 29px;
      font-family: Gilroy-med;
      font-size: 15px;
      color: #322c3b;
    }
  }

  .help-more {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 250px;

    h3 {
      font-family: Gilroy-bold;
      letter-spacing: 0;
      font-size: 15px;
      text-align: center;
      line-height: 1em;
    }

    button {
      border-radius: 50px;
      width: 168px;
      height: 42px;
      background-color: #eafbe9;
      color: #02cf01;
      margin: 5px 0 10px;
      font-family: Gilroy-bold;
      border: none;
      outline: 0;
      cursor: pointer;
    }
  }
`;

export const ListItem = styled.li`
  padding: 12px 0 8px 20px;
  margin-bottom: 2px;
  width: 100%;
  border-radius: 20px;
  font-size: 14.4px;
  cursor: pointer;
  font-family: Gilroy-med;
  background-color: ${(props) => (props.active ? "#e5f3fe" : "")};
  color: ${(props) => (props.active ? "#0c7eff" : "")};
  font-weight: ${(props) => (props.active ? "bold" : "")};

  &:hover {
    background-color: #e5f3fe;
    color: #0c7eff;
    font-weight: bold;
  }
`;

export const CloseBtn = styled.button`
  display: ${(props) => (props.visible ? "" : "none")};
  position: absolute;
  margin-left: -45px;
  background: linear-gradient(127deg, #f75070, #ffe194) !important;
  border-radius: 7px 0 0 7px;
  width: 45px;
  height: 41px;
  border: none;
  outline: 0;
  cursor: pointer;
  font-size: 12px;
  color: white;
`;
