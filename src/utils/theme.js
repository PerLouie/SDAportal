import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "##f50057",
    },
  },

  typography: {
    fontFamily: ["Montserrat"].join(","),

    h1: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "30px",
      lineHeight: "40px",
    },

    h2: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      lineHeight: "24px",
    },

    h3: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "20px",
    },

    h4: {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
    },

    h4: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "20px",
    },

    sh: {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "16px",
    },

    p: {
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "12px",
      lineHeight: "16px",
    },
  },
});

export default theme;
