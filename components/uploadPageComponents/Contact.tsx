import { Button, Chip, Input, Stack, TextField, Typography } from "@mui/joy";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useAppDispatch } from "../../ui/hooks";
import { toggleProgress } from "../../ui/reducers/uiReducer";
import SocialLinks from "./SocialLinks";

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
      <Button
        sx={{ fontWeight: "500", borderRadius: "4px" }}
        variant="outlined"
        onClick={() => {
          dispatch(toggleProgress(3));
        }}
      >
        next step
      </Button>
    </Box>
  );
};

export default ContactDetails;
