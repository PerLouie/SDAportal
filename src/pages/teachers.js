import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import {useRouter} from 'next/router'

export default function Teachers() {
  const router = useRouter();

  const gotoIndex = () =>{
    router.push("./")
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#11CBD7",
      }}
    >
      <Paper
        variant="elevation"
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            opacity: "1",
            alignItems: "center",
            padding: "15px",
          }}
        >
          <img
            src="/images/t1.jpg"
            alt=""
            sx={{
              marginTop: "20%",
            }}
            height={200}
            width={"80%"}
            flex={1}
          ></img>
          <Typography sx={{ fontSize: "20px", marginTop: "20px" }}>
            Georgia Cumpo
          </Typography>
          <Typography sx={{ fontSize: "20px", marginBottom: "20px" }}>
            Grade 1 Teacher
          </Typography>

          <img
            src="/images/t2.jpg"
            alt=""
            height={200}
            width={"80%"}
            flex={1}
          ></img>
          <Typography sx={{ fontSize: "20px", marginTop: "20px" }}>
            Iris Buko
          </Typography>
          <Typography sx={{ fontSize: "20px", marginBottom: "20px" }}>
            Grade 2 Teacher
          </Typography>
          <img
            src="/images/t3.jpg"
            alt=""
            height={200}
            width={"80%"}
            flex={1}
          ></img>
          <Typography sx={{ fontSize: "20px", marginTop: "20px" }}>
            Elizabeth Ramsey
          </Typography>
          <Typography sx={{ fontSize: "20px", marginBottom: "20px" }}>
            Grade 3 Teacher
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            opacity: "1",
            alignItems: "center",
            padding: "15px",
            marginLeft: "50px",
          }}
        >
          <img
            src="/images/t4.jpg"
            alt=""
            sx={{ position: "absolute" }}
            height={200}
            width={"80%"}
            flex={1}
          ></img>
          <Typography sx={{ fontSize: "20px", marginTop: "20px" }}>
            Gerome Yabut
          </Typography>
          <Typography sx={{ fontSize: "20px", marginBottom: "20px" }}>
            Grade 4 Teacher
          </Typography>
          <img
            src="/images/t5.jpg"
            alt=""
            sx={{ position: "absolute" }}
            height={200}
            width={"80%"}
            flex={1}
          ></img>
          <Typography sx={{ fontSize: "20px", marginTop: "20px" }}>
            Daisy Pimentel
          </Typography>
          <Typography sx={{ fontSize: "20px", marginBottom: "20px" }}>
            Grade 5 Teacher
          </Typography>
          <img
            src="/images/t6.jpg"
            alt=""
            sx={{ position: "absolute" }}
            height={200}
            width={"80%"}
            flex={1}
          ></img>
          <Typography sx={{ fontSize: "20px", marginTop: "20px" }}>
            Khai Guttierez
          </Typography>
          <Typography sx={{ fontSize: "20px", marginBottom: "20px" }}>
            Grade 6 Teacher
          </Typography>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            opacity: "1",
            alignItems: "center",
            padding: "15px",
            marginLeft: "50px",
          }}
        >
          <img
            src="/images/t7.jpg"
            alt=""
            sx={{ position: "absolute" }}
            height={200}
            width={"80%"}
            flex={1}
          ></img>
          <Typography sx={{ fontSize: "20px", marginTop: "20px" }}>
            Brando Manabat
          </Typography>
          <Typography sx={{ fontSize: "20px", marginBottom: "20px" }}>
            English Department Head
          </Typography>
          <img
            src="/images/t8.jpg"
            alt=""
            sx={{ position: "absolute" }}
            height={200}
            width={"80%"}
            flex={1}
          ></img>
          <Typography sx={{ fontSize: "20px", marginTop: "20px" }}>
            Rebecca Concepcion
          </Typography>
          <Typography sx={{ fontSize: "20px", marginBottom: "20px" }}>
            Math Department Head
          </Typography>
          <img
            src="/images/t9.jpg"
            alt=""
            sx={{ position: "absolute" }}
            height={200}
            width={"80%"}
            flex={1}
          ></img>
          <Typography sx={{ fontSize: "20px", marginTop: "20px" }}>
            Nene Lapus
          </Typography>
          <Typography sx={{ fontSize: "20px", marginBottom: "20px" }}>
            Filipino Department Head
          </Typography>
        </Paper>
      </Paper>
      <Typography sx={{cursor:"pointer"}} variant="h1" onClick={gotoIndex}>Back</Typography>
    </Box>
  );
}
