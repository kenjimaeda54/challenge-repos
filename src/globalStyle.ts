import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
      padding: 0px;
      margin: 0px;
      outline: 0px;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
  }
  html,body, #root{
      height: 100%;
  }
  *,button,input{
       border: none;
  }
`;
