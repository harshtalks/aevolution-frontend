import { Box } from "@mui/joy";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import EjectModal from "./Eject";
import HeadComponent from "./Head";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  return (
    <div>
      <HeadComponent />
      <Box sx={{ width: "100%" }}>
        <Box>
          {router.pathname !== "/" && <EjectModal />}
          <Header />
        </Box>
        {children}
      </Box>
    </div>
  );
};

export default Layout;
