import React from "react";
import { Button, Input, Stack, TextField, Typography } from "@mui/joy";
import { Box } from "@mui/system";
import Terms from "./Terms";
import { useAppDispatch } from "../../ui/hooks";
import { toggleProgress } from "../../ui/reducers/uiReducer";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const EventTicketing = () => {
  const dispatch = useAppDispatch();
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
      <Stack direction={"row"} spacing={3}>
        <Button sx={{ fontWeight: "500", borderRadius: "4px" }} variant="solid">
          Proceed
        </Button>
        <Button
          sx={{ fontWeight: "500", borderRadius: "4px" }}
          variant="outlined"
          onClick={() => {
            dispatch(toggleProgress(2));
          }}
          startDecorator={
            <ArrowBackOutlinedIcon fontSize="small" sx={{ ml: 0 }} />
          }
        >
          Previous Step
        </Button>
      </Stack>
    </Box>
  );
};

export default EventTicketing;
