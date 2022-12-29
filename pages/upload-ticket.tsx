import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React from "react";
import Layout from "../components/Layout";
import Form from "../components/uploadPageComponents/Form";

const Upload = () => {
  return (
    <Layout>
      <Form />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
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

export default Upload;
