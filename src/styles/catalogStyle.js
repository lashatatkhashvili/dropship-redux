import styled from "styled-components";

export const StyledCatalog = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 650px;

  main {
    flex: 1;
    box-sizing: border-box;
    height: 100%;
    background-color: #f8f9fa;
    width: calc(100% - 55px);
    position: relative;
  }

  .catalog {
    display: flex;
  }

  section {
    flex: 1;
    height: 100%;
  }
`;
