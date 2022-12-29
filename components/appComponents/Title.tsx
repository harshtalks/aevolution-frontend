import { Box, Typography } from "@mui/joy";
import React from "react";

const Title = () => {
  return (
    <Box>
      <Typography
        sx={{
          textTransform: "uppercase",
          fontSize: "5em",
          fontWeight: "900",
          fontFamily: "League Spartan",
          letterSpacing: "0.3em",
          textIndent: "0.3em",
        }}
        level="display1"
        textAlign={"center"}
        gutterBottom
      >
        Tickets on Sale
      </Typography>
      <Typography
        textAlign={"center"}
        level="h4"
        sx={{
          fontFamily: "League Spartan",
          width: "40%",
          m: "auto",
        }}
      >
        See all the available tickets (NFTs) on our platform.
      </Typography>
    </Box>
  );
};

export default Title;
