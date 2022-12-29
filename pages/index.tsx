import { Typography } from "@mui/joy";
import { Box } from "@mui/system";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React from "react";
import Auth from "../components/Auth";
import HeadComponent from "../components/Head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const index = () => {
  return (
    <Layout>
      <Auth />
      <Box>
        <Typography
          sx={{
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            fontSize: "8em",
            fontWeight: "900",
            textIndent: "0.3em",
          }}
          level="display1"
          textAlign={"center"}
        >
          Eavolution
        </Typography>
      </Box>
      <Hero />
      <Box>
        <Typography gutterBottom textAlign={"center"} level="body2">
          Made with love by Harsh Pareek
        </Typography>
      </Box>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/app",
        permanent: true,
      },
    };
  } else return { props: {} };
};

export default index;
