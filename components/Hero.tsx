import { Alert, Box, Button, Chip, Typography } from "@mui/joy";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useUnsplash from "../hooks/useUnsplash";
import Loader from "./Loader";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Text from "./smallerComponents/Text";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

const Hero = () => {
  const { isLoading, result, error } = useUnsplash();
  const router = useRouter();

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
          <Box
            position={"relative"}
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={result.image}
              alt="image from unsplash"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <Box
              position={"absolute"}
              sx={{ zIndex: 1000, bottom: "10%", left: "5%" }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "200",
                  textTransform: "uppercase",
                }}
                level="body1"
                gutterBottom
              >
                By
              </Typography>
              <Typography
                level="h1"
                gutterBottom
                sx={{
                  color: "#fff",
                  fontWeight: "200",
                  textTransform: "uppercase",
                  letterSpacing: ".25rem",
                }}
              >
                {result.name}
              </Typography>
              <Chip
                sx={{ color: "white", borderRadius: "2px" }}
                variant="outlined"
                onClick={() => window.open(result.unsplash, "_blank")}
              >
                Visit Unsplash
              </Chip>
            </Box>
          </Box>
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
