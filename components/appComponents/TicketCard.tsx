import { Avatar, Chip, Stack, Typography } from "@mui/joy";
import { Box } from "@mui/system";
import React from "react";
import Table from "./Table";

const TicketCard = () => {
  return (
    <Box
      sx={{
        p: 5,
        height: "40vh",
        minWidth: "48%",
        borderBottom: "4px dotted #d9d9d9",
        "&:hover": {
          backgroundColor: "#d9d9d9",
        },
        display: "flex",
        alignItems: "flex-start",
        gap: "2em",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all .25s linear",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "30vh",
          borderRadius: "8px",
          background: "#495057",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "start",
        }}
      >
        <Typography gutterBottom level="h6">
          Dec 25, 2022
        </Typography>
        <Typography gutterBottom level="h4">
          PUBG Tour
        </Typography>
        <Stack direction={"row"} alignItems="center" spacing={1}>
          <Typography fontSize={"0.75em"} level="body1">
            by
          </Typography>
          <Chip variant="outlined" sx={{ borderRadius: "4px" }} size="sm">
            BBX79...177SW
          </Chip>
        </Stack>
        <Table />
      </Box>
    </Box>
  );
};

export default TicketCard;
