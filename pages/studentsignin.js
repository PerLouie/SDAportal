import { Box, Paper, Typography, TextField, Button, Link } from "@mui/material";
import "@fontsource/montserrat";
import { useRouter } from "next/router";

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
  },

  paperStyle: {
    display: "flex",
    flexDirection: "column",
    padding: "100px",
  },

  txtfieldStyle: {
    marginTop: "10px",
  },

  btnStyle: {
    marginTop: "15px",
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
  const studSignup = () => {
    router.push("./studentsignup");
  };

  return (
    <Box
      sx={style.boxStyle}
    >
      <Paper elevation={3} sx={style.paperStyle}>
        <Typography variant="h6" sx={style.tp1Style}>
          Please Login Your Account
        </Typography>
        <TextField
          id="outlined-basic"
          label="Enter Email"
          variant="outlined"
          type="text"
          name="email"
        />
        <TextField
          id="outlined-basic"
          label="Enter Password"
          variant="outlined"
          type="password"
          name="password"
          sx={style.txtfieldStyle}
        />

        <Button sx={style.btnStyle} variant="contained">
          Login
        </Button>
        <Button sx={style.btnStyle} variant="outlined">
          Reset
        </Button>
        <Box sx={{ display: "flex", marginTop: "10px" }}>
          <Typography sx={style.tpStyle}>Dont have an Account?</Typography>
          <Link onClick={studSignup} sx={style.linkStyle}>
            Click Here!
          </Link>
        </Box>
      </Paper>
    </Box>
  );
}
