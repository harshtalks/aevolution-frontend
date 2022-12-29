import { Box } from "@mui/system";
import React from "react";
import { keyframes } from "@mui/system";

import ContentLoader from "react-content-loader";

const animationSkeleteon = keyframes` 0% {
    background-color: 'inherit';
  }
  100% {
    background-color: #d9d9d9;
  }`;
const SkeletonEventCard = () => {
  return (
    <Box
      sx={{
        p: 5,
        height: "40vh",
        minWidth: "48%",
        borderBottom: "4px dotted #d9d9d9",
        display: "flex",
        alignItems: "center",
        gap: "2em",
        animation: `${animationSkeleteon} 1s linear infinite alternate;`,
        overflow: "hidden",
      }}
    >
      <ContentLoader
        speed={2}
        width={"50%"}
        height={"30vh"}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect rx={8} width="250" height="200" />
      </ContentLoader>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "start",
          gap: "1em",
        }}
      >
        <ContentLoader
          speed={2}
          width={150}
          height={20}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect rx="2" width="150" height="15" />
        </ContentLoader>
        <ContentLoader
          speed={2}
          width={200}
          height={25}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect rx="2" width="200" height="25" />
        </ContentLoader>
        <ContentLoader
          speed={2}
          width={100}
          height={20}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect rx="2" width="100" height="15" />
        </ContentLoader>

        <ContentLoader
          speed={2}
          width={200}
          height={70}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect width="200" height="200" />
        </ContentLoader>
      </Box>
    </Box>
  );
};

export default SkeletonEventCard;
