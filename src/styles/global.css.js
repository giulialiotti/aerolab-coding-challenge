import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    overflow-x: hidden;
    font-size: 10px;
  }
`;
