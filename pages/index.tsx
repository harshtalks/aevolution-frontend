import { Typography } from "@mui/joy";
import { Box } from "@mui/system";
import React from "react";
import Auth from "../components/Auth";
import HeadComponent from "../components/Head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const index = () => {
  return (
    <div>
      <HeadComponent />
      <Box sx={{ width: "100%" }}>
        <Box>
          <Header />
        </Box>
        <Auth />
        <Box>
          <Typography
            sx={{
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              fontSize: "8em",
              fontWeight: "900",
              marginLeft: "0.3em",
            }}
            level="display1"
            textAlign={"center"}
          >
            Eavolution
          </Typography>
        </Box>
        <Hero />
      </Box>
    </div>
  );
};

export default index;
