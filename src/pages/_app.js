import "../styles/globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../utils/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
