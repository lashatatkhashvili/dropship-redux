import styled from "styled-components";

const Header = styled.header`
  width: 54px;

  nav {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 54px;
    padding-top: 28px;
    border: 1px solid #dde3ee;
    background-color: #fff;
    height: 100%;
    border-top: 0;
    border-left: 0;
  }

  h1 {
    padding-bottom: 23.7px;
    border-bottom: 1px solid #dde3ee;
    margin-bottom: -8px;
  }

  .logo {
    width: 100%;
    padding: 0 7px;
  }

  .list-wrapper {
    width: 100%;
    padding-top: 30px;
    overflow: auto;
  }

  ul {
    width: 100%;
  }

  li {
    width: 100%;
    height: 42px;
    display: block;
    margin-bottom: 13px;
  }

  .link {
    width: 100%;
    height: 42px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .link:hover .nav-svg {
    fill: #61d5df;
  }

  .profile-img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    overflow: hidden;
    text-indent: 0;
    background-image: linear-gradient(147deg, #61d5df -3%, #61d5df 101%);
    padding: 1px;
    cursor: pointer;
  }

  .nav-svg {
    cursor: pointer;
  }

  .nav-catalog:hover {
    stroke: #61d5df;
  }

  .nav-border {
    border-left: 3px solid #61d5df;
    padding-right: 3px;
  }

  p,
  .nav-close {
    display: none;
  }

  @media (max-width: 1070px) {
    display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    nav {
      position: absolute;
      top: 0;
      right: 0;
      width: 200px;
      padding-top: 28px;
      margin-left: auto;
      border: 1px solid #dde3ee;
      background-color: #fff;
      height: 100vh;
      transform: translateX(100%);
      transition-duration: 0.5s;
    }

    .anim {
      transform: translateX(0%);
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding-right: 20px;
    }

    h1 {
      padding-bottom: 13.7px;
      width: 100%;
      text-align: center;
    }

    .logo {
      width: 60px;
      height: 30px;
      padding: 0;
    }

    .nav-border {
      border-left: 0;
    }

    .profile-img {
      width: 30px;
      height: 30px;
      margin-right: -5px;
    }

    p {
      display: inline;
      margin-left: -20px;
      color: #677791;
      font-size: 13px;
      text-transform: capitalize;
      font-family: Gilroy-med;
    }

    .item-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      margin: 0;
      width: 130px;
      margin-left: auto;
    }

    li {
      width: 170px;
    }

    .link {
      width: auto;
    }

    .nav-border {
      padding-right: 0;
    }

    .nav-close {
      display: inline;
      margin-bottom: 8px;
      margin-left: 20px;
      cursor: pointer;
      fill: rgb(50, 50, 50);
    }
  }
`;

export default Header;
