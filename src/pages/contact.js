import React from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  TextareaAutosize,
  Button
} from "@mui/material";
import Head from "next/head";
import {useRouter} from 'next/router'

export default function Contact() {
  const router = useRouter();

  const gotoIndex = () =>{
    router.push("./")
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
        backgroundColor: "#11CBD7",
      }}
    >
      <Head>
        <title>SDA | Contact</title>
      </Head>
      <Paper
        elevation={3}
        sx={{ display: "flex", flexDirection: "column", padding: "60px" }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            marginBottom: "10px",
            fontFamily: "montserrat",
          }}
        >
          Send us a message
        </Typography>
        <Typography sx={{textAlign:"center"}}>Send your Inquiries and concerns here</Typography>
        <TextField
          sx={{ marginTop: "40px" }}
          id="standard-basic"
          placeholder="Your Name"
          type="name"
          variant="standard"
        />
        <TextField
          sx={{ marginTop: "20px" }}
          id="standard-basic"
          placeholder="Your Email"
          variant="standard"
        />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Enter Your Message here"
          style={{ width: 500, marginTop:"20px", height: 300 }}
        />
        <Box sx={{marginTop:"20px", justifyContent:"center", alignItems:"center", display:"flex", flexDirection:"row"}}>
        <Button variant="outlined">Reset</Button>
        <Button variant="contained">Submit</Button>
        </Box>
        <Typography sx={{marginTop:"20px", color:"blue", cursor:"pointer"}} onClick={gotoIndex}>Back</Typography>
      </Paper>
    </Box>
  );
}
