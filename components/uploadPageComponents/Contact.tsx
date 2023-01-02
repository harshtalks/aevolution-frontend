import { Button, Chip, Input, Stack, TextField, Typography } from "@mui/joy";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useAppDispatch } from "../../ui/hooks";
import { toggleProgress } from "../../ui/reducers/uiReducer";
import SocialLinks from "./SocialLinks";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const ContactDetails = () => {
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ width: "60%" }}>
      <TextField
        label="email"
        placeholder="type in here..."
        variant="soft"
        required
        type={"email"}
        size="sm"
        id="event name"
        sx={{ mb: 2, borderRadius: "4px" }}
      />
      <TextField
        label="Phone Number"
        placeholder="type in here..."
        variant="soft"
        required
        type="phone"
        size="sm"
        id="event address"
        sx={{ mb: 2, borderRadius: "4px" }}
        helperText="*please include country code"
      />
      <SocialLinks />
      <TextField
        label="website"
        placeholder="type in here..."
        variant="soft"
        required
        type="phone"
        size="sm"
        id="event address"
        sx={{ mb: 2, borderRadius: "4px" }}
        helperText="*please include country code"
      />

      <Stack direction={"row"} spacing={3}>
        <Button
          sx={{ fontWeight: "500", borderRadius: "4px" }}
          variant="solid"
          onClick={() => {
            dispatch(toggleProgress(3));
          }}
          endDecorator={
            <ArrowForwardOutlinedIcon fontSize="small" sx={{ mr: 0 }} />
          }
        >
          Next Step
        </Button>
        <Button
          startDecorator={
            <ArrowBackOutlinedIcon fontSize="small" sx={{ ml: 0 }} />
          }
          sx={{ fontWeight: "500", borderRadius: "4px" }}
          variant="outlined"
          onClick={() => {
            dispatch(toggleProgress(1));
          }}
        >
          Previous Step
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactDetails;
