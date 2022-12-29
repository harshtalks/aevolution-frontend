import React from "react";
import { Button, Input, TextField, Typography } from "@mui/joy";
import { Box } from "@mui/system";
import Terms from "./Terms";

const EventTicketing = () => {
  return (
    <Box sx={{ width: "60%" }}>
      <TextField
        label="Ticket Price"
        placeholder="type in here..."
        variant="soft"
        required
        size="sm"
        id="event name"
        sx={{ mb: 2, borderRadius: "4px" }}
        helperText="price should be in the ETH. It will be coverted for you in USD"
      />
      <TextField
        label="Number of Tickets"
        placeholder="type in here..."
        variant="soft"
        required
        type="number"
        size="sm"
        id="event name"
        sx={{ mb: 2, borderRadius: "4px" }}
      />
      <TextField
        label="Event Address"
        placeholder="type in here..."
        variant="soft"
        required
        size="sm"
        id="event address"
        sx={{ mb: 2, borderRadius: "4px" }}
      />
      <Terms />
      <Button
        sx={{ fontWeight: "500", borderRadius: "4px" }}
        variant="outlined"
      >
        Proceed
      </Button>
    </Box>
  );
};

export default EventTicketing;
