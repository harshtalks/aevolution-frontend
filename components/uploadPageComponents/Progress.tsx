import { Box, LinearProgress } from "@mui/joy";
import React from "react";
import { useAppSelector } from "../../ui/hooks";

const Progress = () => {
  const progress = useAppSelector((state) => state.ui.progress);

  return (
    <Box sx={{ my: 2 }}>
      <LinearProgress
        color="neutral"
        thickness={2}
        sx={{ borderRadius: 0 }}
        determinate
        value={(100 / 3) * progress}
      />
    </Box>
  );
};

export default Progress;
