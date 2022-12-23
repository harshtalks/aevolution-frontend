import { Alert, Box, Typography } from "@mui/joy";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useUnsplash from "../hooks/useUnsplash";
import Loader from "./Loader";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Text from "./smallerComponents/Text";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

const Hero = () => {
  const { isLoading, result, error } = useUnsplash();

  return (
    <Box
      sx={{
        width: "90%",
        m: "1em auto",
      }}
    >
      <Text />
      <Box
        sx={{
          width: "100%",
          height: "600px",
          position: "relative",
          borderRadius: "10px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {isLoading ? (
          <Loader />
        ) : error === "" ? (
          <Image
            src={result.image}
            alt="image from unsplash"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        ) : (
          <Alert
            color="neutral"
            variant="solid"
            sx={{ m: "2em auto", width: "fit-content" }}
            startDecorator={<ErrorOutlineIcon />}
          >
            {error}
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default Hero;
