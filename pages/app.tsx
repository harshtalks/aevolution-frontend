import { Box } from "@mui/system";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import TicketComponent from "../components/appComponents/TicketComponent";
import Title from "../components/appComponents/Title";
import Layout from "../components/Layout";
import SkeletonsLoading from "../components/skeletonComps/SkeletonsLoading";
import EavolutionABI from "../abi/Eavolution.json";
import { useContractRead } from "wagmi";
import { getAccount } from "@wagmi/core";

const address = process.env.NEXT_PUBLIC_CONTRACT as string;

const App = () => {
  const { isLoading, data, isError, error } = useContractRead({
    address: "0x6153e4E4F6f9dA328D2b47Bf63E2FB27F367336e",
    abi: EavolutionABI,
    functionName: "name",
  });

  return (
    <Layout>
      <Title />
      <TicketComponent />
    </Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  } else return { props: {} };
};

export default App;
