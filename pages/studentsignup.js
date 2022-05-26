import { Box, Paper, TextField, Typography, Button, Link } from "@mui/material";
import { useRouter } from "next/router";
import "@fontsource/montserrat"

const style = {
  txtfStyle: {
    marginTop: "20px",
  },

  signinStud:{
    cursor:"pointer",
    marginLeft:"5px"
  }

};

export default function Studentsignup() {

  const router = useRouter()
  const studSignin = () =>{
    router.push("./studentsignin")
  }

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{ display: "flex", flexDirection: "column", padding: "100px" }}
      >
        <Typography variant="h5" sx={{textAlign:"center", marginBottom:"10px", fontFamily:"montserrat"}}>Register Your Account!</Typography>
        <TextField
          id="standard-basic"
          label="Enter Email"
          variant="standard"
          sx={style.txtfStyle}
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          sx={style.txtfStyle}
        />
        <TextField
          id="standard-basic"
          label="Confirm Password"
          variant="standard"
          sx={style.txtfStyle}
        />
        <Box sx={{display:"flex", flexDirection:"column", marginTop:"20px"}}>
        <Button variant="contained">Register</Button>
        <Button variant="outlined" sx={{marginTop:"10px"}}>Reset Textfield</Button>
        </Box>
        <Box sx = {{marginTop:"20px", display:"flex"}}>
          <Typography sx = {{fontFamily:"montserrat"}}>Already Have an Account?</Typography>
          <Link sx = {style.signinStud} onClick={studSignin}>Click Here</Link>
        </Box>
      </Paper>
    </Box>
  );
}
