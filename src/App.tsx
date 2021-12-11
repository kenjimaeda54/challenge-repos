import { ThemeProvider } from "styled-components";
import theme from "./global/theme";
import GlobalStyle from "./globalStyle";
import AppRoutes from "./routes/index.routes";

//https://github.com/nolifretes/Desafio-WEB-React
function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
