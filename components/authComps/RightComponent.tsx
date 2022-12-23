import { Typography } from "@mui/joy";
import { Box } from "@mui/system";
import React from "react";
import LoginBox from "./LoginBox";

const RightComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <Typography level="h2" fontWeight={"600"}>
        Welcome to eavolution
      </Typography>
      <LoginBox />
    </Box>
  );
};

export default RightComponent;
