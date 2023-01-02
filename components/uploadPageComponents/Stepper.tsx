import { Avatar, Box, Typography } from "@mui/joy";
import { Stack } from "@mui/system";
import React from "react";
import Progress from "./Progress";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useAppSelector } from "../../ui/hooks";

const Stepper = () => {
  const progress = useAppSelector((state) => state.ui.progress);
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
            {progress > 1 ? <DoneAllIcon /> : 1}
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
            {progress > 2 ? <DoneAllIcon /> : 2}
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
            {progress > 3 ? <DoneAllIcon /> : 3}
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
