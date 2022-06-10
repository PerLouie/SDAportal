import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Head from "next/head";

const style = {
  navi: {
    marginLeft: "20px",
    cursor: "pointer",
    fontSize: "20px",
    color: "black",
    marginTop: "50px",
  },
};

export default function index() {
  const router = useRouter();

  const gotoTeacher = () => {
    router.push("/teachers");
  };

  const studSignin = () => {
    router.push("/studentsignin");
  };

  const gotoIndex = () => {
    router.push("./");
  };

  const gotoContact = () => {
    router.push("/contact");
  };

  const gotostudSignup = () => {
    router.push("./studentsignup");
  };

  return (
    <Box>
      <Head>
        <title>SDA | Homepage</title>
      </Head>
      <Paper elevation={3} sx={{ backgroundColor: "#11CBD7", display: "flex" }}>
        <Box sx={{ marginLeft: "150px", marginTop: "10px" }}>
          <img
            sx={{ cursor: "pointer" }}
            src="images/logo_school.png"
            height={100}
            width={100}
            onClick={gotoIndex}
          ></img>
        </Box>
        <Box sx={{ display: "flex", marginLeft: "700px" }}>
          <Typography sx={{ ...style.navi, fontWeight: "700" }}>
            Home
          </Typography>
          <Typography sx={style.navi} onClick={studSignin}>
            Login
          </Typography>
          <Typography sx={style.navi} onClick={gotostudSignup}>
            SignUp
          </Typography>
          <Typography sx={style.navi} onClick={gotoContact}>
            Contact
          </Typography>
          <Typography sx={style.navi}>About</Typography>
          <Typography sx={style.navi} onClick={gotoTeacher}>
            Teachers
          </Typography>
        </Box>
      </Paper>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          marginTop: "20px",
          backgroundColor: "#F0FFF3",
        }}
      >
        <Box sx={{ flexBasis: "50%", padding: "20px" }}>
          <Typography sx={{ fontSize: "40px", color: "#384259" }}>
            Vision Statement
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
            Our vision is to develop well rounded, confident and responsible
            individuals who aspire to achieve their full potential. We will do
            this by providing a welcoming, happy, safe, and supportive learning
            environment in which everyone is equal and all achievements are
            celebrated.
          </Typography>
        </Box>
        <Box sx={{ flexBasis: "50%", textAlign: "center", padding: "20px" }}>
          <Typography sx={{ fontSize: "40px", color: "#384259" }}>
            Mission Statement
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
            We foster our students’ love for learning, encourage them to try new
            and exciting things, and give them a solid foundation to build on.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", backgroundColor: "#F0FFF3" }}>
        <Box sx={{ padding: "20px", flexBasis: "50%" }}>
          <img src="/images/xo.jpg" height={500} width={700}></img>
        </Box>
        <Box sx={{ flexBasis: "50%" }}>
          <img src="./images/R.png" width={700} height={100}></img>
          <Typography sx={{ marginTop: "10px", fontSize: "60px" }}>
            Be Known
          </Typography>
          <Typography sx={{ fontSize: "60px" }}>Be Anything</Typography>
          <Typography sx={{ fontSize: "60px" }}>
            Be The Best You Can Be
          </Typography>
          <Button
            variant="contained"
            sx={{ marginTop: "10px", color: "white", backgroundColor: "red" }}
            onClick={gotoContact}
          >
            Inquire Now
          </Button>
        </Box>
      </Box>
      <Box>
        <Typography>What We do</Typography>
      </Box>
    </Box>
  );
}
