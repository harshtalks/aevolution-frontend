import { Button, Input, TextField, Typography } from "@mui/joy";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../ui/hooks";
import { toggleProgress } from "../../ui/reducers/uiReducer";
import Description from "./Description";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { setDate, setName, setOrganizer } from "../../ui/reducers/eventReducer";
import ImageCard from "../smallerComponents/ChooseImage";

const EventDetails = () => {
  const event = useAppSelector((state) => state.eventForm);
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
        value={event.name}
        onChange={(e) => dispatch(setName(e.target.value))}
      />
      <TextField
        label="Event Organizers"
        placeholder="type in here..."
        variant="soft"
        required
        size="sm"
        id="event name"
        sx={{ mb: 2, borderRadius: "4px" }}
        value={event.organizer}
        onChange={(e) => dispatch(setOrganizer(e.target.value))}
      />
      <Box sx={{ mb: 2 }}>
        <Typography fontSize={"0.75em"} gutterBottom level="body2">
          Event Description
        </Typography>
        <Description />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography fontSize={"0.75em"} gutterBottom level="body2">
          Event Date
        </Typography>
        <Input
          value={event.date}
          onChange={(event) => {
            dispatch(setDate(event.target.value));
          }}
          required
          type={"date"}
          size="sm"
          variant="soft"
        />
      </Box>
      <ImageCard />
      <Button
        sx={{ fontWeight: "500", borderRadius: "4px" }}
        variant="solid"
        onClick={() => {
          dispatch(toggleProgress(2));
        }}
        endDecorator={
          <ArrowForwardOutlinedIcon fontSize="small" sx={{ mr: 0 }} />
        }
      >
        Next Step
      </Button>
    </Box>
  );
};

export default EventDetails;
