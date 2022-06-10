import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  Link,
  Checkbox,
} from "@mui/material";
import { useRouter } from "next/router";
import "@fontsource/montserrat";
import global from "../styles/global";
import Head from "next/head";
import { useState } from "react";

const style = {
  txtfStyle: {
    marginTop: "20px",
  },

  signinStud: {
    cursor: "pointer",
    marginLeft: "5px",
  },
};

export default function Studentsignup() {
  const router = useRouter();
  const [value, setvalue] = useState('')
  const studSignin = () => {
    router.push("./studentsignin");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#11CBD7",
      }}
    >
      <Head>
        <title>SDA | studentsignup</title>
      </Head>
      <Paper
        elevation={3}
        sx={{ display: "flex", flexDirection: "column", padding: "70px" }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            marginBottom: "10px",
            fontFamily: "montserrat",
          }}
        >
          Register Student Account!
        </Typography>
        <TextField
          id="standard-basic"
          type="email"
          label="Enter Email"
          variant="standard"
          sx={style.txtfStyle}
        />
        <TextField
          id="standard-basic"
          type="number"
          label="Student Number"
          variant="standard"
          sx={style.txtfStyle}
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
          sx={style.txtfStyle}
        />
        <TextField
          id="standard-basic"
          label="Confirm Password"
          variant="standard"
          type="password"
          sx={style.txtfStyle}
          helperText="NOTE: Password and Confirm Password must match!"
        />
        <Box sx={{ display: "flex", marginTop: "10px" }}>
          <Checkbox />
          <Typography sx={{ marginTop: "10px" }}>I agree to the </Typography>
          <Typography
            sx={{ marginTop: "10px", marginLeft: "5px", color: "blue" }}
          >
            Terms and Services
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Checkbox />
          <Typography sx={{ marginTop: "10px" }}>I agree to the </Typography>
          <Typography
            sx={{ marginTop: "10px", marginLeft: "5px", color: "blue" }}
          >
            Data and Privacy Policy
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
        >
          <Button sx={global.button1} variant="contained">
            Register
          </Button>
          <Button
            variant="outlined"
            sx={{ ...global.button1, marginTop: "10px" }}
          >
            Reset
          </Button>
        </Box>
        <Box sx={{ marginTop: "20px", display: "flex" }}>
          <Typography sx={{ fontFamily: "montserrat" }}>
            Already Have an Account?
          </Typography>
          <Link sx={style.signinStud} onClick={studSignin}>
            Click Here
          </Link>
        </Box>
      </Paper>
    </Box>
  );
}
