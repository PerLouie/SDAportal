import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  Snackbar,
  Alert,
} from "@mui/material";
import "@fontsource/montserrat";
import { useRouter } from "next/router";
import { useState } from "react";
import global from "../styles/global";
import Head from "next/head";

const style = {
  linkStyle: {
    cursor: "pointer",
    marginLeft: "5px",
  },

  boxStyle: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#11CBD7",
  },

  paperStyle: {
    display: "flex",
    flexDirection: "column",
    padding: "100px",
  },

  txtfieldStyle: {
    marginTop: "10px",
  },

  tpStyle: {
    textAlign: "center",
  },

  tp1Style: {
    textAlign: "center",
    fontFamily: "montserrat",
    marginBottom: "20px",
  },
};

export default function Studentsignin() {
  const router = useRouter();

  const initialState = {
    email: "",
    password: "",
  };
  const [state, setState] = useState(initialState);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const gotoStudsignup = () => {
    router.push("./studentsignup");
  };

  const handleChange = (prop) => (e) => {
    setState((Item) => ({
      ...Item,
      [prop]: e.target.value,
    }));
  };

  const login = () => {
    const student = "student@gmail.com";
    const password = "student123";

    if (state.email === student && state.password === password) {
      setMessage({
        text: "Succesfully Logged In",
        severity: "success",
      });
      setOpen(true);
      router.push("./");
    } else if (state.email === "" || state.password === "") {
      setMessage({
        text: "Please fill up the form",
        severity: "error",
      });
      setOpen(true);
    } else {
      setMessage({
        text: "Invalid Credentials",
        severity: "error",
      });
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={style.boxStyle}>
      <Head>
        <title>SDA | studentsign</title>
      </Head>
      <Paper elevation={3} sx={style.paperStyle}>
        <Typography variant="h6" sx={style.tp1Style}>
          Login your Student Account
        </Typography>
        <TextField
          label="Enter Email"
          type="email"
          name="email"
          onChange={handleChange("email")}
        />
        <TextField
          label="Enter Password"
          type="password"
          name="password"
          sx={style.txtfieldStyle}
          onChange={handleChange("password")}
        />

        <Button
          sx={{ ...global.button1, marginTop: "15px" }}
          variant="contained"
          onClick={login}
        >
          Login
        </Button>
        <Button
          sx={{ ...global.button1, marginTop: "15px" }}
          variant="outlined"
        >
          Reset
        </Button>
        <Box sx={{ display: "flex", marginTop: "10px" }}>
          <Typography sx={style.tpStyle}>Dont have an Account?</Typography>
          <Link onClick={gotoStudsignup} sx={style.linkStyle}>
            Click Here!
          </Link>
        </Box>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          onClose={handleClose}
          autoHideDuration={6000}
        >
          <Alert
            onClose={handleClose}
            severity={message.severity}
            sx={{ width: "100%" }}
          >
            {message.text}
          </Alert>
        </Snackbar>
      </Paper>
    </Box>
  );
}
