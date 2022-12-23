import { Alert, Avatar, Box, Button, Card, Chip, Typography } from "@mui/joy";
import { display } from "@mui/system";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import { useAccount, useDisconnect, useEnsAvatar } from "wagmi";
import Loader from "../Loader";

const ConnectWallet = () => {
  const { isConnected, isConnecting, isDisconnected, address, connector } =
    useAccount();

  const { disconnect } = useDisconnect();
  return (
    <Box>
      {isConnecting && <Loader />}
      {isDisconnected && <ConnectButton />}
      {isConnected && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Card variant="outlined" sx={{ width: 400 }}>
            <Typography level="body2">
              You are connected to the wallet.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5em",
                }}
              >
                <Avatar variant="outlined" size="lg" />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <Typography level="body2" sx={{ fontSize: "0.75rem" }}>
                    {address?.slice(0, 4) + "..." + address?.slice(-4)}
                  </Typography>
                  <Typography level="body2" sx={{ fontSize: "0.75rem" }}>
                    connected to {connector?.name}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  sx={{ fontWeight: "500" }}
                  size="sm"
                  color="primary"
                  onClick={() => {
                    disconnect();
                  }}
                >
                  Disconnect
                </Button>
              </Box>
            </Box>
            <Alert
              color="neutral"
              variant="soft"
              sx={{ borderRadius: "4px", mt: 2 }}
            >
              To complete the signin process, you need to sign a message using
              your wallet.
            </Alert>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default ConnectWallet;
