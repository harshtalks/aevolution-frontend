import { Box } from "@mui/system";
import React from "react";
import SkeletonEventCard from "./SkeletonEventCard";

const SkeletonsLoading = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        my: 3,
        justifyContent: "center",
        gap: "1em",
      }}
    >
      <SkeletonEventCard />
      <SkeletonEventCard />
      <SkeletonEventCard />
      <SkeletonEventCard />
    </Box>
  );
};

export default SkeletonsLoading;
