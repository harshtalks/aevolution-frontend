import { Button, Chip, Divider, Stack, Typography } from "@mui/joy";
import { Box } from "@mui/system";
import React from "react";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ConnectWallet from "./ConnectWallet";
import { useAccount } from "wagmi";
import Face4OutlinedIcon from "@mui/icons-material/Face4Outlined";
import Authentication from "./Authentication";
import { signOut, useSession } from "next-auth/react";
import SuccessfulSign from "./SuccessfulSign";

const LoginBox = () => {
  const { isConnected } = useAccount();
  const { data: session } = useSession();
  return (
    <Box sx={{ py: 2 }}>
      <Stack>
        <Chip
          startDecorator={<LockOpenOutlinedIcon sx={{ mx: 0 }} />}
          variant="outlined"
          sx={{ borderRadius: "4px" }}
        >
          <code>
            Introducing the Web3.0 authentication service for the users
          </code>
        </Chip>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ConnectWallet />
        {isConnected && (
          <Box sx={{ my: 3 }}>
            {session?.user ? <SuccessfulSign /> : <Authentication />}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default LoginBox;
