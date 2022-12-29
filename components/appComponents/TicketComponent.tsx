import { Divider } from "@mui/joy";
import { Box } from "@mui/system";
import React from "react";
import TicketCard from "./TicketCard";

const TicketComponent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        my: 3,
        justifyContent: "center",
      }}
    >
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </Box>
  );
};

export default TicketComponent;
