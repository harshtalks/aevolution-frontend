import { Avatar, Box, Typography } from "@mui/joy";
import { Stack } from "@mui/system";
import React from "react";
import Progress from "./Progress";

const Stepper = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack alignItems={"center"} spacing={1} direction={"row"}>
          <Avatar
            sx={{ background: "#353535" }}
            color="neutral"
            variant="solid"
            size="sm"
          >
            1
          </Avatar>
          <Typography fontWeight={"bold"} level="body1">
            event details
          </Typography>
        </Stack>
        <Stack alignItems={"center"} spacing={1} direction={"row"}>
          <Avatar
            sx={{ background: "#353535" }}
            color="neutral"
            variant="solid"
            size="sm"
          >
            2
          </Avatar>
          <Typography fontWeight={"bold"} level="body1">
            contact information
          </Typography>
        </Stack>{" "}
        <Stack alignItems={"center"} spacing={1} direction={"row"}>
          <Avatar
            sx={{ background: "#353535" }}
            color="neutral"
            variant="solid"
            size="sm"
          >
            3
          </Avatar>
          <Typography fontWeight={"bold"} level="body1">
            ticket information
          </Typography>
        </Stack>
      </Box>
      <Box>
        <Progress />
      </Box>
    </Box>
  );
};

export default Stepper;
