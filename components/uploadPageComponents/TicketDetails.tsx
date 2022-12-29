import { Button, Input, TextField, Typography } from "@mui/joy";
import { Box } from "@mui/system";
import React from "react";
import { useAppDispatch } from "../../ui/hooks";
import { toggleProgress } from "../../ui/reducers/uiReducer";
import Description from "./Description";

const TicketDetails = () => {
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ width: "60%" }}>
      <TextField
        label="Event Name"
        placeholder="type in here..."
        variant="soft"
        required
        size="sm"
        id="event name"
        sx={{ mb: 2, borderRadius: "4px" }}
      />
      <TextField
        label="Event Organizers"
        placeholder="type in here..."
        variant="soft"
        required
        size="sm"
        id="event name"
        sx={{ mb: 2, borderRadius: "4px" }}
      />
      <Box sx={{ mb: 2 }}>
        <Typography fontSize={"0.75em"} gutterBottom level="body2">
          Event Description
        </Typography>
        <Description />
      </Box>
      <TextField
        label="Event Address"
        placeholder="type in here..."
        variant="soft"
        required
        size="sm"
        id="event address"
        sx={{ mb: 2, borderRadius: "4px" }}
      />
      <Box sx={{ mb: 2 }}>
        <Typography fontSize={"0.75em"} gutterBottom level="body2">
          Event Date
        </Typography>
        <Input required type={"date"} size="sm" variant="soft" />
      </Box>
      <Button
        sx={{ fontWeight: "500", borderRadius: "4px" }}
        variant="outlined"
        onClick={() => {
          dispatch(toggleProgress(2));
        }}
      >
        next step
      </Button>
    </Box>
  );
};

export default TicketDetails;
