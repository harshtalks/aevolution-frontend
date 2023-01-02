import { Typography } from "@mui/joy";
import { Box } from "@mui/system";
import React from "react";
import { useAppSelector } from "../../ui/hooks";
import ContactDetails from "./Contact";
import DemoTicket from "./DemoTicket";
import TicketDetails from "./TicketDetails";
import Stepper from "./Stepper";
import EventDetails from "./EventDetails";

const Form = () => {
  const progress = useAppSelector((state) => state.ui.progress);

  return (
    <Box
      sx={{
        width: "100%",
        mx: "auto",
        my: 2,
        px: 7,
        display: "flex",
        gap: "3em",
      }}
    >
      <Box sx={{ width: "40%" }}>
        <Typography level="h3" fontWeight={700}>
          Create an Event
        </Typography>
        <DemoTicket />
      </Box>
      <Box sx={{ width: "60%" }}>
        <Stepper />
        {progress === 1 && (
          <Box>
            <EventDetails />
          </Box>
        )}

        {progress === 2 && (
          <Box>
            <ContactDetails />
          </Box>
        )}

        {progress === 3 && (
          <Box>
            <TicketDetails />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Form;
