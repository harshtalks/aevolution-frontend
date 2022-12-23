import { Box } from "@mui/system";
import React from "react";

const LeftComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "150px",
          height: "150px",
          borderRadius: "100%",
          background: "#0b090a",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          height: "50%",
          bottom: "0",
          width: "100%",
          backdropFilter: "blur(10px)",
        }}
      ></Box>
    </Box>
  );
};

export default LeftComponent;
