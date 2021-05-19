import styled from "styled-components";

const BlueButton = styled.button`
  display: ${(props) => (props.visible ? "inline" : "none")};
  text-transform: uppercase;
  white-space: nowrap;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 4px;
  border: none;
  background-color: #61d5df;
  font-family: Gilroy-bold;
  font-size: ${(props) => props.fontSize};
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  padding: 0 14px;
  outline: 0;
  cursor: pointer;
`;

export default BlueButton;
