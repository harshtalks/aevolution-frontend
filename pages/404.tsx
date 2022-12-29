import {
  Button,
  Card,
  CardContent,
  CardCover,
  Chip,
  Typography,
} from "@mui/joy";
import { Box } from "@mui/system";
import React from "react";

const Error = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        py: 3,
      }}
    >
      <Typography gutterBottom level="h1">
        OMG!
      </Typography>
      <Chip size="lg" sx={{ borderRadius: "4px", mb: 2 }}>
        You broke my website. 😭
      </Chip>
    </Box>
  );
};

export default Error;
