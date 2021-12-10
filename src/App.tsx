import { ThemeProvider } from "styled-components";
import theme from "./global/theme";
import GlobalStyle from "./globalStyle";
import Details from "./pages/details";
import Home from "./pages/home";

//https://github.com/nolifretes/Desafio-WEB-React
function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Details />
    </ThemeProvider>
  );
}

export default App;
