import styled from "styled-components";

export const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: ${({ modal }) => (modal ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  overflow: auto;
  background-color: rgba(0, 14, 70, 0.7);

  .product-wrapper {
    width: 90%;
    height: 691px;
    background: gray;
    border-radius: 8px;
    box-shadow: 0 35px 35px 0 rgb(6 16 88 / 16%);
    background-color: #fff;
  }

  span {
    color: #636363;
    float: right;
    font-size: 30px;
    font-weight: bold;
    padding: 0 10px;
    &:hover,
    &:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  }

  .content {
    display: flex;
  }

  .content-left {
    width: 499px;
    padding: 40px;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-radius: 8px;
    background-color: #fbfbfb;
  }

  .prices {
    width: 419px;
    height: 66px;
    padding: 9.3px 29px 8.3px 20px;
    border-radius: 7px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 5%);
    border: 1.5px solid #fff;
    background: #fafafa;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .img {
    margin-top: 40px;
    padding: 20px;
    width: 90%;
    height: 300px;
    object-fit: contain;
  }

  .small-img {
    width: 80px;
    height: 80px;
    margin-top: 60px;
    margin-left: 35%;
    object-fit: contain;
  }

  .content-right {
    width: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.09;
    text-align: left;
    color: #3b3b3b;
    margin-top: 10px;
    margin-bottom: 20px;
    font-family: Gilroy-bold;
  }

  .btn {
    align-self: flex-end;
  }

  h3 {
    width: 120px;
    margin-top: 20px;
    padding-bottom: 5px;
    color: #616161;
    border-bottom: 1px solid #3b3b3b;
    font-size: 16px;
    font-weight: 600;
  }

  .paragraph {
    border-top: 1px solid rgba(112, 112, 112, 0.25);
    padding-top: 20px;
    font-size: 16px;
    line-height: 1.63;
    text-align: left;
    color: #707070;
  }

  @media (max-width: 950px) {
    height: 100vh;

    .product-wrapper {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
    }
  }

  @media (max-width: 850px) {
    .content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 550px) {
    .content-left,
    .content-right {
      width: 100%;
      padding: 20px;
    }

    .prices {
      width: 300px;
      margin-left: -10px;
      margin-top: 10px;
    }

    .img {
      margin-left: 15px;
    }

    .btn {
      width: 140px;
      height: 43px;
      font-size: 12px;
      padding: 0;
    }
  }
`;
