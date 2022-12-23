import React from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import { Box } from "@mui/joy";

const Loader = () => {
  return (
    <Box sx={{ width: "fit-content", m: "1em auto" }}>
      <CircularProgress variant="plain" color="neutral" />
    </Box>
  );
};

export default Loader;
